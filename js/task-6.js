function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector("#controls");
const createButton = controls.querySelector("[data-create]");
const destroyButton = controls.querySelector("[data-destroy]");
const input = controls.querySelector("input");
const containerBoxes = document.querySelector("#boxes");

//Kutu oluşturma başlangıç
function createBoxes(amount) {
  let firstBoxSize = 30;
  const boxElements = []; // oluşturaln kutuları bir dizide toplamak ve topluca kullanmak için dizi oluşturduk.

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${firstBoxSize}px`;
    box.style.height = `${firstBoxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = "5px";
    boxElements.push(box);
    firstBoxSize += 10;
  }
  containerBoxes.append(...boxElements);
}
//Kutu oluşturma bitiş

// temizleme fonksiyonu
function destroyBoxes() {
  containerBoxes.innerHTML = "";
}

//create olayı
createButton.addEventListener("click", () => {
  const amount = parseInt(input.value, 10);

  if (!amount || amount < 1 || amount > 100) {
    input.value = "";
    return;
  }
  destroyBoxes(); // kutuları temizle
  createBoxes(amount); // kutuları oluştur
  input.value = ""; // inputn içini temizle
});

//destry butonu işlevi
destroyButton.addEventListener("click", () => {
  destroyBoxes();
});
