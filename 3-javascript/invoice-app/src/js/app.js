// selectors
const app = document.querySelector("#app");
const recordForm = app.querySelector("#recordForm");
const productSelect = app.querySelector("#productSelect");
const quantityInput = app.querySelector("#quantityInput");
const recordGroup = app.querySelector("#recordGroup");
const recordTotal = app.querySelector("#recordTotal");
const printBtn = app.querySelector("#printBtn");
const productDrawer = app.querySelector("#productDrawer");
const closeDrawer = app.querySelector("#closeDrawer");
const productGroup = app.querySelector("#productGroup");
const newProductForm = app.querySelector("#newProductForm");
const manageProductBtn = app.querySelector("#manageProductBtn");

const productTemplate = app.querySelector("#productTemplate");

// data
const products = [
  {
    id: 1,
    name: "Apple",
    price: 500,
  },
  {
    id: 2,
    name: "Mango",
    price: 1500,
  },
  {
    id: 3,
    name: "Banana",
    price: 200,
  },
  {
    id: 4,
    name: "Orange",
    price: 600,
  },
  {
    id: 5,
    name: "Lime",
    price: 100,
  },
];

let tableIndex = 1;

// functions

const productUi = ({ name, price }) => {
  const product = productTemplate.content.cloneNode(true);
  product.querySelector(".product-name").innerText = name;
  product.querySelector(".product-price").innerText = price;
  return product;
};

const productOption = (id, name) => {
  const option = document.createElement("option");
  option.innerText = name;
  option.value = id;
  return option;
};

const productRender = (items) => {
  items.forEach((item) => {
    productSelect.append(new Option(item.name, item.id));
    productGroup.append(productUi(item));
  });
};

const calculateRecordTotal = () => {
  // let total = 0;
  // const els = app.querySelectorAll(".record-cost");
  // els.forEach(el => total+= parseFloat(el.innerText))

  const total = [...document.querySelectorAll(".record-cost")].reduce(
    (pv, cv) => pv + parseFloat(cv.innerText),
    0
  );

  recordTotal.innerText = total;

  return total;
};

const recordUi = (id, productName, productPrice, quantity) => {
  const cost = productPrice * quantity;
  const tr = document.createElement("tr");
  tr.setAttribute("product-id", id);
  tr.className =
    "group odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700";
  tr.innerHTML = `
    <td class="px-6 py-4 td-counter"></td>
    <th
        scope="row"
        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
    >
        ${productName}
    </th>
    <td class="px-6 py-4 text-end record-price">${productPrice}</td>
    <td class="px-6 py-4 text-end">

    <button class="q-sub pointer-events-none group-hover:pointer-events-auto opacity-0 group-hover:opacity-100 -translate-x-6 group-hover:translate-x-0 duration-200 bg-blue-100 text-blue-600 p-1 rounded">

      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3 pointer-events-none">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
      </svg>
      </button>

      <span class="record-q w-5 inline-block">${quantity}</span>

      <button class="q-add pointer-events-none group-hover:pointer-events-auto opacity-0 group-hover:opacity-100 translate-x-6 group-hover:translate-x-0 duration-200 bg-blue-100 text-blue-600 p-1 rounded">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3 pointer-events-none">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
    
      </button>
    </td>
    <td class="px-6 py-4 text-end relative">

    <span class='record-cost'>${cost}</span>

    <button class='record-del group-hover:opacity-100 group-hover:pointer-events-auto duration-200 group-hover:left-3/4 absolute pointer-events-none opacity-0 left-full top-3 translate-x-2 active:scale-75 bg-blue-100 p-2 rounded-lg'>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 pointer-events-none stroke-blue-700 stroke-1">
        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
    </svg>
  
    </button>
    </td>
    `;

  // const recordDel = tr.querySelector(".record-del");
  // recordDel.addEventListener("click",() => {
  //     tr.remove()
  //     calculateRecordTotal()
  // })

  return tr;
};

// initialRender
productRender(products);

// handler
const recordFormHandler = (event) => {
  event.preventDefault();
  // id => product => price,name
  const currentProduct = products.find(
    (product) => product.id == productSelect.value
  );
  // console.log(productSelect.value);
  // console.log(currentProduct);
  // console.log(quantityInput.valueAsNumber);

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

const recordGroupHandler = (event) => {
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

const printBtnHandler = () => {
  print();
};

const manageProductBtnHandler = () => {
  productDrawer.classList.toggle("translate-x-full");
  productDrawer.classList.add("duration-200");
};

const newProductFormHandler = (event) => {
  event.preventDefault();
  const formData = new FormData(newProductForm);

  console.log(formData.get("new_product_name"));
  console.log(formData.get("new_product_price"));

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

// listener
recordForm.addEventListener("submit", recordFormHandler);
recordGroup.addEventListener("click", recordGroupHandler);
printBtn.addEventListener("click", printBtnHandler);
manageProductBtn.addEventListener("click", manageProductBtnHandler);
closeDrawer.addEventListener("click", manageProductBtnHandler);
newProductForm.addEventListener("submit", newProductFormHandler);
