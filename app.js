// Click event
document.getElementById("clickBtn")?.addEventListener("click", () => {
  alert("Button clicked!");
});

// Input event
document.getElementById("inputBox")?.addEventListener("input", function() {
  document.getElementById("output").textContent = this.value;
});

// Form submit event
document.getElementById("form")?.addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Form submitted: " + this.querySelector("input").value);
});

// Keyboard event (global)
document.addEventListener("keydown", function(e) {
  console.log("Key pressed:", e.key);
});
