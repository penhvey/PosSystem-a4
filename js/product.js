let buttonAddProduct = document.querySelector('.add_product');
let inputProduct = document.querySelector('.get_product');
let listProduct = document.querySelector('.list_of_product');
let table = document.querySelector('table');

let kindOfProduct = document.querySelector('#dropdown');
let viewProduct = document.querySelector('#view');
let typs = document.querySelector('#typ')

let addNameProduct = document.querySelector('#input_name_product');
let addQualitityProduct = document.querySelector('#qualitity');
let addPriceProduct = document.querySelector('#price');
let addCategoryProduct = document.querySelector('#Category');
let buttonAdd = document.querySelector('#add');

let editing = document.querySelector('.editProduct');

let chossimg = document.querySelector('#showimge');
let imgforchoos = document.querySelector('#ImageForAdd');


chossimg.addEventListener('mouseover',function (){
    imgforchoos.style.display='block'
    listProduct.style.display='none'
})
chossimg.addEventListener('mouseout',function (){
    imgforchoos.style.display='none'
    listProduct.style.display='block'
})



let numberImg = document.querySelector('#numberimg input');
let editNumberImage = document.querySelector('#editnumberimg');

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
  }
}

// Save data to local storage
function saveData() {
  localStorage.setItem('data', JSON.stringify(data));
}

function displayData(typsProduct) {
  editing.style.display = 'none';
  listProduct.style.width = '90%';

  let tbody = document.querySelector('tbody');
  if (tbody) {
    tbody.remove();
  }

  tbody = document.createElement('tbody');
  table.appendChild(tbody)

  let n = 0;
  if (typsProduct === 'All Categorys') {
    for (let stocks in data) {
      for (let product of data[stocks]) {
        n++
        gotListTypOfProduct(n, product, tbody)
      }
    }
  } if (typsProduct != 'All Categorys') {
    for (let stocks in data) {
      if (stocks === typsProduct) {
        for (let product of data[stocks]) {
          n++
          gotListTypOfProduct(n, product, tbody)
        }
      }
    }
  }
}

function gotListTypOfProduct(n, product, tbody) {
  let tr = document.createElement('tr');
  tbody.appendChild(tr)

  let tdId = document.createElement('td');
  tdId.textContent = '#' + n
  tr.appendChild(tdId)

  let tdname = document.createElement('td');
  tdname.textContent = product.name
  tr.appendChild(tdname)

  let tdQlt = document.createElement('td');
  tdQlt.textContent = product.qtl
  tr.appendChild(tdQlt)

  let tdPrice = document.createElement('td');
  tdPrice.textContent = product.price
  tr.appendChild(tdPrice)

  let tdAction = document.createElement('td')
  tr.appendChild(tdAction)

  let buttonDelete = document.createElement('i')
  buttonDelete.classList = 'bx bxs-trash';
  buttonDelete.style = 'font-size: 25px;color: red;'
  tdAction.appendChild(buttonDelete)

  buttonDelete.addEventListener('click', deletProduct)

  let edite = document.createElement('i')
  edite.classList = 'bx bx-edit';
  edite.style = 'font-size: 25px'
  tdAction.appendChild(edite)

  edite.addEventListener('click', getEdite)

}

function viewKindOfProduct() {
  if (kindOfProduct.value != 'All Categorys') {
    typs.textContent = kindOfProduct.value;
    displayData(kindOfProduct.value)
  } else {
    typs.textContent = 'All Categorys'
    displayData('All Categorys')
  }

}

viewProduct.addEventListener('click', viewKindOfProduct)

function deletProduct(e) {
  let proces = true
  let pDelete = e.target.parentElement.parentElement.firstElementChild.nextSibling.textContent;
  for (let stocks in data) {
    if (proces) {
      for (let i = 0; i < data[stocks].length; i++) {
        if (data[stocks][i].name === pDelete) {
          if (confirm('Do you want to delete ' + pDelete)) {
            data[stocks].splice(i, 1);
            saveData()
            if (kindOfProduct.value === 'All Categorys') {
              displayData('All Categorys');
            } else {
              displayData(stocks)
            }
            proces = false
          }
        }
      }
    }

  }
}

// Add input value to the data array
function addItem() {

  let proceses = {};

  if (addNameProduct.value != '' && addQualitityProduct.value != '' && addPriceProduct.value != '' && numberImg.value != '') {
    proceses.name = addNameProduct.value;
    proceses.qtl = addQualitityProduct.value;
    proceses.price = addPriceProduct.value;
    proceses.numberImg = numberImg.value
    if (addCategoryProduct.value === 'Drink') {
      data.Drink.push(proceses);
      saveData();
      if (kindOfProduct.value === 'All Categorys') {
        displayData('All Categorys');
      } else {
        displayData('Drink')
      }
    }
    else if (addCategoryProduct.value === 'Coffee') {
      data.Coffee.push(proceses);
      saveData();
      if (kindOfProduct.value === 'All Categorys') {
        displayData('All Categorys');
      } else {
        displayData('Coffee')
      }
    }
    else if (addCategoryProduct.value === 'Desert') {
      data.Desert.push(proceses);
      saveData();
      if (kindOfProduct.value === 'All Categorys') {
        displayData('All Categorys');
      } else {
        displayData('Desert')
      }
    }
    else {
      data.Snack.push(proceses);
      saveData();
      if (kindOfProduct.value === 'All Categorys') {
        displayData('All Categorys');
      } else {
        displayData('Snack')
      }

    }
  }

}


buttonAdd.addEventListener('click', addItem);

// Load and display data when the page loads
loadData();
displayData('All Categorys');

function getProduct() {
  inputProduct.style.display = 'block';
  listProduct.style.width = '70%';
}

let editeName = document.querySelector('#editename');
let editeQlt = document.querySelector('#editeqlt');
let editePrice = document.querySelector('#editeprice');
let editeCategory = document.querySelector('#category');
let editadd = document.querySelector('#sum');


let editCancel = document.querySelector('#can');
editCancel.addEventListener('click', function () {
  editing.style.display = 'none';
  listProduct.style.width = '90%';
})

function getEdite(e) {

  editing.style.display = 'block';
  listProduct.style.width = '70%';

  let proces = true
  let edName = e.target.parentElement.parentElement.firstElementChild.nextSibling.textContent;

  editeName.value = edName;
  editeQlt.value = e.target.parentElement.parentElement.firstElementChild.nextSibling.nextSibling.textContent;
  editePrice.value = e.target.parentElement.parentElement.firstElementChild.nextSibling.nextSibling.nextSibling.textContent;

  for (let value in data) {
    for (let i of data[value]) {
      if (edName === i.name) {
        editNumberImage.value = i.numberImg
      }
    }
  }

  for (let stocks in data) {

    for (let i = 0; i < data[stocks].length; i++) {
      if (proces) {
        if (data[stocks][i].name === edName) {
          data[stocks].splice(i, 1);
          proces = false
          editadd.addEventListener('click', function () {
            alert('do you want to edite ' + edName)
            let pro = true
            let obj = {};
            obj.name = editeName.value;
            obj.qtl = editeQlt.value;
            obj.price = editePrice.value;
            obj.numberImg = editNumberImage.value

            for (value of data[editeCategory.value]) {
              if (value.name === obj.name) {
                pro = false
              }
            }
            if (pro) {
              data[editeCategory.value].push(obj)
              saveData()
              displayData(kindOfProduct.value)
            }

          })
        }
      }
    }
  }

}


buttonAddProduct.addEventListener('click', getProduct);


let pds = document.querySelectorAll('tbody tr');
let findProcuct = document.querySelector('#search_product');

// search movie title
const searchMovieTitle = () => {
  // TODO: search movie by title
  let keyword = findProcuct.value;
  for (pd of pds) {
    if (pd.children[1].textContent.includes(keyword)) {
      pd.style.display = "table-row"
    } else {
      pd.style.display = "none"
    }
  }
}

findProcuct.addEventListener("keyup", searchMovieTitle);

// =======Dark Mode======

function myMode() {
  var dark = document.body;
  dark.classList.toggle('dark-mode');
}