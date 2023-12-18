//........Date............ 
function date() {
    const d = new Date();
    let day_new = d.getDate();
    document.querySelector("#day-new").innerHTML = day_new;
    const month_new = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let name = month_new[d.getMonth()];
    document.getElementById("month-new").innerHTML = name;
    let year_new = d.getFullYear();
    document.querySelector("#year-new").innerHTML = year_new;
    document.querySelector("#day-old").innerHTML = 1 - day_new + day_new;
    const month_old = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let name_old = month_old[d.getMonth()];
    document.getElementById("month-old").innerHTML = name_old;
    let year_old = d.getFullYear();
    document.querySelector("#year-old").innerHTML = year_old;

}
date()

//.......table..........
let Tbody = document.querySelector("#tbody");

let trOftbody = document.createElement("tr");
trOftbody.style.padding = "10px";
let tdOfId = document.createElement("td");
tdOfId.textContent = "#12";
trOftbody.appendChild(tdOfId);

let tdOfName = document.createElement("td");
tdOfName.textContent = "Sovannarith";
trOftbody.appendChild(tdOfName);

let tdOfDate = document.createElement("td");
tdOfDate.textContent = "12 / Dec / 2023";
trOftbody.appendChild(tdOfDate);

let tdOfTotal = document.createElement("td");
tdOfTotal.textContent = "100$";
trOftbody.appendChild(tdOfTotal);

let tdOfAction = document.createElement("td");
let button = document.createElement("button");
button.textContent = "Delete";
button.style.backgroundColor = "red";
button.style.color = 'white';
button.style.padding = '5px 10px';
button.style.border = 'none';
button.style.borderRadius = '4px';
tdOfAction.appendChild(button);
trOftbody.appendChild(tdOfAction);
Tbody.appendChild(trOftbody)

//.........Dalete button........

for (let i = 0; i < Tbody.children.length; i++) {
    Tbody.children[0].children[4].addEventListener('click', deleteRow);
    
}

function deleteRow(e) {
    if (window.confirm("Do you want to delete?")) {
        Tbody.children[0].remove()
    }
}






