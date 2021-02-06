"use strict";

// Các trục X (Ngang), Y(dọc), Z(Chéo tạo 3D)
//Movement Animation to happen 
var card = document.querySelector(".card");
var container = document.querySelector(".container"); //Items

var title = document.querySelector(".title");
var nike = document.querySelector(".nike img");
var purchase = document.querySelector(".purchase button");
var description = document.querySelector(".info h3");
var sizes = document.querySelector(".sizes"); //Movement Animation Event 

container.addEventListener("mousemove", function (e) {
  console.log("hey");
  var xAxis = (window.innerWidth / 2 - e.pageX) / 10;
  var yAxis = (window.innerHeight / 2 - e.pageY) / 10;
  card.style.transform = "rotateX(".concat(xAxis, "deg) rotateY(").concat(yAxis, "deg)");
}); //Animation In

container.addEventListener("mouseenter", function (e) {
  card.style.transition = "none"; //Popout

  title.style.transform = "translateZ(150px)";
  nike.style.transform = "translateZ(200px) rotateZ(45deg)";
  description.style.transform = "translateZ(125px)";
  sizes.style.transform = "translateZ(100px)";
  purchase.style.transform = "translateZ(75px)";
}); //Animation Out 

container.addEventListener("mouseleave", function (e) {
  card.style.transition = "all 0.5s ease";
  card.style.transform = "rotateY(0deg) rotateY(0deg)"; //Popback

  title.style.transform = "translateZ(0px)";
  nike.style.transform = "translateZ(0px) rotateZ(0deg)";
  description.style.transform = "translateZ(0px)";
  sizes.style.transform = "translateZ(0px)";
  purchase.style.transform = "translateZ(0px)";
});