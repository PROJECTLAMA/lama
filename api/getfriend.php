<?php
header('content-type: application/json; charset=utf-8');
include 'libs/medoo/medoo.php';
include 'dbcon.php';

$data = $database->query("
SELECT 
   IDX,
   USER_NAME,
   REG_DATE
FROM LAMA_FRIEND
")->fetchAll(PDO::FETCH_ASSOC);
  
  print_r(json_encode($data));
?>











