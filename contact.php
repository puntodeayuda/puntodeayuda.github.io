<?php 
if(isset($_POST['submit'])){
    $to = "nancyrojas.ing@gmail.com"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];
    $subject = "Correo nuevo";
    $subject2 = "Copia de tu mensaje";
    $message = $first_name . " " . $last_name . " te dijo:" . "\n\n" . $_POST['message'];
    $message2 = "Escribiste lo siguiente " . $first_name . "\n\n" . $_POST['message'];

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to,$subject,$message,$headers);
    mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
    echo " Mensaje enviado. Gracias " . $first_name . ", te escribo en breve. <a href=index.html> volver a la pagina principal </a>";
}	
    
?>
