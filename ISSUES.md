# Setup Issues and Fixes

Date: 2026-02-04 to 2026-02-05

This document summarizes the issues encountered while bringing up the app and the fixes applied.

## 1) `/bin/sh` error in `docker/run.sh`
**Symptom**
- `set: line 2: illegal option -`.

**Fix**
- Made `docker/run.sh` POSIX-compatible (removed bash-only `[[ ... ]]`) and normalized line endings.
- Added a `sed` step in the Dockerfile to strip CRLF before execution.

## 2) PHP version mismatch (Composer required >= 8.4)
**Symptom**
- `Your Composer dependencies require a PHP version ">= 8.4.0". You are running 8.2.16.`

**Fix**
- Migrated container base to `php:8.4-fpm-alpine` and reconfigured paths to `/usr/local/etc/php` and `/usr/local/etc/php-fpm.d`.

## 3) Alpine packages not found for PHP 8.4
**Symptom**
- `php84-*` packages missing in Alpine repositories.

**Fix**
- Switched to the official PHP image and built extensions with `docker-php-ext-*` and PECL.

## 4) `phpize` / Xdebug build failure
**Symptom**
- `phpize failed` and `rtnetlink.h is required`.

**Fix**
- Installed build dependencies with `$PHPIZE_DEPS` and added `linux-headers`.

## 5) Supervisor couldn’t start PHP-FPM
**Symptom**
- `spawnerr: can't find command 'php-fpm82'`.

**Fix**
- Updated supervisor config to use `php-fpm`.

## 6) PHP-FPM failed: user not defined
**Symptom**
- `[pool www] user has not been defined` and FPM init failed.

**Fix**
- Added `user = www-data` and `group = www-data` to the FPM pool config.

## 7) Xdebug double-loading warning
**Symptom**
- `Cannot load Xdebug - it was already loaded`.

**Fix**
- Removed the explicit `zend_extension=xdebug` line and stopped renaming `xdebug.ini` in the startup script.

## Final state
- Containers build and start successfully.
- App is reachable at http://localhost:81/.
- Xdebug warning about client connection is expected if no debugger is listening on port 9003.
