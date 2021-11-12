const popup = document.querySelector(".click");
const container = document.querySelector(".container");
const closeMe = document.querySelector(".close");

popup.addEventListener("click", () => {
  container.style.display = "block";
  popup.style.display="none";
});

closeMe.addEventListener("click", () => {
  container.style.display = "none";
  popup.style.display="block";
});


container.addEventListener('click',()=>{
    container.style.display = "none";
    popup.style.display="block";
    propo
})