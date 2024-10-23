const gridContainer = document.getElementById("grid-container");

createGrids = (numberOfrows) => {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < numberOfrows * numberOfrows; i++) {
    newGrid = document.createElement("div");
    newGrid.classList.add("grid");
    fragment.appendChild(newGrid);
  }
  gridContainer.appendChild(fragment);

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
