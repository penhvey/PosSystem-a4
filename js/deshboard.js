let stocks = document.querySelector('.stock span');
let categorys = document.querySelector('.category span');
let income = document.querySelector('.income span');
let soldOut = document.querySelector('.soldout span');
let totalSeller = document.querySelector('.moneysold p');

let percenDrink = document.querySelector('#percenDrink');
let percenCoffee = document.querySelector('#personCoffee');
let percenDesert = document.querySelector('#personDesert');
let percenSnack = document.querySelector('#personSnack');
let bestSolded = document.querySelector('#conten_bestSeller');
let lowesSolded = document.querySelector('#conten_lowerSeller');
let replace = document.querySelector('#replace');


let data = {
  Drink: [],
  Coffee: [],
  Desert: [],
  Snack: []
};

// Load data from local storage
function loadData() {
  const storedData = localStorage.getItem('data');
  if (storedData) {
    data = JSON.parse(storedData);
    getAllProduct()
  }
}

// Save data to local storage
function saveData() {
  localStorage.setItem('data', JSON.stringify(data));
}

loadData()
// ------------------------------------------------------------------------------

// --------------------------save actio into local storage-------------------
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
    console.log(action)
    stocks_()
  }
}

// Save action to local storage
function saveaction() {
  localStorage.setItem('action', JSON.stringify(action));
}
// ---------------------------------------------------------------------------
// saveaction()
replace.addEventListener('click', function () {
  if (confirm('Do you want to replace all your DATA? (replace on after replace)')) {
    action.in_stocks = 0
    action.total_solder = 0
    action.sold_out = 0
    action.pDrink = 0
    action.pCoffee = 0
    action.pDesert = 0
    action.pSnack = 0
    action.best_solder = [];
    action.low_solder_solder = [];

    data.Drink = [];
    data.Coffee = [];
    data.Desert = [];
    data.Snack = [];

    saveaction()
    saveData()
    alert('All your DATA was cleared!')
  }
})
loadaction();



function getAllProduct() {

  let stock = 0;
  let category = 0
  let incom = 0;
  for (let stoc in data) {
    category++
    for (let product of data[stoc]) {
      stock += parseInt(product.qtl)
      incom += (parseInt(product.price.slice(product.price.lenght, -1)) * product.qtl)
    }
  }
  categorys.textContent = category
  income.textContent = incom + '$'
}
function stocks_() {
  stocks.textContent = action.in_stocks;
  soldOut.textContent = action.sold_out;
  totalSeller.textContent = action.total_solder + '$';

  percenDrink.textContent = action.pDrink + '%';

  percenCoffee.textContent = action.pCoffee + '%';
 
  percenDesert.textContent = action.pDesert + '%';

  percenSnack.textContent=action.pSnack+'%'



  if (action.pDrink<55 && action.pDrink>30){
    percenDrink.style.color='blue'
  }else if(action.pDrink>55 && action.pDrink<65 ){
    percenDrink.style.color='orange'

  }else if(action.pDrink>=65){
    percenDrink.style.color='green'

  }


  if (action.pCoffee<55 && action.pCoffee>30){
    percenCoffee.style.color='blue'
  }else if(action.pCoffee>55 && action.pCoffee<65 ){
    percenCoffee.style.color='orange'

  }else if(action.pCoffee>=65){
    percenCoffee.style.color='green'

  }
  
  if (action.pDesert<55 && action.pDesert>30){
    percenDesert.style.color='blue'
  }else if(action.pDesert>55 && action.pDesert<65 ){
    percenDesert.style.color='orange'

  }else if(action.pDesert>=65){
    percenDesert.style.color='green'

  }

  if (action.pSnack<55 && action.pSnack>30){
    percenSnack.style.color='blue'
  }else if(action.pSnack>55 && action.pSnack<65 ){
    percenSnack.style.color='orange'

  }else if(action.pSnack>=65){
    percenSnack.style.color='green'

  }

  let best_store = action.best_solder
  let arr = []

  for (let i = 0; i < best_store.length; i++) {
    for (let j = i + 1; j < best_store.length; j++) {
      if (best_store[j].sold > best_store[i].sold) {
        let temp = best_store[i];
        best_store[i] = best_store[j];
        best_store[j] = temp;
      }
    }
    arr.push(best_store[i].name);
  }

  for (let n in arr) {
    let tp = document.createElement('p')
    tp.textContent = arr[n]
    bestSolded.appendChild(tp)
  }

  for (s in data) {
    for (p of data[s]) {
      let process = true
      for (let a of arr) {
        if (p.name === a) {
          process = false
        }
      }
      if (process) {
        let lp = document.createElement('p');
        lp.textContent = p.name
        lowesSolded.appendChild(lp)
      }
    }
  }


}

