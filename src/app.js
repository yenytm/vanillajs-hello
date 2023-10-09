/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let subject = ["The dog", "My sister", "Her unicorn", "My cat"];
  let verb = ["ate", "flew", "stole", "left with"];
  let object = ["my homework", "my phone", "my keys", "my car", "my laptop"];
  let time = [
    "before class.",
    "this morning.",
    "during lunch.",
    "before class."
  ];

  function randExcuse(str) {
    return str[Math.floor(Math.random() * str.length)];
  }
  let excuseGen = randExcuse(subject).concat(
    " ",
    randExcuse(verb),
    " ",
    randExcuse(object),
    " ",
    randExcuse(time)
  );

  console.log("Hello Rigo from the console!");
  console.log(excuseGen);

  const exGenerator = document.getElementsByTagName("p");
  exGenerator[0].innerText = excuseGen;
};
