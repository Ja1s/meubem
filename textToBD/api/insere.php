<?php
session_start();
include "conexao.php";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    if (!isset($_POST["data"]) || !isset($_POST["texto"])) {
        die("Erro: Dados não enviados.");
    }

    $data = trim($_POST["data"]);
    $texto = trim($_POST["texto"]);

    if (empty($data) || empty($texto)) {
        die("Erro: Todos os campos devem ser preenchidos.");
    }

    $pdo = conexao();

    try {
        $sql = "INSERT INTO textarea (dataa, texto) VALUES (:data, :texto)";
        $consulta = $pdo->prepare($sql);
        $consulta->execute([
            ':data' => $data,
            ':texto' => $texto
        ]);

        header("Location: /textToBD/index.html");
        exit();
    } catch (PDOException $e) {
        echo "Erro ao enviar mensagem: " . $e->getMessage();
    }
}
?>
