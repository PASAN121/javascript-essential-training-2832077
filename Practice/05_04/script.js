/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at traversing the DOM using JavaScript.
 */

const header = document.querySelector(".siteheader");

// Mouse enters
header.addEventListener("mouseenter", () => {
  header.style.backgroundColor = "red";
});

// Mouse leaves
header.addEventListener("mouseleave", () => {
  header.style.backgroundColor = "";
});
var content = document.querySelectorAll("p");

content.forEach(function (p) {
  p.style.color = "blue";
});
