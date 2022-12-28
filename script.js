const container = document.getElementById("container");
const colors = [
  "#81a432",
  "#832051",
  "#68228b",
  "#801818",
  "#00563f",
  "#24273a",
  "#801818",
  "#00FFFF",
  "#7FFFD4",
  "#0000FF",
  "#8A2BE2",
  "#5F9EA0",
  "#7FFF00",
  "#D2691E",
  "#6495ED",
  "#DC143C",
  "#00FFFF",
  "#00008B",
  "#B8860B"
];
const squares = 500;

for (let i = 0; i < squares; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseout", () => removeColor(square));

  container.appendChild(square);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.background = color;
  element.style.boxShadow = `0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.background = "#1d1d1d";
  element.style.boxShadow = "0 0 2px #000";
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
