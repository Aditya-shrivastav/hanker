<?php
// Allow CORS (optional, remove if not needed)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// Get JSON post data
$data = json_decode(file_get_contents('php://input'), true);

if (!$data) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid or missing JSON']);
    exit;
}

// Extract and sanitize data
$fullName = htmlspecialchars(trim($data['fullName'] ?? 'Unknown User'));
$email    = filter_var(trim($data['email'] ?? ''), FILTER_SANITIZE_EMAIL);
$country  = htmlspecialchars(trim($data['country'] ?? ''));
$company  = htmlspecialchars(trim($data['company'] ?? ''));
$message  = htmlspecialchars(trim($data['message'] ?? ''));

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid email address']);
    exit;
}

// Email to Source Node Technologies
$to = "connect@sourcenode.in";
$subject = "New Contact Form Submission from $fullName";

$body = "
Name: $fullName
Email: $email
Country: $country
Company: $company
Message: $message
";

// Better headers
$headers = "From: Source Node Technologies <$to>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

$sourceNodeEmailSent = mail($to, $subject, $body, $headers);

// Confirmation email to customer
$customerSubject = "Thank you for contacting Source Node Technologies";

$customerBody = "
Dear $fullName,

Thank you for reaching out to us. We have received your message and will get back to you shortly.

Best regards,
Source Node Technologies
";

$customerHeaders = "From: $email\r\n";
$customerHeaders .= "Reply-To: $to\r\n";
$customerHeaders .= "MIME-Version: 1.0\r\n";
$customerHeaders .= "Content-Type: text/plain; charset=UTF-8\r\n";

$customerEmailSent = mail($email, $customerSubject, $customerBody, $customerHeaders);

// Final response
if ($sourceNodeEmailSent && $customerEmailSent) {
    echo json_encode(['success' => true, 'message' => 'Emails sent successfully']);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to send emails. Check mail server configuration.']);
}
?>
