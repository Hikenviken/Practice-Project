function greeter(question = "What is your name") {
let answer = prompt(question);

if (answer === "") {
  console.log('you did not answer')
  answer = prompt(question);

}
return answer;
}


document.querySelector("h1").textContent = greeter();



// const answer = greeter();
// console.info(answer);

// const h1TextContent = document.querySelector('h1').textContent;
// console.log(h1TextContent);
