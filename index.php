<?php
if (isset($_GET['submit'])) {
    echo ($_GET['username']);
}

?>
<!-- 

CRUD with php 

    1 REGISTER FORM
        NAME
        USERNAME
        EMAIL
        PHONE NUMBER
        DATE            
        


    2 LOG IN 
        ALLOW USER TO DELETE OWN ACCOUNT ONLY

    3 MAINTAINE SESSION FOR 15 MIN

    4 SEARCH FOR SPECIFIC USER VIA 
        NAME
        EMAIL
        PHONE NUMBER
        DATE


-->


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="stylesheet.css">
    <title>Document</title>
</head>

<body>
    <div class="container">


        <div class="showcase">
            <p>Logo</p>
            <div>
                <h3>
                    Welcome Page
                </h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae maiores quaerat in.</p>
            </div>
        </div>

        <div class="loginForm">
            <form action="main.php" method="GET">
                <div>
                    <label>Username</label>
                    <input type="text" name="username">
                </div>

                <div>
                    <label>Email</label>
                    <input type="email" name="email">
                </div>

                <div>
                    <label>Password</label>
                    <input type="password" name="password">
                </div>

                <div>
                    <label>Confirm Password</label>
                    <input type="password" name="Con_password">
                </div>

                <div>
                    <label>Date of Birth</label>
                    <input type="date" name="dob">
                </div>


                <div>
                    <input type="button" id="button" name="submit" value="submit">
                </div>

            </form>
        </div>
    </div>
    </div>

</body>

</html>