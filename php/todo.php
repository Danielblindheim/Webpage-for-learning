<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <title>To-Do List</title>

    <link rel="icon" href="./img/favicon.ico" type="image/x-icon">

    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
    <link rel="stylesheet" href="../css/todo.css">
    <link href="https://fonts.googleapis.com/css?family=Orbitron" rel="stylesheet">
</head>
<body>
<?php
    require "header.php";
?>


        <div class="container">
                <br><br><br>
                        

                <div class="row">
                    <div class="col-12">
                        <input id="userInput" class="inputBox" type="text" placeholder="New item..." maxlength="27">
                        <button id="enter"><i class="fas fa-pencil-alt"></i></button>
                    </div>
                </div>
        
                <!-- Empty List -->

                <div class="row">
                    <div class="listItems col-12">
                        <ul class="col-12 offset-0 col-sm-8 offset-sm-2" id="todo">
                        </ul>
                    </div>
                </div>
        
            </div>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
    <script src="../js/todo.js"></script>

</body>
</html>