<?php
    session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <title></title>

    <link rel="icon" href="./img/favicon.ico" type="image/x-icon">

    <link rel="stylesheet" href="../css/style.css">
    <link href="https://fonts.googleapis.com/css?family=Orbitron" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
</head>
<body>
    <header>
        <nav class="navbar">
                <div class="navbar__header">
                        <a href="./index.php" id="logoo"><h1 id="myLogo">Daniel Blindheim</h1></a>

                <!-- Social Media -->
                    <a href="https://twitter.com/DBlindheim" target="_blank">
                <i class="fab fa-twitter socialM"><br>Twitter</i>
                    </a>
                    <a href="https://www.linkedin.com/in/daniel-blindheim-809045163/" target="_blank">
                <i class="fab fa-linkedin-in socialM"><br>LinkedIn</i>
                </a>
                <!-- Social Media -->

                <!-- Login -->
                <?php
            if (isset($_SESSION["userId"])) {
                echo '<a href="./login.php" class="loginLink">
                <button type="button" class="login" id="login">Logout</button>
            </a>';
            } else {
                echo '<a href="./login.php" class="loginLink">
                <button type="button" class="login" id="login">Login</button>
            </a>';
            }
        ?>
                <!-- Login -->

                <!-- Contact -->
                <a href="./contact.php" class="loginLink">
                    <button type="button" class="login">Contact</button>
                </a>
                <!-- Contact -->

                    <div class="navbar__btn">
                        <div class="bar bar1"></div>
                        <div class="bar bar2"></div>
                        <div class="bar bar3"></div>
                    </div>
                </div>
                <ul class="navbar__links">
                    <!-- single link -->
                    <li>
                        <a href="./index.php" class="navbar__single-link">
                        <i class="fas fa-home"></i>home
                    </a>
                </li>
                <!-- single link -->
                <li>
                        <a href="./calc.php" class="navbar__single-link">
                        <i class="fas fa-calculator"></i>calculator
                    </a>
                </li>
                <!-- single link -->
                <li>
                        <a href="./counter.php" class="navbar__single-link">
                        <i class="fas fa-sort-numeric-up"></i>counter
                    </a>
                </li>
                   <!-- single link -->
                   <li>
                        <a href="./todo.php" class="navbar__single-link">
                        <i class="fas fa-list-ol"></i>to-do list
                        </a>
                    </li>
                </ul>
            </nav>
    </header>