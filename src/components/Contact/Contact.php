<?php
    // Allow CORS
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

    // Fetch form data
    $name = $_POST['name'] ?? '';
    $email = $_POST['email'] ?? '';
    $mobilenumber = $_POST['mobilenumber'] ?? '';
    $enquiry = $_POST['enquiry'] ?? '';

    // Database connection
    $conn = new mysqli('localhost', 'u768539030_Dsais', 'Dsais@123', 'u768539030_rockdrill');
    if ($conn->connect_error) {
        die("Connection Failed : " . $conn->connect_error);
    }

    // Check if details already exist in the database
    $checkQuery = $conn->prepare("SELECT * FROM contact WHERE email = ? OR mobilenumber = ?");
    $checkQuery->bind_param("ss", $email, $mobilenumber); // Both should be strings (use "ss")
    $checkQuery->execute();
    $result = $checkQuery->get_result();

    if ($result->num_rows > 0) {
        // Details already exist
        echo json_encode(["message" => "Details are already stored."]);
        
    } else {
        // Prepare SQL statement to insert data into 'contact' table
        $stmt = $conn->prepare("INSERT INTO contact(name, email, mobilenumber, enquiry) VALUES (?, ?, ?, ?)");

        // Check if prepare() succeeded
        if ($stmt === false) {
            die('Prepare failed: ' . htmlspecialchars($conn->error));
        }

        // Bind parameters and execute
        $stmt->bind_param("ssss", $name, $email, $mobilenumber, $enquiry); // All should be strings (use "ssss")
        $execval = $stmt->execute();

        // Check execution result
        if ($execval === false) {
            die('Execute failed: ' . htmlspecialchars($stmt->error));
        }

        // Close statement and connection
        $stmt->close();
        $conn->close();

        // Proceed with sending email if database insertion was successful
        if ($execval) {
            // Call Python script to send email with arguments
            $command = "python send_email.py \"$name\" \"$email\" \"$mobilenumber\" \"$enquiry\"";
            $output = shell_exec($command); 
            // Assuming send_email.py handles sending and returns relevant output
            
            // Provide feedback to the user
            echo json_encode(["message" => "Registered successfully."]);

        } else {
            // Registration failed
            echo json_encode(["message" => "Error: Failed to register."]);

        }
    }

    // Close check query statement
    $checkQuery->close();
?>
