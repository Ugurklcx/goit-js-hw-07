function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeButton = document.querySelector(".change-color");
const spanText = document.querySelector(".color");

changeButton.addEventListener("click", () => {
  const randomColor = getRandomHexColor(); // her butona bastığımızda fonksiyon tekrar çalışır.
  spanText.textContent = randomColor;
  document.body.style.backgroundColor = randomColor;
});
