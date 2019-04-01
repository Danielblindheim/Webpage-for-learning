<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <title>Counter</title>

    <link rel="icon" href="./img/favicon.ico" type="image/x-icon">

    <link rel="stylesheet" href="../css/counter.css">
    <link href="https://fonts.googleapis.com/css?family=Orbitron" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
</head>
<body>
       
    <?php
        require "header.php";
    ?>

    <div class="counter-box">
        <h1 class="counter">0</h1>
        <div id="btns">
            <button type="button" class="btn" id="lowerCountBtn">Lower Count</button>
            <button type="button" class="btn" id="resetCountBtn">Reset</button>
            <button type="button" class="btn" id="addCountBtn">&nbsp;Add &nbsp;&nbsp;Count&nbsp;</button>
        </div>
    </div>

    <script src="../js/counter.js"></script>
</body>

</html>