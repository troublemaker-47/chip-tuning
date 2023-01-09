function sendForm() {
  // Get the form data
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var year = document.getElementById("year").value;

  // Make an HTTP POST request to the server-side script
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "http://example.com/send-email.php", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.send("name=" + name + "&email=" + email + "&year=" + year);
}