<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, and ABSPATH. You can find more information by visiting
 * {@link http://codex.wordpress.org/Editing_wp-config.php Editing wp-config.php}
 * Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'agrorganicos_dev');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', '127.0.0.1');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

define('FS_METHOD', 'direct');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '-CJa`^|$a0{v*C_)yJk=I*-k8FA|ONk+C!1AA9t;O]no{aM`xzM9%3G/gnFgHvl9');
define('SECURE_AUTH_KEY',  '+Jb9[l%_;~JPW-oVz=o <vfM(&Dwik=r#:-sIsv4%ypOlb2|Ur-|B]1{$<;O&/|w');
define('LOGGED_IN_KEY',    'T H(Y+[I=&!P8ARB28c,O6 aae5kt/o:-+H|/A{8;:,J5!tvS*)tMxYjqL!5I$SH');
define('NONCE_KEY',        'Xy4+~Al_lu<+xg8Lx.|8n,LRW}@VKkorT5P2u~}g*67l9I7u^+t wY)X}E=0:kMz');
define('AUTH_SALT',        'AP/>].z{q@3V7FSi=1_S//;5<70pN0d9pFa-u%K>9!)*Yp)|C%CFUN6H.N*o/rrf');
define('SECURE_AUTH_SALT', 'Q3ai*)6W^I1Uvs5M|NZ9{aq+B*^qbz1]a_pqV+t5trnc%JZ0E-bF>:({fnh33[s=');
define('LOGGED_IN_SALT',   '~|Uy}HnRJ.vg!sPb)4(Z#C;a(rKylV|+djGQ-Ql}2&I56=C4EzD~du,O7}l8[t0D');
define('NONCE_SALT',       'oG_lnLQ^%P)5-%W52t(-W)Yu.pfxmDQ>nBx1f[M6*C*PcW=v)L`}]Yv9sD-E2N~)');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
