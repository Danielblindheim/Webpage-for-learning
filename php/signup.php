<?php
    require "header.php";
?>

    <main>
      <div class="loginbox">
          <h1>Sign up</h1>
          <?php
            if (isset($_GET["error"])) {
                if ($GET_["error"] == "emptyfields") {
                    echo '<p class="signuperror">Fill in all fields.</p>';
                } else if ($GET_["error"] == "invaliduidmail") {
                    echo '<p class="signuperror">Invalid username and e-mail.</p>';
                } else if ($GET_["error"] == "invaliduid") {
                    echo '<p class="signuperror">Invalid username.</p>';
                } else if ($GET_["error"] == "invalidmail") {
                    echo '<p class="signuperror">Invalid e-mail.</p>';
                } else if ($GET_["error"] == "passwordcheck") {
                    echo '<p class="signuperror">Your passwords do not match.</p>';
                } else if ($GET_["error"] == "usertaken") {
                    echo '<p class="signuperror">Username is already taken.</p>';
                }
            } else if ($_GET["signup"] == "success") {
                echo '<center><p style="color:#7FC97F">Signup successful.</p><br></center>';
            }
          ?>
          
        <form action="includes/signup.inc.php" method="post">
        <p>Username</p>
        <input type="text" name="uid" placeholder="Enter your username">
        <p>E-mail</p>
        <input type="text" name="mail" placeholder="Enter your e-mail">
        <p>Password</p>
        <input type="password" name="pwd" placeholder="Enter your password">
        <input type="password" name="pwd-repeat" placeholder="Repeat your password">
        <input type="submit" name="signup-submit" value="Sign up">
        <a href="login.php">Already have an account? Log in</a>
        
      </div>
    </main>

<?php
    require "footer.php";
?>