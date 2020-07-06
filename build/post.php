<?php
 
$do = 'arko00@wp.pl'; 
$email = $_POST['email']; 
$wiadomosc = $_POST['message']; 
$temat = $_POST['name']; 
$header = "From: $email \nContent-Type:".
            ' text/plain;charset="UTF-8"'.
            "\nContent-Transfer-Encoding: 8bit";
    if (mail($do, $temat, $wiadomosc, $header))
        {
        echo ('E-mail został wyslany!'); 
        }
    else
    {
        echo ('Blad podczas wysylania e-maila!');
        }
 
?>

