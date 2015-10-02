<?php
//$conn=mysql_connect('localhost', 'gaeyoucom', 'love7878');
//$db=mysql_select_db("gaeyoucom", $conn);
$setting = array(// required
	'database_type' => 'mysql',
	'database_name' => 'gaeyoucom',
	'server' => 'localhost',
	'username' => 'gaeyoucom',
	'password' => 'lamapw',
	'charset' => 'utf8',
 
	// optional
	'port' => 3306,
	// driver_option for connection, read more from http://www.php.net/manual/en/pdo.setattribute.php
	'option' => array(
		PDO::ATTR_CASE => PDO::CASE_NATURAL
	)
);
$database = new medoo($setting);
?>


