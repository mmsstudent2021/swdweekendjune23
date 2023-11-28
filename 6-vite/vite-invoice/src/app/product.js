import { productGroup, productSelect, productTemplate } from "../core/selectors";

export const productUi = ({ name, price }) => {
  const product = productTemplate.content.cloneNode(true);
  product.querySelector(".product-name").innerText = name;
  product.querySelector(".product-price").innerText = price;
  return product;
};

export const productRender = (items) => {
  items.forEach((item) => {
    productSelect.append(new Option(item.name, item.id));
    productGroup.append(productUi(item));
  });
};
