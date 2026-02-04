#!/bin/sh
set -e

timestamp()
{
 date +"%Y-%m-%d %T"
}

runConsoleSymfonyCommand () {
    echo "$(timestamp):[run] php bin/console $1"
    output=`php bin/console $1`
    echo "$(timestamp):[run] Output command 'php bin/console $1' ${output}"
    exitcode=$?
    if [ "$exitcode" != "0" ];
    then
        exit 1;
    fi
}

if [ -z "$DEBUG" ]
then
    echo "$(timestamp):[run] Debug disabled"
    [ -f /usr/local/etc/php/conf.d/xdebug.ini ] && mv /usr/local/etc/php/conf.d/xdebug.ini /usr/local/etc/php/conf.d/xdebug.off
else
    echo "$(timestamp):[run] Debug enabled"
    [ -f /usr/local/etc/php/conf.d/xdebug.off ] && mv /usr/local/etc/php/conf.d/xdebug.off /usr/local/etc/php/conf.d/xdebug.ini
fi

runConsoleSymfonyCommand "cache:clear"

echo "$(timestamp):[run] Running supervisord";
/usr/bin/supervisord -c ./docker/config/supervisord.conf
