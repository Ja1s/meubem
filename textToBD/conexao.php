<?php
function conexao() {
    $host = "localhost";
    $usuario = "root";
    $senha = "";
    $banco = "textarea";
    $porta = 3306;

    try {
        $pdo = new PDO("mysql:host=$host;port=$porta;dbname=$banco", $usuario, $senha, [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
        ]);
        return $pdo;
    } catch (PDOException $e) {
        die("Erro na conexão: " . $e->getMessage());
    }
}
?>
