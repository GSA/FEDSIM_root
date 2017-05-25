<?php
$firstname = $_POST['firstame'];
$lastname = $_POST['lastname'];
$agency = $_POST['agency'];
$company = $_POST['company'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$poverview = $_POST['message'];
$formcontent=" From: $firstname \n $lastname \n Agency: $agency \n Company: $company \n Email: $email \n Phone: $phone \n Project Overview: $message";
$recipient = "danielle.hickinbotham@gsa.gov";
$subject = "Contact Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You!" . " -" . "<a href='form.html' style='text-decoration:none;color:#ff0099;'> Return Home</a>";
?>
