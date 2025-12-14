function respond() {
  const input = document.getElementById("userInput").value;
  const response = document.getElementById("response");

  if (input.length < 10) {
    response.textContent =
      "I need a bit more detail. What subject is this, and what part feels confusing?";
  } else {
    response.textContent =
      "Good. Now tell me: what part of this do you understand, even a little?";
  }
}
