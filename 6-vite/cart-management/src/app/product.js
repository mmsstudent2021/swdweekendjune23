import { products } from "../core/data";
import {
  cartGroup,
  costTotal,
  fillStarTemplate,
  outlineStarTemplate,
  productGroup,
  productTemplate,
} from "../core/selectors";
import { cartUi } from "./cart";

export const starRating = (rate) => {
  const stars = document.createDocumentFragment();

  for (let i = 1; i <= 5; i++) {
    const fillStar = fillStarTemplate.content.cloneNode(true);
    const outlineStar = outlineStarTemplate.content.cloneNode(true);

    if (i <= rate.toFixed(0)) {
      stars.append(fillStar);
    } else {
      stars.append(outlineStar);
    }
  }

  return stars;
};

export const productUi = ({
  id,
  title,
  image,
  description,
  price,
  rating: { rate, count },
}) => {
  const product = productTemplate.content.cloneNode(true);
  product.querySelector(".product-card").setAttribute("product-card-id", id);
  product.querySelector(".product-img").src = image;
  product.querySelector(".product-title").innerText = title;
  product.querySelector(".product-description").innerText = description;
  product.querySelector(".product-price").innerText = price;
  product.querySelector(".product-rate").innerText = rate;
  product.querySelector(".product-count").innerText = count;
  product.querySelector(".product-stars").append(starRating(rate));

  if(cartGroup.querySelector(`[product-in-cart-id='${id}']`)){
    product.querySelector(".add-to-cart-btn").toggleAttribute("disabled")
  }

  return product;
};

export const productRender = (lists) => {
  productGroup.innerHTML = "";
  lists.forEach((list) => productGroup.append(productUi(list)));
};

export const productGroupHandler = (event) => {
  if (event.target.classList.contains("add-to-cart-btn")) {
    event.target.toggleAttribute("disabled");

    const currentProductCard = event.target.closest(".product-card");
    const currentProductCardId = parseInt(
      currentProductCard.getAttribute("product-card-id")
    );

    const currentProduct = products.find(
      (product) => product.id === currentProductCardId
    );
    cartGroup.append(cartUi(currentProduct));
  }
};
