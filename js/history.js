let action = {
    in_stocks: 0,
    total_solder: 0,
    sold_out: 0,
    pDrink: 0,
    pCoffee: 0,
    pDesert: 0,
    pSnack: 0,
    best_solder: [],
    low_solder_solder: [],
};


// Load action from local storage
function loadaction() {
    const storedaction = localStorage.getItem('action');
    if (storedaction) {
        action = JSON.parse(storedaction);
    }
}

// Save action to local storage
function saveaction() {
    localStorage.setItem('action', JSON.stringify(action));
}
// ---------------------------------------------------------------------------
// saveaction()
loadaction();



//........Date............ 
function date() {
    let dates = Date();
    dates = dates.slice(3, 23)
    document.querySelector("#day-new").textContent = dates

}
date();

//.......table..........
let Tbody = document.querySelector("tbody");

function listOfHistory() {

    for (let product of action.best_solder) {

        let tr = document.createElement('tr');
        Tbody.appendChild(tr)

        let tdName = document.createElement('td');
        tdName.textContent = product.name
        tr.appendChild(tdName)

        let tdQtl = document.createElement('td');
        tdQtl.textContent = product.sold
        tr.appendChild(tdQtl)

        let dates = Date();
        dates = dates.slice(3, 23)
        tdDate = document.createElement('td');
        tdDate.textContent = dates
        tr.appendChild(tdDate)

        let tdOfAction = document.createElement("td");
        let button = document.createElement("button");
        button.textContent = "Delete";
        button.style.backgroundColor = "red";
        button.style.color = 'white';
        button.style.padding = '5px 10px';
        button.style.border = 'none';
        button.style.borderRadius = '4px';

        tdOfAction.appendChild(button);
        tr.appendChild(tdOfAction)
        button.addEventListener('click', function (e) {
            e.target.parentElement.parentElement.remove()
        })
    }
}
listOfHistory()

// =======Dark Mode======

function myMode() {
    var dark = document.body;
    dark.classList.toggle('dark-mode');
}

//....button search..............
let searchInput = document.querySelector("#search");
function btnSearch() {
    if (Tbody.children[0].children[1]) {
        let nameOf_history = Tbody.children[0].children[1].textContent;
        if (nameOf_history.toUpperCase() || nameOf_history.toLocaleLowerCase()) {
            Tbody.style.display = Tbody.children[0];
            console.log(nameOf_history.toLocaleLowerCase())

        } else {
            Tbody.style.display = "none";
        }
    }
}
btnSearch();
