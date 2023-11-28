import "./input.css";

import { addBtnHandler } from "./todo/handlers";
import { addBtn } from "./todo/selectors";



addBtn.addEventListener("click",addBtnHandler)