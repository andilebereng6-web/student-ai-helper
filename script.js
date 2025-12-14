function respond() {
  const input = document.getElementById("userInput").value.toLowerCase();
  const response = document.getElementById("response");

  if (input.length < 10) {
    response.textContent =
      "I need a bit more detail. Tell me the subject and what exactly is confusing you.";
    return;
  }

  // Physics
  if (input.includes("physics") || input.includes("acceleration") || input.includes("velocity")) {
    response.textContent =
      "Physics detected! Let's break it down step by step. What part of this problem do you already understand? For example, do you know the formula or just the numbers?";
    return;
  }

  // Math
  if (input.includes("math") || input.includes("algebra") || input.includes("equation")) {
    response.textContent =
      "Math detected! Tell me what you already know. Do you understand the formula, or are you stuck on how to start?";
    return;
  }

  // Life / real-world problems
  if (input.includes("stress") || input.includes("time") || input.includes("study")) {
    response.textContent =
      "Life skills detected! Let's think together. What have you tried so far, and what part is confusing?";
    return;
  }

  // Default fallback
  response.textContent =
    "Good. Let's take it step by step. What part of this do you understand, even a little?";
}
