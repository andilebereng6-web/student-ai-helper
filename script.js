// Store conversation step
let step = 0;

// Store user data
let userData = {};

function respond() {
  const input = document.getElementById("userInput").value.trim().toLowerCase();
  const response = document.getElementById("response");

  if (input.length < 5) {
    response.textContent = "Please type a bit more detail so I can help you think.";
    return;
  }

  // Step-by-step physics conversation
  if (input.includes("physics") || input.includes("acceleration") || input.includes("velocity")) {
    if (step === 0) {
      response.textContent =
        "Physics detected! Let's break it down. What part of this problem do you already understand? For example, do you know the formula or just the numbers?";
      step = 1;
      return;
    }

    if (step === 1) {
      userData.knownPart = input;
      response.textContent =
        "Great! Now identify your initial velocity (v₀), final velocity (v), and time (t). What are those values?";
      step = 2;
      return;
    }

    if (step === 2) {
      // Try to extract numbers from input
      const numbers = input.match(/\d+/g);
      if (numbers && numbers.length >= 3) {
        userData.v0 = parseFloat(numbers[0]);
        userData.v = parseFloat(numbers[1]);
        userData.t = parseFloat(numbers[2]);
        response.textContent =
          `Perfect! Initial velocity = ${userData.v0}, final velocity = ${userData.v}, time = ${userData.t}. Now calculate Δv = v - v₀. What is Δv?`;
        step = 3;
      } else {
        response.textContent =
          "I need all three numbers: initial velocity, final velocity, and time. Can you type them?";
      }
      return;
    }

    if (step === 3) {
      const deltaV = input.match(/\d+/g);
      if (deltaV && deltaV.length > 0) {
        userData.deltaV = parseFloat(deltaV[0]);
        response.textContent =
          `Good! Δv = ${userData.deltaV}. Now divide Δv by time t = ${userData.t} seconds. What do you get for acceleration?`;
        step = 4;
      } else {
        response.textContent = "Please type the Δv value you calculated.";
      }
      return;
    }

    if (step === 4) {
      const acc = parseFloat(input.match(/\d+\.?\d*/));
      if (!isNaN(acc)) {
        response.textContent =
          `Excellent! Your calculated acceleration is ${acc} m/s². You've completed the problem step by step!`;
        step = 0; // Reset for a new question
        userData = {}; // Clear stored data
      } else {
        response.textContent = "Please type the numeric value of acceleration you calculated.";
      }
      return;
    }
  }

  // Fallback for other subjects or life problems
  response.textContent =
    "Good. Let's take it step by step. What part of this do you understand, even a little?";
}
