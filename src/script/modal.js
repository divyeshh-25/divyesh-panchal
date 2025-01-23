const openEls = document.querySelectorAll(".open-modal");
const closeEls = document.querySelectorAll(".close-modal");
const isVisible = "is-visible";
const modal = document.getElementById("modal1");

for (const el of openEls) {
  el.addEventListener("click", function () {
        modal.classList.add(isVisible);
  });
}

for (const el of closeEls) {
    console.log(closeEls);
  el.addEventListener("click", function () {
    modal.classList.remove(isVisible);
  });
}

document.addEventListener("click", (e) => {
  if (e.target == document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});

document.addEventListener("keyup", (e) => {
  if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});