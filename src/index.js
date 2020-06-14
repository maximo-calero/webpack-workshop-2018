import nav from "./nav";
import { top, bottom, footer } from "./footer";
import makeButton from "./button";
import { makeColorStyle } from "./button-styles";

const button = makeButton('Yay a button!!!!');
button.style = makeColorStyle('Cyan');
document.body.appendChild(button);
document.body.appendChild(footer);
