function generatePassword() {
    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbers = "0123456789";
    var symbols = "!@#$%^&*()_+-=[]{}\\|;':\",./<>?";
    var password = "";
    var selectedCharTypes = [];
    var length = 0;
  
    // Prompt user for password length
    while (length < 8 || length > 128) {
      length = prompt("Enter password length (8-128):");
      if (length === null) { // User clicked cancel
        return;
      }
      length = parseInt(length);
    }
  
    // Prompt user for character types
    while (selectedCharTypes.length === 0) {
      var includeLowercase = confirm("Include lowercase letters?");
      var includeUppercase = confirm("Include uppercase letters?");
      var includeNumbers = confirm("Include numbers?");
      var includeSymbols = confirm("Include symbols?");
  
      if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSymbols) {
        alert("At least one character type must be selected.");
      } else {
        if (includeLowercase) {
          selectedCharTypes.push(lowercase);
        }
        if (includeUppercase) {
          selectedCharTypes.push(uppercase);
        }
        if (includeNumbers) {
          selectedCharTypes.push(numbers);
        }
        if (includeSymbols) {
          selectedCharTypes.push(symbols);
        }
      }
    }
  
    // Generate password
    for (var i = 0; i < length; i++) {
      var randomCharTypeIndex = Math.floor(Math.random() * selectedCharTypes.length);
      var charset = selectedCharTypes[randomCharTypeIndex];
      var randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
  
    alert("Your new password is: " + password);
  }
  