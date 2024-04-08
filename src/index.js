import getState from "./module.js";
import styles from "./styles/main.scss";

const imgs = document.getElementsByClassName("layout__frame__player__image");
const img = imgs[0];
const selects = document.getElementsByClassName("layout__choose-animation");
let select = selects[0];
img.src = getState("run");
select.addEventListener("change", (event) => {
  img.src = getState(select.options[select.selectedIndex].value);
});
