<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '8FJaDWAoB189ZKzhmMmwQnFcmZunEpPBE6Nh2QGfp2qcOjXSYhRNnCwMou/W4jcAT9nqEy4V1Vkxqv+X5HJ9jw==');
define('SECURE_AUTH_KEY',  'KbQLuaT8K+uKj5I8bvanFVjsiWEsnyFvh8CIhNxJc/brT1PHU6OM4lbJApdyc09eM/YbrHCIhIIhn+mreYL2mg==');
define('LOGGED_IN_KEY',    'uL+vJoHtRYhkSP/uzz5cxBJcVihNTncWxnhp77JFDThtX7OFhzix/SncI9PU+ipKTnYpvaALv5Rl9lQVAozHMQ==');
define('NONCE_KEY',        'c7yqT/NYqgbF7VTItZJoDOHZcdfVzK5AdVhVJTB/uLhsEbLKYuH60aly1+Yl+a3715xSEqwlVMiwseWSfRBySQ==');
define('AUTH_SALT',        'ulK21Khiw9rAk/2LZu37fWA1adwWmSxw7K7wja8FjDAKLA62LxgDPnOpZ3JsyWMotAsAqQ2EtHxmL5RcjLxTcA==');
define('SECURE_AUTH_SALT', '9vBDRd66k+z9IlRO6tk1BxQg7t0J9+7XvUxUu2DSJnqA3krsxSW5l4wkBqwj80VURWADUZK9p6qrC+23ll0Xug==');
define('LOGGED_IN_SALT',   'l+k+yWDzZ2soFz9Zoe/yk91Y3IDme3E44TYW/5xg9z6ht9uNCFBTMAlO62N9nJoSBLFuNG/iRDuakCeGpZQNhw==');
define('NONCE_SALT',       'H+1nrHUxLL+raXcvnrBjw8co632vmwJOebTxOhuh1F0aThjlk1sMdezoJR1GcLpARr73Xf0zNcPrT3eYhG9Axg==');

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';




/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) )
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
