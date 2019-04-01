<?php
    session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <title>Login</title>

    <link rel="icon" href="./img/favicon.ico" type="image/x-icon">

    <link href="https://fonts.googleapis.com/css?family=Orbitron" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
</head>
<body>
<?php
    require "header.php";
?>


            <div class="loginbox">
            <?php
            if (isset($_SESSION["userId"])) {
                echo '<form action="includes/logout.inc.php" method="post">
                <input type="submit" name="logout-submit" value="LOGOUT">
            </form>';
            } else {
                echo '<h1>Login</h1><form action="includes/login.inc.php" method="post">
                <p>Username</p>
                <input type="text" name="mailuid" placeholder="Username/E-mail...">
                <p>Password</p>
                <input type="password" name="pwd" placeholder="Password...">
                <input type="submit" name="login-submit" value="LOGIN"><br>
            </form>
            <a href="signup.php">Don\'t have an account? Sign up</a>';
            }
        ?>
        </div>

        <?php
            require "footer.php";
        ?>

    <script src="../js/menu.js"></script>
</body>
</html>