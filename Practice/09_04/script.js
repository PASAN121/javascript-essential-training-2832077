/**
 * Practice: Play with event listeners
 * - Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
 * - Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
 * - Add an event listener to each grid cell to change its background color when it is clicked.
 * - Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.
 */
const gridContainer = document.querySelector(".grid");

gridContainer.addEventListener("mouseenter", () => {
  gridContainer.style.outline = "6px solid red";
});

gridContainer.addEventListener("mouseleave", () => {
  gridContainer.style.outline = "";
});

const randColor = () => {
  let hexColor = Math.floor(Math.random() * 16777215).toString(16);
  return hexColor;
};

const grid = document.querySelectorAll(".cell");

grid.forEach((cell) => {
  cell.addEventListener("mouseenter", () => {
    cell.style.backgroundColor = `#${randColor()}`;
  });
});
grid.forEach((cell) => {
  cell.addEventListener("mouseleave", () => {
    cell.style.backgroundColor = "";
  });
});

grid.forEach((cell) => {
  cell.addEventListener("click", () => {
    cell.classList.toggle("cell-active");
  });
});
