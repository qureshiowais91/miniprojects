const ul = document.querySelector("ul");
const items = document.querySelectorAll("li");
const button = document.querySelector("button");

// button.addEventListener("click", () => {
//     ul.innerHTML+="<li>value 5 from js </li>"
// });

ul.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.remove();
  }
});

button.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = "new text";
  ul.prepend(li);
});

// items.forEach((item) => {
//   item.addEventListener("click", (e) => {
//     e.target.remove();
//   });
// });
