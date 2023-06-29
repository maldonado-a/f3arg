<?php 
	$nombre = $_POST['name'];
	$email = $_POST['email'];
	$asunto = 'Formulario Web - FundacionEcoreciclaje.org.ar';
	$mensaje = "Nombre: ".$nombre."<br> Email: $email<br> Mensaje:".$_POST['message'];

    $cabeceras = 'From: maldonado.m1894@gmail.com' . "\r\n" .
    'Reply-To: maldonado.m1894@gmail.com' . "\r\n" .
    "Content-type: text/html; charset=UTF-8" . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

    if( mail('tapia.alan.g@gmail.com', $asunto, $mensaje, $cabeceras) ) {
        echo json_encode(array(
           'success'=> true,
           'message' => 'Message sent successfully'
        ));
     }else {
        echo json_encode(array(
           'error'=> true,
           'message' => 'Error sending message'
        ));
     }
 ?>