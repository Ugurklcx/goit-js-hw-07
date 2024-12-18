const categories = document.querySelector("#categories");
const liItem = categories.children;
const categoriesLength = liItem.length;

const items = document.querySelectorAll(".item"); // item sınıfına ait tüm öğeleri seçtim.

console.log(`Number Of categories : ${categoriesLength}`);
items.forEach((item) => {
  const heading = item.querySelector("h2").textContent; // h2 başlığındaki metinleri aldım.
  const listItemCount = item.querySelectorAll("ul li").length; // h2 altındaki ul nin li lerini seçip sayısıı aldım.
  console.log(`Category : ${heading}`);
  console.log(`Elements : ${listItemCount}`);
});
