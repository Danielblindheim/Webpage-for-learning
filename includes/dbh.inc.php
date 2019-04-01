<?php

$servername = "localhost";
$dBUsername = "root";
$dBPassword = "root"; #Dobbeltsjekk ditta
$dBName = "loginsystem"; #Dobbeltsjekk ditta

$conn = mysqli_connect($servername, $dBUsername, $dBPassword, $dBName);

if (!$conn) {
    die("Connection failed: ".mysqli_connect_error());
}