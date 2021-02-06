// Các trục X (Ngang), Y(dọc), Z(Chéo tạo 3D)
//Movement Animation to happen 
const card = document.querySelector(".card");
const container = document.querySelector(".container");

//Items
const title = document.querySelector(".title");
const nike = document.querySelector(".nike img");
const purchase = document.querySelector(".purchase button");
const description = document.querySelector(".info h3");
const sizes = document.querySelector(".sizes");

//Movement Animation Event 
container.addEventListener("mousemove", (e) => {
    console.log("hey");
    let xAxis = (window.innerWidth / 2 -e.pageX) / 10; 
    let yAxis = (window.innerHeight / 2 -e.pageY) / 10; 
    card.style.transform = `rotateX(${xAxis}deg) rotateY(${yAxis}deg)`;
});

//Animation In
container.addEventListener("mouseenter", (e) => {
    card.style.transition = "none";
    //Popout
    title.style.transform = "translateZ(150px)";
    nike.style.transform = "translateZ(200px) rotateZ(45deg)";
    description.style.transform = "translateZ(125px)";
    sizes.style.transform = "translateZ(100px)";
    purchase.style.transform = "translateZ(75px)";
})
//Animation Out 
container.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateY(0deg)`;
    //Popback
    title.style.transform = "translateZ(0px)";
    nike.style.transform = "translateZ(0px) rotateZ(0deg)";
    description.style.transform = "translateZ(0px)";
    sizes.style.transform = "translateZ(0px)";
    purchase.style.transform = "translateZ(0px)";
})