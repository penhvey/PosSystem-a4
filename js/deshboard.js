let stocks=document.querySelector('.stock span');
let categorys=document.querySelector('.category span');
let income=document.querySelector('.income span');

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
      console.log(data)
      getAllProduct()
    }
  }
  
  // Save data to local storage
  function saveData() {
    localStorage.setItem('data', JSON.stringify(data));
  }
  
  loadData()


function getAllProduct(){
    let stock=0;
    let category=0
    let incom=0;
    for (let stoc in data){
        category++
        for(let product of data[stoc]){
            stock+=parseInt(product.qtl)
            incom+=parseInt(product.price.slice(product.price.lenght,-1))
        }
    }

    stocks.textContent=stock
    categorys.textContent=category
    income.textContent=incom+'$'
}
