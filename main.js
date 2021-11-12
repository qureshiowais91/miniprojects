const copy = document.querySelector(".copy");
const box = document.querySelector(".box");
const doc = document;

copy.addEventListener("copy", () => {
  console.log("copy p tag");
});

box.addEventListener("mousemove", (e) => {
  box.textContent = `${e.offsetX} ${e.offsetY}`;
});

doc.addEventListener("wheel", (e) => {
    console.log(e.offsetX,e.offsetY);
});
