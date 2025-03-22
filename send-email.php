<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $company = $_POST["company"];
    $message = $_POST["message"];

    $to = "chavikant12@gmail.com"; // Replace with your actual email
    $subject = "New Contact Form Submission";
    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "Content-Type: text/plain; charset=UTF-8";

    $body = "Name: $name\nEmail: $email\nCompany: $company\nMessage: $message";

    if (mail($to, $subject, $body, $headers)) {
        echo "Success";
    } else {
        echo "Error: Unable to send email.";
    }
}
?>
