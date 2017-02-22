<?php $name = $_GET['name'];
$email = $_GET['email'];
$message = $_GET['message'];
$formcontent="From: $name \n Message: $message";
$recipient = "fedsim@gsa.gov";
$subject= "Contact Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) 
echo "Thank You!";

?>
