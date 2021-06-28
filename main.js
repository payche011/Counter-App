let countPpl = document.querySelector(".count-ppl");
let incrementPpl = document.querySelector(".increment-btn");
let incrementSave = document.querySelector(".increment-save");
let savePpl = document.querySelector(".save-ppl");
let reload = document.querySelector(".reload");

let count = 0;

incrementPpl.addEventListener("click", () => {
  function increment() {
    count += 1;
    countPpl.textContent = count;
  }
  increment();
});

incrementSave.addEventListener("click", () => {
  function incrementSave() {
    let countStr = count + " - ";
    savePpl.textContent += countStr;
    countPpl.textContent = count;
    count = 0;
  }
  incrementSave();
});

reload.addEventListener("click", () => {
  function refreshPage() {
    window.location.reload();
  }
  refreshPage();
});
