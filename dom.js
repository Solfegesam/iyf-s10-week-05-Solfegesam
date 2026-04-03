// Change heading text
document.getElementById("changeTextBtn")?.addEventListener("click", function() {
  document.getElementById("title").textContent = "Updated Title";
});

// Change paragraph style
document.getElementById("changeStyleBtn")?.addEventListener("click", function() {
  const p = document.getElementById("content");
  p.style.color = "blue";
  p.style.fontSize = "20px";
  p.setAttribute("class", "styled");
});

// Add list items dynamically
document.getElementById("addItemBtn")?.addEventListener("click", function() {
  const li = document.createElement("li");
  li.textContent = "New Item";
  document.getElementById("list").appendChild(li);
});
