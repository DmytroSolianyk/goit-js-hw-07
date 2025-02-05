const categories = document.querySelectorAll("#categories > li");

console.log("Number of categories:", categories.length);

categories.forEach((element) => {
  const category = element.querySelector("h2").textContent;
  const elementsCount = element.querySelectorAll("ul > li").length;

  console.log("Category:", category);
  console.log("Elements:", elementsCount);
});
