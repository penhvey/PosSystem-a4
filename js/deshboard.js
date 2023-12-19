let stocks=document.querySelector('.stock span');
let categorys=document.querySelector('.category span');
let income=document.querySelector('.income span');
let soldOut=document.querySelector('.soldout span');
let totalSeller=document.querySelector('.moneysold p');

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
  in_stocks:0,
  total_solder: 0,
  sold_out:0,
  best_solder:[],
  low_solder_solder:[],
};


// Load action from local storage
function loadaction() {
  const storedaction = localStorage.getItem('action');
  if (storedaction) {
    action = JSON.parse(storedaction);
    stocks_()
  }
}

// Save action to local storage
function saveaction() {
  localStorage.setItem('action', JSON.stringify(action));
}
// ---------------------------------------------------------------------------
// saveaction()

loadaction();

function getAllProduct(){
    
    let stock=0;
    let category=0
    let incom=0;
    for (let stoc in data){
        category++
        for(let product of data[stoc]){
            stock+=parseInt(product.qtl)
            incom+=(parseInt(product.price.slice(product.price.lenght,-1))*product.qtl)
        }
    }
    categorys.textContent=category
    income.textContent=incom+'$'
}
function stocks_(){
  stocks.textContent=action.in_stocks
  soldOut.textContent=action.sold_out
  totalSeller.textContent=action.total_solder+'$'
}


// =======Dark Mode======

function myMode() {
  var dark = document.body;
  dark.classList.toggle('dark-mode');
}
