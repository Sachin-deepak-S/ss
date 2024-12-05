// JavaScript file (script.js)

// User profile object to store user data
let userProfile = {};

// Login/Register Toggle
document.getElementById("registerSwitch").addEventListener("click", () => {
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("registerForm").style.display = "block";
});

// Handle Register
document.getElementById("registerForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("registerEmail").value;
  const password = document.getElementById("registerPassword").value;

  // Store user information (add database or backend calls here if needed)
  userProfile.email = email;
  userProfile.password = password;

  // Show profile setup section
  document.getElementById("registerForm").style.display = "none";
  document.getElementById("profile-setup").style.display = "block";
});

// Handle Login
document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  // Validate login credentials
  if (email === userProfile.email && password === userProfile.password) {
    document.getElementById("login-page").style.display = "none";
    document.getElementById("main-features").style.display = "block";
  } else {
    alert("Invalid email or password. Please try again.");
  }
});

// Handle Profile Setup
document.getElementById("profileForm").addEventListener("submit", (e) => {
  e.preventDefault();
  userProfile.age = document.getElementById("age").value;
  userProfile.gender = document.getElementById("gender").value;
  userProfile.height = document.getElementById("height").value;
  userProfile.weight = document.getElementById("weight").value;

  // Show main features section
  document.getElementById("profile-setup").style.display = "none";
  document.getElementById("main-features").style.display = "block";
});

// Main Feature Navigation Functions
function showWorkoutCustomization() {
  toggleSections("workout-customization");
}

function showMealPlanning() {
  toggleSections("meal-planning");
}

function showVirtualCoaching() {
  toggleSections("virtual-coaching");
}

function showChallenges() {
  alert("Challenges feature coming soon!");
}

function showAnalytics() {
  alert("Analytics feature coming soon!");
}

function showMeditation() {
  alert("Meditation feature coming soon!");
}

function showMarketplace() {
  alert("Marketplace feature coming soon!");
}

// Toggle sections
function toggleSections(sectionId) {
  const sections = ["main-features", "workout-customization", "meal-planning", "virtual-coaching"];
  sections.forEach((id) => {
    document.getElementById(id).style.display = id === sectionId ? "block" : "none";
  });
}

// Back to Main Features
function backToMain() {
  toggleSections("main-features");
}

// Meal Plan Generation
function generateMealPlan() {
  const goal = document.getElementById("mealGoal").value;
  const restrictions = document.getElementById("dietaryRestrictions").value;

  const plan = `Your meal plan for ${goal} with ${restrictions} diet: Include a balanced combination of proteins, carbs, and healthy fats.`;
  document.getElementById("mealPlan").textContent = plan;
}

// Workout Plan Generation
function generateWorkoutPlan() {
  const goal = document.getElementById("workoutGoal").value;
  const level = document.getElementById("workoutLevel").value;
  const equipment = document.getElementById("workoutEquipment").value;

  const plan = `Your workout plan for ${goal} at ${level} level with ${equipment} equipment: Focus on full-body exercises with progressive intensity.`;
  document.getElementById("workoutPlan").textContent = plan;
}

// Virtual Coaching Plan Generation
function generatePlan() {
  const goal = document.getElementById("fitnessGoal").value;
  const level = document.getElementById("fitnessLevel").value;
  const equipment = document.getElementById("equipment").value;

  const plan = `Your personalized fitness plan for ${goal} at ${level} level with ${equipment} equipment: Follow a structured plan with personalized coaching.`;
  document.getElementById("workoutPlan").textContent = plan;
}

// Complete Workout
function completeWorkout() {
  const feedback = "Good job! You've completed your workout for the day!";
  document.getElementById("feedback").textContent = feedback;
}
