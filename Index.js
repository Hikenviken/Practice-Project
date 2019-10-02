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

const aboutLink = document.querySelector("#about");

aboutLink.addEventListener("click", function(event){
event.preventDefault();
render(state[event.target.textContent]);

})
// const aboutText =
// console.log("about text is:" , aboutText);
// console.log(state[aboutText]);

//   console.log("Get your filthy cursor off me")
//
