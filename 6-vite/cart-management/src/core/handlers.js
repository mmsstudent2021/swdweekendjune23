import { productRender } from "../app/product";
import { products } from "./data";
import { confirmBox } from "./functions";
import { cartGroup, costTotal, searchBtn, searchInput } from "./selectors";

export const searchBtnHandler = () => {
  // searchInput.focus()
  searchInput.classList.toggle("opacity-0");
  searchInput.classList.toggle("pointer-events-none");
  searchInput.focus();
};

export const searchInputHandler = (event) => {
  productRender(
    products.filter(
      (product) => product.title.toLowerCase().search(event.target.value) != -1
    )
  );
};

export const orderBtnHandler = () => {
  confirmBox(
    () => {
      const order = {};
      order.user_name = "Hein Htet Zan";
      order.id = Date.now();
      order.total = parseFloat(costTotal.innerText);
      order.products = [...cartGroup.querySelectorAll(".product-in-cart")].map(
        (el) => {
          const id = parseInt(el.getAttribute("product-in-cart-id"));
          const quantity = parseInt(el.querySelector(".cart-q").innerText);
          const data = {
            id,
            quantity,
          };

          productGroup
            .querySelector(`[product-card-id='${id}']`)
            .querySelector(".add-to-cart-btn")
            .toggleAttribute("disabled");

          cartGroup.querySelector(`[product-in-cart-id='${id}']`).remove();

          return data;
        }
      );
      console.log(order);
    },
    "Are U sure place order",
    "This will send to server",
    "question"
  );
};
