import my, { a1, a2 } from "./17.export-import";
import { a1 as aaa } from "./17.export-import"
const info = document.querySelector("#info");



info.innerHTML += my(5) + "<br>";
info.innerHTML += a1 + "<br>";
info.innerHTML += a2 + "<br>";
console.log(a1 === aaa);  //true










// let f = name => `Hello,${name}`;
// document.querySelector("#info").innerHTML = f("PPP");