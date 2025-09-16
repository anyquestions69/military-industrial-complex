FROM php:7.4-apache


RUN apt-get update -o Acquire::AllowInsecureRepositories=true \
    && apt-get install -y --no-install-recommends \
       libpng-dev libjpeg-dev libfreetype6-dev \
       libzip-dev zip unzip git \
    && rm -rf /var/lib/apt/lists/* /var/cache/apt/*
RUN docker-php-ext-install mysqli mbstring gd zip


WORKDIR /var/www/html
COPY . .


RUN a2enmod rewrite

EXPOSE 80
CMD ["apache2-foreground"]
