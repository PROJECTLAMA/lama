<?php
header('content-type: application/json; charset=utf-8');
include 'libs/medoo/medoo.php';
include 'dbcon.php';

$user_name = $_GET['USER_NAME'];

$data = $database->query("
INSERT INTO LAMA_FRIEND(
	USER_NAME,
	REG_DATE
) VALUES (
	'$user_name',
	NOW()
)
")->fetchAll(PDO::FETCH_ASSOC);
  
  $result = array(
    USER_NAME => $user_name
  );
  print_r(json_encode($result));
?>











