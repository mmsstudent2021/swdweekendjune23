import { products } from "../core/data";
import { categoryGroup, categoryTemplate } from "../core/selectors";
import { productRender } from "./product";

export const categoryUi = (text) => {
  const category = categoryTemplate.content.cloneNode(true);
  category.querySelector(".cat-btn").innerText = text;
  return category;
};

export const categoryRender = (lists) => {
  lists.forEach((list) => categoryGroup.append(categoryUi(list)));
};

export const categoryGroupHandler = (event) => {
  if (event.target.classList.contains("cat-btn")) {
    const selectedCategory = event.target.innerText;
    // old active remove
    categoryGroup.querySelector("button.active")?.classList?.remove("active");
    // add active to current category
    event.target.classList.add("active");

    productRender(
      products.filter(
        (product) =>
          selectedCategory === "All" || product.category === selectedCategory
      )
    );
  }
};
