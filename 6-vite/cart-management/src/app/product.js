import {
  fillStarTemplate,
  outlineStarTemplate,
  productGroup,
  productTemplate,
} from "../core/selectors";

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
  product.querySelector(".product-img").src = image;
  product.querySelector(".product-title").innerText = title;
  product.querySelector(".product-description").innerText = description;
  product.querySelector(".product-price").innerText = price;
  product.querySelector(".product-rate").innerText = rate;
  product.querySelector(".product-count").innerText = count;
  product.querySelector(".product-stars").append(starRating(rate));

  return product;
};

export const productRender = (lists) => {
  productGroup.innerHTML = "";
  lists.forEach((list) => productGroup.append(productUi(list)));
};
