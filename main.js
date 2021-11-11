const ptag = document.getElementsByTagName("p");


for (const p of ptag) {
  var value = p.innerHTML.split(" ");
  value.forEach((e) => {
    if (e == "success") {
      p.classList.add("success");
    } else if (e == "error") {
      p.classList.add("error");
    }
  });
}
