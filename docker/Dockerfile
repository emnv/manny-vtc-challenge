FROM php:8.4-fpm-alpine

RUN apk --no-cache add \
        nginx supervisor curl bash vim \
        icu-dev zlib-dev libzip-dev \
        libpng-dev libjpeg-turbo-dev freetype-dev \
        imagemagick-dev

RUN docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install -j$(nproc) pdo pdo_mysql mysqli intl gd zip opcache \
    && pecl install xdebug imagick \
    && docker-php-ext-enable xdebug imagick

# Configure nginx
COPY config/xdebug.ini /usr/local/etc/php/conf.d/xdebug.ini
COPY config/nginix/template/nginx.template.conf /etc/nginx/nginx.conf

# Configure PHP-FPM
COPY config/fpm-pool.conf /usr/local/etc/php-fpm.d/www.conf
COPY config/php.ini /usr/local/etc/php/conf.d/custom.ini

# Install composer from the official image
COPY --from=composer /usr/bin/composer /usr/bin/composer

# Setup document root
RUN mkdir -p /var/www/html

# Add application
WORKDIR /var/www/html

# Expose the port nginx is reachable on
EXPOSE 8080

# Let supervisord start nginx & php-fpm
CMD ["sh", "-c", "sed -i 's/\r$//' ./docker/run.sh; sh ./docker/run.sh"]
