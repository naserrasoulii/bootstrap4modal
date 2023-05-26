const form = document.querySelector(".formCustom");
const labels = document.querySelectorAll(".formCustom label");
const radio = document.querySelectorAll(".formCustom .radioInputCustom");
let forLabel = "";
labels.forEach((el) => {
  el.addEventListener("click", selectOption);
});
async function selectOption(e) {
  forLabel = "";
  forLabel = e.target.getAttribute("for");
  await removeCheck();
  await addCheck();
}
async function removeCheck() {
  labels.forEach((el) => {
    if (el.classList.contains("active")) {
      el.classList.remove("active");
    }
  });
  radio.forEach((el) => {
    if (el.hasAttribute("checked")) {
      el.removeAttribute("checked");
    }
  });
}
async function addCheck() {
  radio.forEach((el) => {
    if (el.getAttribute("id") == forLabel) {
      el.setAttribute("checked", "checked");
    }
  });
  labels.forEach((el) => {
    if (el.getAttribute("for") == forLabel) {
      el.classList.add("active");
    }
  });
}
