<?php
    $name = $_POST['name'];
    $visitor_email = $_POST['email'];
    $message = $_POST['message'];

    $email_from = 'blindheim.daniel@gmail.com';

    $email_subject = "New Form Submission";

    $email_body = "Username: $name.\n".
                    "User Email: $visitor_email.\n".
                        "User Message: $message.\n";


                        
    $to = "blindheim.daniel@gmail.com";

    $headers = "From: $email_from \r\n";

    $headers .= "Reply-To: $visitor_email \r\n";

    mail($to,$email_subject,$email_body,$headers);

    header("Location: ../contact.php");


?>
