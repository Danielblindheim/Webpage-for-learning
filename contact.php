<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <title>Contact</title>

    <link rel="icon" href="./img/favicon.ico" type="image/x-icon">

    <link rel="stylesheet" href="../css/contact.css">
    <link href="https://fonts.googleapis.com/css?family=Orbitron" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
</head>
<body>
<?php
    require "header.php";
?>

<div id="contactBody">
    <div class="contact-title">
        <h1>Let's get in touch</h1>
    </div>

    <div class="contact-form">
        <form id="contact-form" method="post" action="./includes/sendemail.inc.php">
            <input name="name" type="text" class="form-control" placeholder="Your name" required>
            <br>
            <input name="email" type="email" class="form-control" placeholder="Your email" required>
            <br>

            <textarea id="messageId" name="message" class="form-control" placeholder="Message" row="4" required></textarea>
            <br>

            <input type="submit" class="form-control submit" id="submitted" value="SEND MESSAGE">

        </form>
    </div>
</div>

<?php
    require "footer.php";
?>

    <script src="../js/menu.js"></script>
</body>
</html>