import { confirmBox } from "../core/functions";
import { cartGroup, cartTemplate, productGroup } from "../core/selectors";

export const cartUi = ({ id, title, image, price }) => {
  const cart = cartTemplate.content.cloneNode(true);
  cart.querySelector(".product-in-cart").setAttribute("product-in-cart-id", id);
  cart.querySelector(".cart-img").src = image;
  cart.querySelector(".cart-title").innerText = title;
  cart.querySelector(".cart-price").innerText = price;
  cart.querySelector(".cart-cost").innerText = price;
  cart.querySelector(".cart-q").innerText = 1;
  return cart;
};

export const cartRemove = (id) => {
  const currentCart = cartGroup.querySelector(`[product-in-cart-id='${id}']`);
  const currentProductCard = productGroup.querySelector(`[product-card-id='${id}']`);
  confirmBox(() => {
    currentCart.remove();
    currentProductCard.querySelector(".add-to-cart-btn").toggleAttribute("disabled")
  });
};

export const cartQuantityUpdate = (id, quantity) => {
  const currentCart = cartGroup.querySelector(`[product-in-cart-id='${id}']`);

  const currentCartQ = currentCart.querySelector(".cart-q");
  const currentCartPrice = currentCart.querySelector(".cart-price");
  const currentCartCost = currentCart.querySelector(".cart-cost");

  if (quantity > 0 || currentCartQ.innerText > 1) {
    currentCartQ.innerText = parseInt(currentCartQ.innerText) + quantity;
    currentCartCost.innerText =
      currentCartQ.innerText * currentCartPrice.innerText;
  }
};

export const cartGroupHandler = (event) => {
  if (event.target.classList.contains("cart-del")) {
    cartRemove(
      event.target
        .closest(".product-in-cart")
        .getAttribute("product-in-cart-id")
    );
  } else if (event.target.classList.contains("cart-q-add")) {
    cartQuantityUpdate(
      event.target
        .closest(".product-in-cart")
        .getAttribute("product-in-cart-id"),
      1
    );
  } else if (event.target.classList.contains("cart-q-sub")) {
    cartQuantityUpdate(
      event.target
        .closest(".product-in-cart")
        .getAttribute("product-in-cart-id"),
      -1
    );
  }
};

export const cartGroupObserver = () => {
  const process = () => {
    // cart count
    const cartCount = cartGroup.querySelectorAll(".product-in-cart").length;
    app
      .querySelectorAll(".cart-item-count")
      .forEach((el) => (el.innerText = cartCount));

    // set total
    const cartCostTotal = [...cartGroup.querySelectorAll(".cart-cost")].reduce(
      (pv, cv) => pv + parseFloat(cv.innerText),
      0
    );

    costTotal.innerText = cartCostTotal.toFixed(2);
  };

  const options = {
    childList: true,
    subtree: true,
  };

  const observer = new MutationObserver(process);
  observer.observe(cartGroup, options);
};
