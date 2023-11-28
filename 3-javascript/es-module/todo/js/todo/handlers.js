import { listUi } from "./functions.js";
import { listGroup, textInput } from "./selectors.js";

export const addBtnHandler = () => {
    listGroup.append(listUi(textInput.value));
    textInput.value = null
}