
const logo = document.createElement("img");
const heading = document.createElement("h1");

// header and logo
const header = document.createElement("div");
header.appendChild(logo);
header.appendChild(heading);
logo.src = "doughnut.png";
logo.alt = "picture of a donut cartoon"
heading = "Small Chops bakery";

// menu heading
const contactDiv = document.createElement("div");
const contactHeader = document.createElement("h1");
contactDiv.appendChild(contactHeader);
contactHeader = "CONTACT US";


class contactInfo {
    constructor(name,number,email,availability){
        this.name= name;
        this.number = number;
        this.email = email;
        this.availability = availability;
    }
    populateScreen(){
    let card = document.createElement("div");
    let cardP = document.createElement("p");
    card.appendChild(cardP);
    let cardInfo = [this.name, this.number, this.email, this.availability];
    for (let item of cardInfo){
        cardP.textContent(item);
    }
    }
;}

let contact1 = new contactInfo("Chef",456-384-3849,"thisisnot@realemail.com","on site");
contact1.populateScreen();
let contact2 = new contactInfo("Chef",456-384-3849,"thisisnot@realemail.com","on site");
contact2.populateScreen();
let contact3 = new contactInfo("Sue-Chef",456-384-3849,"thisisnot@realemail.com","on site");
contact3.populateScreen();
let contact4 = new contactInfo("Manger",456-384-3849,"thisisnot@realemail.com","on site");
contact4.populateScreen();
let contact5 = new contactInfo("Waiter1",456-384-3849,"thisisnot@realemail.com","on site");
contact5.populateScreen();
let contact6 = new contactInfo("Waiter2",456-384-3849,"thisisnot@realemail.com","on site");
contact6.populateScreen();