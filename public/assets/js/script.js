const textarea = document.getElementById("dynamic-textarea");

textarea.addEventListener("input", function () {
  this.style.height = "auto"; // Reset the height
  this.style.height = `${this.scrollHeight}px`; // Set the height based on scrollHeight
});
