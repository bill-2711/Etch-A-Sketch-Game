const container = document.createElement("div");
container.classList.add("main-container");

document.body.appendChild(container);

for (let i = 0; i <= 8040; i++) {
  const box = document.createElement("div");
  box.classList.add("per-box");
  container.appendChild(box);
  box.addEventListener("mouseover", () => {
    box.style.backgroundColor = "white";
  });
}
