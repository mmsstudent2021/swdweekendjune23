import initialRenders from "./core/initialRenders";
import listeners from "./core/listeners";

class Shop {
  init() {
    console.log("Shop App Start");
    initialRenders();
    listeners();
  }
}

export default Shop;
