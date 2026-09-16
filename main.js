const container = document.createElement("div");
container.classList.add("main-container");

document.body.appendChild(container);

// create grid boxes
for (let i = 0; i <= 8040; i++) {
  const box = document.createElement("div");
  box.classList.add("per-box");
  container.appendChild(box);

  // change grid color
  box.addEventListener("mouseover", () => {
    box.style.backgroundColor = "white";
  });
}

// Create modal window
const showModal = document.querySelector(".show_modal");
const modal = document.querySelector(".modal");
const userInput = document.querySelector(".user_value");

// Show modal window
showModal.addEventListener("click", () => {
  userInput.classList.remove("hidden");
  modal.classList.remove("hidden");
});

// Close modal window
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    userInput.classList.add("hidden");
    modal.classList.add("hidden");
  }
});
