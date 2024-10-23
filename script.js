const gridContainer = document.getElementById("grid-container");

createGrids = (numberOfrows) => {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < numberOfrows * numberOfrows; i++) {
    newGrid = document.createElement("div");
    newGrid.classList.add("grid");
    fragment.appendChild(newGrid);
  }
  gridContainer.appendChild(fragment);
};

createGrids(16);
