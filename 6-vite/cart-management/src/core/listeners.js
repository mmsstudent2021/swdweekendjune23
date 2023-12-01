import { categoryGroupHandler } from "../app/category";
import { searchBtnHandler, searchInputHandler } from "./handlers";
import { categoryGroup, searchBtn, searchInput } from "./selectors";

const listeners = () => {
  categoryGroup.addEventListener("click", categoryGroupHandler);
  searchBtn.addEventListener("click", searchBtnHandler);
  searchInput.addEventListener("keyup", searchInputHandler);
};

export default listeners;
