<?php
  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Basic Validation (Expand this for security)
    if (empty($_POST["sender"]) || empty($_POST["recipient"]) || empty($_POST["message"])) {
      echo "Error! All fields are required."; exit; //handle errors gracefully with ajax later
    }  
      echo "success"; //we can process the successful submition via javascript later      
  }
?>