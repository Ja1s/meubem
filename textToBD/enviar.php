<?php 

    include "conexao.php";
    $pdo = conexao();

    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        $data = $_POST['data'];  
        $hora = $_POST['hora'];  
        $texto = $_POST['texto'];

        $sql = "INSERT INTO textarea (dataa, hora, texto) VALUES (:data, :hora, :texto)";
        $stmt = $pdo->prepare($sql);
        $stmt->bindParam(':data', $data);
        $stmt->bindParam(':hora', $hora);
        $stmt->bindParam(':texto', $texto);
        $stmt->execute();
    }

    $sql = "SELECT * FROM textarea ORDER BY id DESC";
    $consulta = $pdo->query($sql);
    while ($row = $consulta->fetch(PDO::FETCH_ASSOC)) {
        echo "<hr>";
        echo "<div class='messages'>";
        echo "<div class='message-box'>";
        echo "<p><strong>Data:</strong> " . $row['dataa'] . "</p>";
        echo "<p><strong>Mensagem:</strong> " . nl2br(htmlspecialchars($row['texto'])) . "</p>";
        echo "</div>";
        echo "</div>";
        echo "<hr>";
    }

?>
