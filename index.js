function span(num, src) {
  const span = document.getElementById(`span${num}`);
  const img = src.querySelector("img");

  if (span.classList.contains("span")) {
    span.classList.remove("span");
    img.src = "./assets/images/icon-plus.svg";
  } else {
    span.classList.add("span");
    img.src = "./assets/images/icon-minus.svg";
  }
}
