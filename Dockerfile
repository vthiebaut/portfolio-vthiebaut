FROM php:8.3-fpm

RUN apt-get update && apt-get install -y \
    git zip unzip curl libpq-dev libxml2-dev \
    && docker-php-ext-install pdo pdo_pgsql xml

# Symfony CLI
RUN curl -sS https://get.symfony.com/cli/installer | bash \
    && mv /root/.symfony*/bin/symfony /usr/local/bin/symfony

COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/symfony