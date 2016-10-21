<?php

if (!empty($_POST['board'])) {
    $json = json_encode($_POST['board']);

    file_put_contents('tictactoe.json', $json);
}

$json = file_get_contents('tictactoe.json');

echo $json;
