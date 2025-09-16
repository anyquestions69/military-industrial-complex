# Базовый образ PHP 8.2 + Apache
FROM php:8.2-apache

# Установка зависимостей PHP и системы
RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        libpng-dev libjpeg-dev libfreetype6-dev libzip-dev zip unzip git \
        libonig-dev libxml2-dev default-mysql-client composer \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install mysqli mbstring gd zip pdo_mysql \
    && rm -rf /var/lib/apt/lists/* /var/cache/apt/*

# Копируем исходники Roundcube
WORKDIR /var/www/html
COPY . .

# Установка зависимостей PHP через Composer
WORKDIR /var/www/html/program
RUN composer install --no-dev --optimize-autoloader

# Создание директорий для сессий, temp и логов
RUN mkdir -p /var/lib/php/sessions \
    /var/log/roundcube \
    /var/www/html/program/temp \
    && chown -R www-data:www-data /var/lib/php/sessions \
    && chown -R www-data:www-data /var/log/roundcube \
    && chown -R www-data:www-data /var/www/html/program

# Копируем скрипт инициализации
RUN chmod +x /usr/local/bin/init-roundcube.sh

EXPOSE 80

# Старт контейнера через скрипт инициализации
CMD ["/usr/local/bin/init-roundcube.sh"]
