'use strict';
import { exportName } from "../idinfoSub/idinfoSub";

let myName = document.getElementsByTagName('span')
console.log(myName[0].innerText);
myName.innerText = exportName.exname;