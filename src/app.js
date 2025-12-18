import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  const pronoun = ["the", "our", "that"];
  const adjetive = ["great", "big", "wonderful"];
  const noun = ["rocker", "cat", "dog", "irish"];
  const domainList = [];


    for (let i = 0; i < pronoun.length; i++) {
      for (let j = 0; j < adjetive.length; j++) {
      for (let k = 0; k < noun.length; k++) {
       const domain = pronoun[i] + adjetive[j] + noun[k] + ".com";
       domainList.push(domain);
      }
     }
    }
  //Selected placeholder
  const alertBox = document.querySelector(".alert");
  console.log(domainList);
  alertBox.innerHTML = "";
  domainList.forEach((domain) => {
alertBox.innerHTML += domain + "<br>";
  });
};
