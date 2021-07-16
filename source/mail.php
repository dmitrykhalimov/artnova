<?php

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$key = $_POST['user_key'];

if (!isset($key)) {
    echo('Unauthorized');
    die;
}

$mail->isSMTP();
$mail->Host = 'smtp.mail.ru';
$mail->SMTPAuth = true;
$mail->Username = '';
$mail->Password = '';
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;

$mail->setFrom('');
$mail->addAddress('');
$mail->addCC('');
$mail->isHTML(true);

$mail->Subject = 'Заявка с сайта Арт Нова';
$mail->Body    = '' .$name . ' оставил заявку на консультацию, его телефон ' .$phone;
$mail->AltBody = '';

if(!$mail->send()) {
  header('location: error.html');
} else {
  header('location: thank-you.html');
}
?>
