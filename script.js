const gridContainer = document.getElementById("grid-container");

const fragment = document.createDocumentFragment();

let grid;
const numberOfGrids = 16 * 16;

for (let i = 0; i < numberOfGrids; i++) {
  grid = document.createElement("div");
  grid.classList.add("square");
  fragment.appendChild(grid);
}

gridContainer.appendChild(fragment);
