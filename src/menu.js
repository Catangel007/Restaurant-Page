
const logo = document.createElement("img");
const heading = document.createElement("h1");


const container1 = document.createElement("div");
container1.appendChild(header);
container1.appendChild(menuDiv);
container1.appendChild(div1);
container1.appendChild(div2);
container1.appendChild(div3);


// header and logo
const header = document.createElement("div");
header.appendChild(logo);
header.appendChild(heading);
logo.src = "doughnut.png";
logo.alt = "picture of a donut cartoon"
heading = "Small Chops bakery";

// menu heading
const menuDiv = document.createElement("div");
const menuHeader = document.createElement("h1");
menuDiv.appendChild(menuHeader);
menuHeader = "MENU";

// Item display
const div1 = document.createElement("div");
const divImage1 = document.createElement("img");
const nameFood1 = document.createElement("h3");
const foodPrice = document.createElement("p");
div1.appendChild(divImage1);
divImage1.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnTwh_jAMEKjt1-PIvtmpDxzEEF-N8BKu0hQ&s";
divImage1.alt = "picture of a triangle deep fried pastry with meat filling";
nameFood1 = "Samosa";
foodPrice = "$2.99";

const div2 = document.createElement("div");
const divImage2 = document.createElement("img");
const nameFood2 = document.createElement("h3");
const foodPrice2= document.createElement("p");
div2.appendChild(divImage2);
divImage1.src = "https://sisijemimah.com/wp-content/uploads/2015/11/puff-puff-3-1024x614.jpg" 
divImage1.alt = "picture of soft deep fried pastry";
nameFood1 = "Puff Puff";
foodPrice = "$1.49";

const div3 = document.createElement("div");
const divImage3 = document.createElement("img");
const nameFood3 = document.createElement("h3");
const foodPrice3 = document.createElement("p");
div3.appendChild(divImage3);
divImage1.src = "https://sisijemimah.com/wp-content/uploads/2015/08/image74.jpg";
divImage1.alt = "picture of a semi-circle baked pastry with meat filling";
nameFood1 = "Meat-pie";
foodPrice = "$6.99";


export {container1};

