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
//...........table delete......
let tbody = document.getElementsByTagName("img");
let tr = document.getElementsByTagName("tr");

for (let i = 0; i < tr.length; i++) {
    tr[i].children[4].addEventListener('click', deleteRow);
}

function deleteRow(e) {
    if (window.confirm("Do you want to delete?")) {
        e.target.closest('tr').remove();
    }
}
//---------button search---------
let searcher = document.querySelector("#icon-search");
const searchMovieTitle = () => {
    for (let i = 1; i < tr.length; i++) {
        let tr1 = tr[i].firstElementChild.nextElementSibling;
        if (tr1.textContent.toLocaleLowerCase().includes(searchText.value.toLocaleLowerCase())) {
            tr1.parentElement.style.display = 'table-row';
        } else {
            tr1.parentElement.style.display = 'none';
        }
    }
}
const searchText = document.querySelector('#search');
searchText.addEventListener('keyup', searchMovieTitle);
//.......table..........
let Tbody = document.querySelector("tbody");
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
Tbody.append(trOftbody)








