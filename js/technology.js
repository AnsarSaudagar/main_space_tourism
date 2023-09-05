const firstBtn = document.querySelector("#firstTechnologyBtn");
const secondBtn = document.querySelector("#secondTechnologyBtn");
const thirdBtn = document.querySelector("#thirdTechnologyBtn");

const technologyHeading = document.querySelector(".technology-heading");
const technologyPara = document.querySelector(".technology-para");

const technologyImg = document.querySelector("#technologyImg");

const changeContentTechnology = (index) => {
  technologyImg.src = fullObj.technology[index].images.portrait;

  technologyHeading.textContent = fullObj.technology[index].name.toUpperCase();

  technologyPara.textContent = fullObj.technology[index].description;
};

firstBtn.addEventListener("click", () => {
  changeContentTechnology(0);
});
secondBtn.addEventListener("click", () => {
  changeContentTechnology(1);
});
thirdBtn.addEventListener("click", () => {
  changeContentTechnology(2);
});
