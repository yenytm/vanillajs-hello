/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["The dog", "My sister", "Her unicorn"];
  let action = ["ate", "flew", "stole"];
  let what = ["my homework", "my phone", "my keys"];
  let when = ["before class", "this morning", "during lunch"];

  function randomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  let excuse =
    randomElement(who) +
    " " +
    randomElement(action) +
    " " +
    randomElement(what) +
    " " +
    randomElement(when);

  console.log("Hello Rigo from the console!");
  console.log(excuse);

  const elementExcuse = document.getElementsByTagName("p");
  elementExcuse[0].innerText = excuse;
};
