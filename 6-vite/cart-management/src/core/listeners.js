import { cartGroupHandler } from "../app/cart";
import { categoryGroupHandler } from "../app/category";
import { productGroupHandler } from "../app/product";
import { orderBtnHandler, searchBtnHandler, searchInputHandler } from "./handlers";
import {
  cartGroup,
  categoryGroup,
  orderBtn,
  productGroup,
  searchBtn,
  searchInput,
} from "./selectors";

const listeners = () => {
  categoryGroup.addEventListener("click", categoryGroupHandler);
  searchBtn.addEventListener("click", searchBtnHandler);
  searchInput.addEventListener("keyup", searchInputHandler);
  productGroup.addEventListener("click", productGroupHandler);
  cartGroup.addEventListener("click", cartGroupHandler);
  orderBtn.addEventListener("click",orderBtnHandler)
};

export default listeners;
