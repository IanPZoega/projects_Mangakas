<?php
$username = $_POST["username"];
$senha = md5($_POST["senha"]);

// Verifica se o campo login está vazio
if (empty($username) || empty($senha)) {
    echo "<script type='text/javascript'>
            alert('Os campos devem ser preenchidos');
            window.location.href='cadastro.html';
          </script>";
    exit();
}

// Preparar a consulta para verificar se o login já existe
$query_select = "SELECT username FROM users WHERE username = ?";
$stmt = $connect->prepare($query_select);
$stmt->bind_param("s", $username);  // "s" indica que é uma string
$stmt->execute();
$stmt->store_result();

if ($stmt->num_rows > 0) {
    // Login já existe
    echo "<script type='text/javascript'>
            alert('Esse login já existe');
            window.location.href='cadastro.html';
          </script>";
    $stmt->close();
    exit();
}

// Caso o login não exista, insere o novo usuário
$query_insert = "INSERT INTO users (username, senha) VALUES (?, ?)";
$stmt = $connect->prepare($query_insert);
$stmt->bind_param("ss", $username, $senha);  // "ss" indica que são duas strings
$stmt->execute();

if ($stmt->affected_rows > 0) {
    // Cadastro bem-sucedido
    echo "<script type='text/javascript'>
            alert('Usuário cadastrado com sucesso!');
            window.location.href='login.html';
          </script>";
} else {
    // Falha ao cadastrar
    echo "<script type='text/javascript'>
            alert('Não foi possível cadastrar esse usuário');
            window.location.href='cadastro.html';
          </script>";
}

$stmt->close();
$connect->close();