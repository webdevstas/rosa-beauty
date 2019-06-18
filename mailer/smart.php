<?php 

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];


require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.yandex.ru';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'zayavochkin.site@yandex.ru';                 // Наш логин
$mail->Password = 'S373739';                           // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
 
$mail->setFrom('zayavochkin.site@yandex.ru', 'Сайт Заявка');   // От кого письмо 
$mail->addAddress('stanislaw.spirin@yandex.ru');     // Add a recipient
// $mail->addAddress('ursmk@mail.ru');
// $mail->addAddress('ursmk_stroi@mail.ru');
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Новая заявка с сайта';
$mail->Body    = '<b>Пользователь оставил данные:<b><br>
Имя:'.$name.'<br>
Телефон:'.$phone;


$mail->AltBody = 'Это альтернативный текст';

if(!$mail->send()) {
    echo "Ошибка";
} else {
	header('location: ../thankyou.html');
}
?>

