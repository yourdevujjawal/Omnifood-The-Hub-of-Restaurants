<?php

    // Get the form fields, removes html tags and whitespace.
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["text"];

    // Check the data.
    if (empty($name) OR empty($message)) {
        header("Location: http://www.ujjwalchatterjee.com/index.php?success=-1#form");
        exit;
    }

    // Set the recipient email address. Update this to YOUR desired email address.
    $recipient = "ujjwal258518@gmail.com";

    // Set the email subject.
    $subject = "New contact from $name";

    // Build the email content.
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Message:\n$message\n";

    // Build the email headers.
    $email_headers = "From: $name";

    // Send the email.
    mail($recipient, $subject, $email_content, $email_headers);
    
    // Redirect to the index.html page with success code
    header("Location: http://www.ujjwalchatterjee.com/index.php?success=1#form");

?>