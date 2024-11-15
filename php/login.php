<?php
$login = $_POST["login"];
$entrar = $_POST["entrar"];
$senha = md5($_POST["senha"]);

if (isset($entrar)) {
    // Usar prepared statement para evitar injeção de SQL
    $query = "SELECT * FROM users WHERE username = ? AND senha = ?";
    $stmt = $connect->prepare($query);
    $stmt->bind_param("ss", $username, $senha); // "ss" indica que ambos são strings
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows <= 0) {
        // Caso o login e senha estejam incorretos
        echo "<script language='javascript' type='text/javascript'>
                alert('Login e/ou senha incorretos');
                window.location.href='login.html';
              </script>";
        die();
    } else {
        // Caso o login e senha estejam corretos, cria o cookie
        setcookie("login", $login, time() + 3600, "/"); // O cookie expira em 1 hora
        header("Location: index.php");
        exit();
    }
}
