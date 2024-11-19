<?php
    // Arquivo de configuração de banco de dados
    $server="localhost";
    $user="root";
    $pass="root";
    $bd="mgks";
    $connect=mysqli_connect($server,$user,$pass,$bd);

    $username=$_POST["username"];
    $senha=$_POST["senha"];

    $sql="insert into users(username, senha) values('$username','$senha')";
    mysqli_query($connect,$sql);

    // Verificar se a conexão foi bem-sucedida
    if (!$connect) {
        die("Falha na conexão com o banco de dados: " . mysqli_connect_error());
    }
?>