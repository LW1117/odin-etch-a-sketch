const gridContainer = document.getElementById("grid-container");

createGrids = (numberOfrows) => {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < numberOfrows * numberOfrows; i++) {
    newGrid = document.createElement("div");
    newGrid.classList.add("grid");
    fragment.appendChild(newGrid);
  }
  gridContainer.replaceChildren(fragment);

  let size = 100 / numberOfrows;

  const grids = document.querySelectorAll(".grid");

  grids.forEach((grid) => {
    grid.style.width = `${size}vw`;
    grid.style.height = `${size}vh`;
    grid.addEventListener("mouseover", () => {
      grid.style.backgroundColor = "#7AB2D3";
    });
  });
};
createGrids(16);

const gridSizeInput = document.getElementById("grid-size-input");

gridSizeInput.addEventListener("keypress", (event) => {
  if (event.key == "Enter") {
    let sizeOfGrid = gridSizeInput.value;
    if (sizeOfGrid <= 100) {
      createGrids(sizeOfGrid);
    } else {
      alert("Maximum size of grid is 100x100");
    }
  }
});
