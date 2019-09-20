function greeter(question = "Karen please come back I miss the kids.") {
  return prompt(question);
}

const answer = greeter();
console.info(answer);

const h1TextContent = document.querySelector('h1').textContent = answer;
console.log(h1TextContent);
