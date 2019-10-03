import {Header, Nav, Main, Footer} from "./components";

const state = {
  home: {
    heading: "Home Page"
  },
    About: {
      heading: "About Page"
    }
};
function render(st = state.home) {
document.querySelector("#root").innerHTML = `
${Header(st.heading)}
${Nav()}
${Main()}
${Footer()}
`;
}
render();

const links = document.querySelector("nav s");
console.log(Array.isArray(links));

console.log(links[3]);

for (let i = 0; i < links.length; i += 1) {
links[i].addEventListener("click", function(event){
event.preventDefault();
render(state[event.target.textContent]);

console.log("Get your filthy cursor off of me.")
})
}
//
// const aboutText =
// console.log("about text is:" , aboutText);
// console.log(state[aboutText]);

//   console.log("Get your filthy cursor off me")
//
