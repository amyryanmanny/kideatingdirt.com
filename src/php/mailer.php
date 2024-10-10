<?php
if(isset($_POST['submit'])) {
$to = "pie4prez@gmail.com";
$subject = "KED Suggestion";
$name_field = $_POST['name'];
$email_field = $_POST['email'];
$message = $_POST['message'];
 
$body = "From: $name_field \n E-Mail: $email_field \n Message: \n $message";

echo "your datums have been submitted";
mail($to, $subject, $body);
} else {
echo "no datums submitted. try again chump";
}
?>