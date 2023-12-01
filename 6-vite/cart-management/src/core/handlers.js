import { productRender } from "../app/product";
import { products } from "./data";
import { searchBtn, searchInput } from "./selectors";

export const searchBtnHandler = () => {
  // searchInput.focus()
  searchInput.classList.toggle("opacity-0");
  searchInput.classList.toggle("pointer-events-none");
  searchInput.focus();
};

export const searchInputHandler = (event) => {
  productRender(
    products.filter((product) => product.title.toLowerCase().search(event.target.value) != -1)
  );
};
