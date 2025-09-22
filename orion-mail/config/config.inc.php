<?php


$config = [];


$config['db_dsnw'] = 'mysql://roundcube:roundcubepass@orion-db:5432/roundcube?ssl_mode=DISABLED';


$config['default_host'] = 'localhost';

$config['smtp_server'] = getenv('ROUNDCUBE_SMTP_SERVER') ?: 'localhost';
$config['smtp_port']   = getenv('ROUNDCUBE_SMTP_PORT') ?: 25;
$config['smtp_user']   = getenv('ROUNDCUBE_SMTP_USER') ?: '';
$config['smtp_pass']   = getenv('ROUNDCUBE_SMTP_PASS') ?: '';
$config['smtp_auth_type'] = 'LOGIN';  // MailHog принимает LOGIN


// provide an URL where a user can get support for this Roundcube installation
// PLEASE DO NOT LINK TO THE ROUNDCUBE.NET WEBSITE HERE!
$config['support_url'] = '';

// Name your service. This is displayed on the login screen and in the window title
$config['product_name'] = 'Roundcube Webmail';

$config['des_key'] = 'rcmail-!24ByteDESkey*Str';

// List of active plugins (in plugins/ directory)
$config['plugins'] = [
    'archive',
    'zipdownload',
];

// skin name: folder from skins/
$config['skin'] = 'elastic';
