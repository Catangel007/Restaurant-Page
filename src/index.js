
import "./styles.css"; 
import {greeting} from "./greeting.js";


// more declarations
const logo = document.createElement("img");
const heading = document.createElement("h1");
const words = document.createElement("p");
const headerTime = document.createElement("h1");
const listTime = document.createElement("ul");
const listChildren = document.createElement("li");
const locationHeader = document.createElement("h1");
const locationP = document.createElement("p");

// append children to parent node.
const container = document.createElement("div");
container.appendChild("header");
container.appendChild("description");
container.appendChild("time");
container.appendChild("location");

//heading and logo
const header = document.createElement("div");
header.appendChild("logo");
header.appendChild("heading")
logo.setAttribute("src","");

//description of page
const description = document.createElement("div");
description.appendChild(words);

//timetable for schedule
const time = document.createElement("div");
time.appendChild("headerTime");
time.appendChild("listTime");
time.appendChild("listChildren");

//location of restaurant
const location = document.createElement("div");
location.appendChild("locationHeader");
location.appendChild("locationP");






 

