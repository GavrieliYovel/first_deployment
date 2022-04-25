<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
        $mis = $_GET["mission"];
        $dis = $_GET["distance"];
        $alt = $_GET["altitude"];
        $tm = $_GET["time"];

            echo "<br><h1>New Misson Settings,</h1><br> <h2>New Mission: " . $mis . "</h2><br>";
            echo "<h2>New Max Distance: " . $dis . "m </h2><br>";
            echo "<h2>New Altitude: " . $alt . "m </h2><br>";
            echo "<h2>New Time: " . $tm . "mins </h2><br>";
     ?>
</body>
</html>