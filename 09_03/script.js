/**
 * Event listeners
 */
import backpackObjectArray from "./components/data.js";

const backpackList = backpackObjectArray.map((backpack) => {
  // Create article
  let backpackArticle = document.createElement("article");
  backpackArticle.classList.add("backpack");
  backpackArticle.setAttribute("id", backpack.id);

  // Add HTML content
  backpackArticle.innerHTML = `
    <figure class="backpack__image">
      <img src="${backpack.image}" alt="${backpack.name}" loading="lazy" />
    </figure>
    <h1 class="backpack__name">${backpack.name}</h1>
    <ul class="backpack__features">
      <li class="feature backpack__volume">Volume:<span> ${backpack.volume}l</span></li>
      <li class="feature backpack__color">Color:<span> ${backpack.color}</span></li>
      <li class="feature backpack__age">Age:<span> ${backpack.backpackAge()} days old</span></li>
      <li class="feature backpack__pockets">Number of pockets:<span> ${backpack.pocketNum}</span></li>
      <li class="feature backpack__strap">Left strap length:<span> ${backpack.strapLength.left} inches</span></li>
      <li class="feature backpack__strap">Right strap length:<span> ${backpack.strapLength.right} inches</span></li>
      <li class="feature backpack__lid">Lid status: <span>${backpack.lidOpen ? "open" : "closed"}</span></li>
    </ul>
    <button class="lid-toggle">Open lid</button>
  `;

  // Select button (FIXED class name)
  const button = backpackArticle.querySelector(".lid-toggle");
  const status = backpackArticle.querySelector(".backpack__lid span");
  button.addEventListener("click", (event) => {
    console.log(event);
    status.innerHTML === "open"
      ? (status.innerHTML = "close")
      : (status.innerHTML = "open");
  });

  return backpackArticle;
});

// Append all articles to <main>
const main = document.querySelector("main");
backpackList.forEach((article) => {
  main.appendChild(article);
});
