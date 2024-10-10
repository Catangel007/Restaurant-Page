
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

// contact constructors
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

let contact2 = new contactInfo("Chef",456-384-3849,"thisisnot@realemail.com","on site");

let contact3 = new contactInfo("Sue-Chef",456-384-3849,"thisisnot@realemail.com","on site");

let contact4 = new contactInfo("Manger",456-384-3849,"thisisnot@realemail.com","on site");


let contact5 = new contactInfo("Waiter1",456-384-3849,"thisisnot@realemail.com","on site");


let contact6 = new contactInfo("Waiter2",456-384-3849,"thisisnot@realemail.com","on site");

const container2 = document.createElement("div");
container2.appendChild(header);
container2.appendChild(contactDiv);
container2.appendChild(contact1.populateScreen());
container2.appendChild(contact2.populateScreen());
container2.appendChild(contact3.populateScreen());
container2.appendChild(contact4.populateScreen());
container2.appendChild(contact5.populateScreen());
container2.appendChild(contact6.populateScreen());


export {container2};