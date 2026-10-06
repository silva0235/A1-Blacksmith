// Assignment 1: Blacksmith — The Tiny Forge

// PLAN: Write a short pseudocode plan for making a sword here.
// Pseudocode:
// Check if the forge has at least 30 heat.
// If it does, remove 30 heat and add one sword.
// If it does not, keep the current values and show a message.
// Update the forge display after either result.

// 1. Select the forge, heat, sword count, status, image, and message elements.
//    Find their IDs in index.html.

const forge = document.querySelector("#forge");
const heatValue = document.querySelector("#heat-value");
const swordCount = document.querySelector("#sword-count");
const forgeStatus = document.querySelector("#forge-status");
const forgeImage = document.querySelector("#forge-image");
const actionMessage = document.querySelector("#action-message");

// 2. Create the two state variables: heat and swords made.
let forgeHeat = 20;
let swordsMade = 0;

// 3. Write getForgeStatus(heatValue). Return the correct status string.
function getForgeStatus(heatValue) {
  if (heatValue < 30) {
    return "Too cold";
  } else if (heatValue < 70) {
    return "Ready to forge";
  } else {
    return "Roaring fire";
  }
}

// 4. Write updateForge(). Update text and apply one status class.
//    Change the supplied forge image src and alt to match the heat.
//    Keep the most recent action message visible.
function updateForge() {
  // Update the heat and sword count
  heatValue.textContent = forgeHeat;
  swordCount.textContent = swordsMade;

  // Get the current forge status
  const status = getForgeStatus(forgeHeat);
  forgeStatus.textContent = status;

  // Remove the old status classes
  forge.classList.remove("is-cold", "is-ready", "is-roaring");

  // Apply the correct class and image
  if (status === "Too cold") {
    forge.classList.add("is-cold");
    forgeImage.src = "assets/forge-cold.svg";
    forgeImage.alt = "A stone forge with dark coals and no flames";
  } else if (status === "Ready to forge") {
    forge.classList.add("is-ready");
    forgeImage.src = "assets/forge-ready.svg";
    forgeImage.alt = "A stone forge with a small orange fire";
  } else {
    forge.classList.add("is-roaring");
    forgeImage.src = "assets/forge-roaring.svg";
    forgeImage.alt = "A stone forge with tall bright flames and sparks";
  }
}

// 5. Write resetForge(). Restore the state, message, and display.
function resetForge() {
  forgeHeat = 20;
  swordsMade = 0;

  actionMessage.textContent = "Welcome to the forge. Add heat to begin.";

  updateForge();
}

// 6. Write heatForge(amount). Add heat, cap it, and update the page.
function heatForge(amount) {
  forgeHeat += amount;

  if (forgeHeat > 100) {
    forgeHeat = 100;
  }

  actionMessage.textContent = `The forge was heated by ${amount}.`;

  updateForge();
}

// 7. Write makeSword(). Handle both success and insufficient heat.
function makeSword() {
  if (forgeHeat >= 30) {
    forgeHeat -= 30;
    swordsMade += 1;

    actionMessage.textContent = "You made a sword!";
  } else {
    actionMessage.textContent = "The forge is too cold. You need more heat to make a sword.";
  }

  updateForge();
}

// 8. Call resetForge() once to start the game.
resetForge();

// Use the tests in ASSIGNMENT.md to check your work.
