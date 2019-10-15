import {Header, Nav, Main, Footer} from "./components";
import * as state from "./store";

function render(st = state.Home) {
  console.log('st received is: ', st);

document.querySelector("#root").innerHTML = `

${Header(st)}
${Nav(st)}
${Main(st)}
${Footer()}
`;
}
render();

const links = document.querySelector("nav a, footer a");

for (let i = 0; i < links.length; i += 1) {
links[i].addEventListener("click", function(event){
event.preventDefault();
render(state[event.target.textContent]);
// console.log("Get your filthy cursor off of me.")
})
}
//
// const aboutText =
// console.log("about text is:" , aboutText);
// console.log(state[aboutText]);

//   console.log("Get your filthy cursor off me")
//
