function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxes = document.getElementById("boxes");
  const fragment = document.createDocumentFragment();
  boxes.innerHTML = "";

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(box);
  }

  boxes.appendChild(fragment);
}

function destroyBoxes() {
  document.getElementById("boxes").innerHTML = "";
}

document.querySelector("[data-create]").addEventListener("click", function () {
  const amount = parseInt(document.querySelector("#controls input").value);

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    document.querySelector("#controls input").value = "";
  }
});

document.querySelector("[data-destroy]").addEventListener("click", function () {
  destroyBoxes();
});
