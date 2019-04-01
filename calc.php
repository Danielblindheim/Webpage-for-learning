<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <title>Calculator</title>

    <link rel="icon" href="./img/favicon.ico" type="image/x-icon">

    <link rel="stylesheet" href="../css/calc.css">
    <link href="https://fonts.googleapis.com/css?family=Orbitron" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
</head>
<body>

<?php
    require "header.php";
?>

            <!-- Calculator -->
            <center>
                <br>
    <section class="calculator">
        <form>
            <input type="text" name="" id="" class="screen">
        </form>

        <div class="buttons">
            <!-- yellow buttons -->
            <button type="button" class="btn btn-yellow" data-num="*">*</button>
            <button type="button" class="btn btn-yellow" data-num="/">/</button>
            <button type="button" class="btn btn-yellow" data-num="-">-</button>
            <button type="button" class="btn btn-yellow" data-num="+">+</button>
            <!-- grey buttons-->
            <button type="button" class="btn btn-grey" data-num=".">.</button>
            <button type="button" class="btn btn-grey" data-num="9">9</button>
            <button type="button" class="btn btn-grey" data-num="8">8</button>
            <button type="button" class="btn btn-grey" data-num="7">7</button>
            <button type="button" class="btn btn-grey" data-num="6">6</button>
            <button type="button" class="btn btn-grey" data-num="5">5</button>
            <button type="button" class="btn btn-grey" data-num="4">4</button>
            <button type="button" class="btn btn-grey" data-num="3">3</button>
            <button type="button" class="btn btn-grey" data-num="2">2</button>
            <button type="button" class="btn btn-grey" data-num="1">1</button>
            <button type="button" class="btn btn-grey" data-num="0">0</button>
            <button type="button" class="btn-equal btn-grey">=</button>
            <button type="button" class="btn-clear btn-grey">C</button>

        </div>
    </section>

    </center>

<?php
    require "footer.php";
?>
    <script src="../js/calc.js"></script>
</body>
</html>