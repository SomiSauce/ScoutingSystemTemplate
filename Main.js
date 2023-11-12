const steps = Array.from(document.querySelectorAll(" .step"));
const nextBtn = document.querySelectorAll(" .next-btn");
const prevBtn = document.querySelectorAll(" .previous-btn");

nextBtn.forEach((button) => {
  button.addEventListener("click", () => {
    changeStep("next");
  });
});
prevBtn.forEach((button) => {
  button.addEventListener("click", () => {
    changeStep("prev");
  });
});

function changeStep(btn) {
  const active = document.querySelector(".active");
  let index = steps.indexOf(active);
  console.log(index);
  console.log(steps);
  steps[index].classList.remove("active");
  if (btn === "next") {
    index++;
  } else if (btn === "prev") {
    index--;
  }
  steps[index].classList.add("active");
}