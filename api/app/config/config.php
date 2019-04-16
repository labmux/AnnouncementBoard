<?php

//(B4)App root
//echo __FILE__; // shows the location of the file
//echo dirname(dirname(dirname(__FILE__))); //shows the path up to the parent
define('APPROOT',dirname(__FILE__)); // define constant up to the app root, and can access from any file

// (B4.1) url root
define('URLROOT','http://localhost/AnnouncementBoard/api/');

//(B4.2) site name
define('SITENAME','AnnouncementBoard');

//(B6) DB Params
define('DB_HOST','localhost:8889'); // Make sure you type the right local host !!!
define ('DB_USER','root');
define ('DB_PASS','');
define('DB_NAME','AnnouncementBoard'); // create this db in phpmyadmin
