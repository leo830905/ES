import Person from "./18.person";
const info = document.querySelector("#info");

const p1 = new Person("ppp", 25);

info.innerHTML += p1 + "<br>";






// import my, { a1, a2 } from "./17.export-import";
// import { a1 as aaa } from "./17.export-import";
// import cookies from "js-cookie";
// const info = document.querySelector("#info");

// cookies.set("David", "Beckham");

// info.innerHTML += my(5) + "<br>";
// info.innerHTML += a1 + "<br>";
// info.innerHTML += a2 + "<br>";
// console.log(a1 === aaa);  //true



// let f = name => `Hello,${name}`;
// document.querySelector("#info").innerHTML = f("PPP");