<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Далее вы можете выполнить необходимую обработку данных,
    // такую как отправка электронной почты или сохранение в базе данных.

    // Пример отправки электронной почты (требуется настройка сервера для работы с mail()):
    $to = "your@example.com";
    $subject = "New Contact Form Submission";
    $headers = "From: $email";

    mail($to, $subject, $message, $headers);

    // Дополнительно можно добавить перенаправление пользователя на другую страницу.
    header("Location: thank_you_page.html");
    exit();
}
?>
