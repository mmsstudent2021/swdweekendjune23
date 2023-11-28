import { productRender } from "./app/product";
import {
  manageProductBtnHandler,
  newProductFormHandler,
  printBtnHandler,
  recordFormHandler,
  recordGroupHandler,
} from "./core/handlers";
import {
  closeDrawer,
  manageProductBtn,
  newProductForm,
  printBtn,
  recordForm,
  recordGroup,
} from "./core/selectors";
import { products } from "./core/variables";

class Invoice {
  initialRender() {
    productRender(products);
  }

  listener() {
    manageProductBtn.addEventListener("click", manageProductBtnHandler);
    closeDrawer.addEventListener("click", manageProductBtnHandler);
    newProductForm.addEventListener("submit", newProductFormHandler);
    recordForm.addEventListener("submit", recordFormHandler);
    recordGroup.addEventListener("click", recordGroupHandler);
    printBtn.addEventListener("click", printBtnHandler);
  }

  init() {
    console.log("Invoice App start");
    this.initialRender();
    this.listener();
  }
}

export default Invoice;
