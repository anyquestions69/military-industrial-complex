FROM php:8.2-apache

RUN apt-get update \
    && apt-get install -y --no-install-recommends \
       libpng-dev libjpeg-dev libfreetype6-dev libzip-dev zip unzip git curl \
       libonig-dev libxml2-dev default-mysql-client \
       libicu-dev pkg-config \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install mysqli mbstring gd zip pdo_mysql intl xml \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

RUN curl -sS https://getcomposer.org/installer | php \
      -- --install-dir=/usr/local/bin --filename=composer

RUN a2enmod rewrite headers

WORKDIR /var/www/html

COPY . .

RUN composer install --no-dev --optimize-autoloader || true

RUN mkdir -p /var/lib/php/sessions \
    /var/log/roundcube \
    /var/www/html/temp \
    /var/www/html/logs \
    && chown -R www-data:www-data /var/www/html \
    && chown -R www-data:www-data /var/lib/php/sessions /var/log/roundcube /var/www/html/temp /var/www/html/logs

EXPOSE 80

CMD ["apache2-foreground"]
