
import "./styles.css"; 
import {greeting} from "./greeting.js";
import {container2} from "./contact.js";
import {container1} from "./menu.js";

// more declarations
const homeBtn = document.querySelector(".home");
const menuBtn = document.querySelector(".menu");
const contactBtn = document.querySelector(".contact");

const logo = document.createElement("img");
const heading = document.createElement("h1");
const words = document.createElement("p");
const headerTime = document.createElement("h1");
const listTime = document.createElement("ul");
const listChildren = document.createElement("li");
const locationHeader = document.createElement("h1");
const locationP = document.createElement("p");




let content = document.getElementById("content");

content.style.backgroundImage = 'url("src/AdobeStock_116772438_Preview.jpeg")';


//add functionality to buttons
homeBtn.addEventListener("click", ()=>{
    content.appendChild(container);
    content.innerHTML=container;
});

menuBtn.addEventListener("click", ()=>{
    content.appendChild(container1);
    content.innerHTML=container1;
});

contactBtn.addEventListener("click", ()=>{
    content.appendChild(container2);
    content.innerHTML=container2;
});

// function updateScreen (){
//     if 
// }
// append children to parent node.
const container = document.createElement("div");
container.appendChild(header);
container.appendChild(description);
container.appendChild(time);
container.appendChild(location);

//heading and logo
const header = document.createElement("div");
header.appendChild(logo);
header.appendChild(heading);
logo.src = "doughnut.png";
logo.alt = "picture of a donut cartoon"
heading = "Small Chops bakery";

//description of page
const description = document.createElement("div");
description.appendChild(words);
words = "Over the years , Small chops has been a house old tradition. when the main course be sure to other smallchops. We have been enriching our homes or centuries with our extensive selection of many varieties of small snacks to serve as a dessert or an appetize for your meals.place your order and let's keep making you happy with Small chops!!"
  

//timetable for schedule
const time = document.createElement("div");
time.appendChild(headerTime);
time.appendChild(listTime);
time.appendChild(listChildren);
headerTime = "Hours";
listChildren =["Sunday:8am - 10pm","Monday:8am - 6pm","Tuesday:8am - 6pm","Wednesday:8am - 6pm","Thursday:8am - 6pm","Friday:8am - 6pm","Saturday:8am - 10pm"];



//location of restaurant
const location = document.createElement("div");
location.appendChild(locationHeader);
location.appendChild(locationP);
locationHeader = "Location";
locationP = "453 Ocean-view Drive, coal-shallow, Drake st";






 

