/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let subject = ["The dog", "My sister", "Her unicorn"];
  let verb = ["ate", "flew", "stole"];
  let object = ["my homework", "my phone", "my keys"];
  let time = ["before class", "this morning", "during lunch"];

  function randExcuse(str) {
    return str[Math.floor(Math.random() * str.length)];
  }
  let excuseGen =
    randExcuse(subject) +
    " " +
    randExcuse(verb) +
    " " +
    randExcuse(object) +
    " " +
    randExcuse(time);

  console.log("Hello Rigo from the console!");
  console.log(excuseGen);

  const exGenerator = document.getElementsByTagName("p");
  exGenerator[0].innerText = excuseGen;
};
