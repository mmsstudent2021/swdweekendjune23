import { productUi } from "../app/product";
import { calculateRecordTotal, recordUi } from "../app/record";
import {
  app,
  newProductForm,
  productDrawer,
  recordForm,
  recordGroup,
} from "./selectors";
import { products } from "./variables";

export const manageProductBtnHandler = () => {
  productDrawer.classList.toggle("translate-x-full");
  productDrawer.classList.add("duration-200");
};

export const newProductFormHandler = (event) => {
  event.preventDefault();
  const formData = new FormData(newProductForm);

  //   console.log(formData.get("new_product_name"));
  //   console.log(formData.get("new_product_price"));

  const newProduct = {
    id: Date.now(),
    name: formData.get("new_product_name"),
    price: formData.get("new_product_price"),
  };

  productGroup.append(productUi(newProduct));
  productSelect.append(new Option(newProduct.name, newProduct.id));
  products.push(newProduct);

  newProductForm.reset();
};

export const recordFormHandler = (event) => {
  event.preventDefault();

  const currentProduct = products.find(
    (product) => product.id == productSelect.value
  );

  const isExist = app.querySelector(`[product-id='${currentProduct.id}']`);

  if (isExist) {
    const currentRowQ = isExist.querySelector(".record-q");
    const currentRowPrice = isExist.querySelector(".record-price");
    const currentRowCost = isExist.querySelector(".record-cost");

    currentRowQ.innerText =
      parseInt(currentRowQ.innerText) + quantityInput.valueAsNumber;

    currentRowCost.innerText =
      currentRowQ.innerText * currentRowPrice.innerText;

    recordForm.reset();
    calculateRecordTotal();
  } else {
    recordGroup.append(
      recordUi(
        currentProduct.id,
        currentProduct.name,
        currentProduct.price,
        quantityInput.valueAsNumber
      )
    );

    recordForm.reset();
    calculateRecordTotal();
  }
};

export const recordGroupHandler = (event) => {
  // console.log(event.target);
  if (event.target.classList.contains("record-del")) {
    if (confirm("Are U sure to delete ?")) {
      event.target.closest("tr").remove();
      calculateRecordTotal();
    }
  } else if (event.target.classList.contains("q-add")) {
    const currentRow = event.target.closest("tr");
    const currentRowQ = currentRow.querySelector(".record-q");
    const currentRowPrice = currentRow.querySelector(".record-price");
    const currentRowCost = currentRow.querySelector(".record-cost");

    currentRowQ.innerText = parseInt(currentRowQ.innerText) + 1;
    currentRowCost.innerText =
      currentRowQ.innerText * currentRowPrice.innerText;

    calculateRecordTotal();
  } else if (event.target.classList.contains("q-sub")) {
    const currentRow = event.target.closest("tr");
    const currentRowQ = currentRow.querySelector(".record-q");
    const currentRowPrice = currentRow.querySelector(".record-price");
    const currentRowCost = currentRow.querySelector(".record-cost");

    if (currentRowQ.innerText > 1) {
      currentRowQ.innerText = parseInt(currentRowQ.innerText) - 1;
      currentRowCost.innerText =
        currentRowQ.innerText * currentRowPrice.innerText;

      calculateRecordTotal();
    }
  }
};

export const printBtnHandler = () => {
  print();
};
