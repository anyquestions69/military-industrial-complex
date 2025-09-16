#!/bin/bash
set -e

# Создаём директории для сессий и логов (ещё раз на всякий случай)
mkdir -p /var/lib/php/sessions /var/log/roundcube /var/www/html/program/temp
chown -R www-data:www-data /var/lib/php/sessions /var/log/roundcube /var/www/html/program

# Ждём пока MySQL будет готова
until mysql -h"$ROUNDCUBE_DB_HOST" -u"$ROUNDCUBE_DB_USER" -p"$ROUNDCUBE_DB_PASSWORD" -e ";" ; do
  echo "Waiting for MySQL..."
  sleep 2
done

# Инициализация базы Roundcube
mysql -h"$ROUNDCUBE_DB_HOST" -u"$ROUNDCUBE_DB_USER" -p"$ROUNDCUBE_DB_PASSWORD" "$ROUNDCUBE_DB_NAME" < /var/www/html/program/SQL/mysql.initial.sql

# Добавляем CTF-пользователя
mysql -h"$ROUNDCUBE_DB_HOST" -u"$ROUNDCUBE_DB_USER" -p"$ROUNDCUBE_DB_PASSWORD" "$ROUNDCUBE_DB_NAME" <<EOF
INSERT INTO users (username, password, created, active)
VALUES ('ctfuser', MD5('ctfpassword'), NOW(), 1)
ON DUPLICATE KEY UPDATE username=username;
EOF

# Запуск Apache
apache2-foreground
