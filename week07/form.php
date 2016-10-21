<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>forms</title>
</head>
<body>

    <?php
        echo 'GET: ';
        if (!empty($_GET)) {
            print_r($_GET);
        }

        echo 'POST: ';
        if (!empty($_POST)) {
            print_r($_POST);
        }


        echo 'PATCH: ';
        if (!empty($_PATCH)) {
            print_r($_PATCH);
        }
     ?>

    <form method="PATCH">
        <input name="name">
        <input type="submit">
    </form>

</body>
</html>
