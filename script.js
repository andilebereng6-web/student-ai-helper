function respond() {
  const input = document.getElementById("userInput").value;
  const response = document.getElementById("response");

  response.textContent = "You typed: " + input;
}
