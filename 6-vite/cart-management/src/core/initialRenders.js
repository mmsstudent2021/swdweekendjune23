import { categoryRender } from "../app/category";
import { productRender } from "../app/product";
import { categories, products } from "./data";

const initialRenders = () => {
  categoryRender(categories);
  productRender(products);
};

export default initialRenders;
