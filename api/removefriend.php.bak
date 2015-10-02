<?php
header('content-type: application/json; charset=utf-8');
include 'libs/medoo/medoo.php';
include 'dbcon.php';

$idx = $_GET['IDX'];

$data = $database->query("
DELETE FROM LAMA_FRIEND
WHERE IDX = $idx;
")->fetchAll(PDO::FETCH_ASSOC);
  
  print_r('{}');
?>











