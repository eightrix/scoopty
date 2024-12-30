const textarea = document.getElementById("message");

textarea.addEventListener("input", function () {
  // this.style.height = "auto"; // Reset the height
  this.style.maxHeight = "10rem"; // Reset the height
  this.style.height = `${this.scrollHeight}px`; // Set the height based on scrollHeight
});
