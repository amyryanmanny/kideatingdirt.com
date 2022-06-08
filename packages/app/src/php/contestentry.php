<?php
if(isset($_POST['submit'])) {
$to = "pie4prez@gmail.com";
$subject = "Riddle Answer";
$name_field = $_POST['name'];
$question = $_POST['question'];
$answer = $_POST['answer'];
 
$body = "From: $name_field \n Question: $question \n Answer: $answer";

echo "your answer has been submitted";
mail($to, $subject, $body);
} else {
echo "try again chump";
}
?>