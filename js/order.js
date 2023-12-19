let drinksGrop = document.querySelector('#drinks')
let coffeesGroup = document.querySelector('#coffees')
let desertsGroup = document.querySelector('#deserts')
let snacksGroup = document.querySelector('#snacks')

let stock_img = {
    0: '../Photos/Drinks/EchoTea.png',
    1: '../Photos/Drinks/gongcha.png',
    2: '../Photos/Drinks/Greentea.png',
    3: '../Photos/Drinks/icetea2.png',
    4: '../Photos/Drinks/mango.png',
    5: '../Photos/Drinks/Milktea.png',
    6: '../Photos/snacks/beast.png',
    7: '../Photos/snacks/beast1.png',
    8: '../Photos/snacks/beast2.png',
    9: '../Photos/snacks/beast3.png',
    10: '../Photos/snacks/beast4.png',
    11: '../Photos/snacks/beast5.png',
    12: '../Photos/Desert/Cake ice.png',
    13: '../Photos/Desert/Calola.png',
    14: '../Photos/Desert/cherry.png',
    15: '../Photos/Desert/desert1.png',
    16: '../Photos/Desert/royally.png',
    17: '../Photos/Desert/straIce.png',
    18: '../Photos/coffee/coffee1.png',
    19: '../Photos/coffee/coffee2.png',
    20: '../Photos/coffee/coffee3.png',
    21: '../Photos/coffee/coffee4.png',
    22: '../Photos/coffee/coffee5.png',
    23: '../Photos/coffee/coffee6.png',
}

let id_size = {
    0: '50',
    1: '80',
    2: '80',
    3: '80',
    4: '50',
    5: '80',
    6: '65',
    7: '65',
    8: '65',
    9: '80',
    10: '85',
    11: '85',
    12: '60',
    13: '60',
    14: '35',
    15: '35',
    16: '40',
    17: '80',
    18: '80',
    19: '80',
    20: '55',
    21: '55',
    22: '60',
    23: '70',
}
// --------------------------------save data into local storage-----------------------------------------------
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
loadData()
// ----------------------------------------------------------------------


// --------------------------save actio into local storage-------------------
let action = {
    in_stocks: 0,
    total_solder: 0,
    sold_out: 0,
    persontage_Drink: 0,
    persontage_Coffee: 0,
    persontage_Desert: 0,
    persontage_Snack: 0,
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

loadaction();
let pQ = 0;
for (st in data) {
    if (data[st] != []) {
        for (p of data[st]) {
            pQ += parseInt(p.qtl)
        }
    }
}

if (pQ > 0) {
    action.in_stocks = pQ
    saveaction()
}

function addCard() {
    for (stocks in data) {
        if (data[stocks].length > 0) {
            for (product of data[stocks]) {
                createCard(stocks, product)
            }
        }
    }
}
addCard()

function createCard(stock, product) {
    let card = document.createElement('div');
    card.classList = 'card';

    if (stock === 'Drink') {
        drinksGrop.appendChild(card)
    }
    else if (stock === 'Coffee') {
        coffeesGroup.appendChild(card)
    }
    else if (stock === 'Desert') {
        desertsGroup.appendChild(card)
    } else {
        snacksGroup.appendChild(card)
    }

    let cardimg = document.createElement('div');
    cardimg.classList = 'cardimg';
    card.appendChild(cardimg)

    let idimg = parseInt(product.numberImg)

    let image = document.createElement('img');
    image.src = stock_img[idimg];
    image.width = id_size[idimg];
    cardimg.appendChild(image)

    let cardTitle = document.createElement('div');
    cardTitle.classList = 'cardtitle';
    card.appendChild(cardTitle);

    let cardName = document.createElement('div');
    cardName.classList = 'name';
    cardTitle.appendChild(cardName);

    let h6Name = document.createElement('h6');
    h6Name.textContent = 'Name: ';
    cardName.appendChild(h6Name);

    let spanName = document.createElement('span');
    spanName.textContent = product.name;
    cardName.appendChild(spanName);

    let cardQtl = document.createElement('div');
    cardQtl.classList = 'qtl';
    cardTitle.appendChild(cardQtl);

    let h6Qtl = document.createElement('h6');
    h6Qtl.textContent = 'In stoct: ';
    cardQtl.appendChild(h6Qtl);

    let spanQtl = document.createElement('span');
    spanQtl.id = 'qt' + product.name
    spanQtl.textContent = product.qtl;
    cardQtl.appendChild(spanQtl);

    let cardPrice = document.createElement('div');
    cardPrice.classList = 'price';
    cardTitle.appendChild(cardPrice);

    let h6Price = document.createElement('h6');
    h6Price.textContent = 'Price: ';
    cardPrice.appendChild(h6Price);

    let spanPrice = document.createElement('span');
    spanPrice.textContent = product.price
    cardPrice.appendChild(spanPrice);

    let buttonBuy = document.createElement('button');
    buttonBuy.type = 'submit';
    buttonBuy.id = 'buttonBuyToOrder';
    buttonBuy.textContent = 'Buy';
    cardPrice.appendChild(buttonBuy);
    buttonBuy.addEventListener('click', createCardOrder)

}

let order = document.querySelector('#order');
let numberProductOrder = 0;
let pQtl = [];


order.addEventListener('click', function () {
    action.in_stocks -= numberProductOrder
    action.sold_out += numberProductOrder
    action.total_solder += processTotal
    saveaction()
    saveData()
    let unOrder = document.querySelectorAll('#unorder')
    for (i of unOrder) {
        i.remove()
    }


    for (value of arr) {
        let prc = 0;
        for (s in data) {
            for (p of data[s]) {
                if (p.name === value.name) {
                    for (v of data[s]) {
                        prc += v.qtl
                    }
                }
            }
        }

    }

    arr = []
    numberProductOrder = 0
    processTotal = 0
    totalOrder.textContent = '0$'

})


let listCardOrder = document.querySelector('#h')
let cancelOrder = document.querySelector('#cancelorder');
let totalOrder = document.querySelector('#totalOrder');
let processTotal = 0;

let arr = [];
cancelOrder.addEventListener('click', function () {
    let unOrder = document.querySelectorAll('#unorder')
    for (i of unOrder) {
        i.remove()
    }
    for (p of arr) {
        document.querySelector('#qt' + p.name).textContent = parseInt(p.qtl)
    }
    arr = [];

    processTotal = 0;
    totalOrder.textContent = '0$'
    numberProductOrder = 0
})

function createCardOrder(e) {
    let obj = {};
    let process = e.target.parentElement.parentElement

    obj.name = process.firstElementChild.lastElementChild.textContent
    obj.qtl = parseInt(process.firstElementChild.nextSibling.lastElementChild.textContent)

    let prices = e.target.parentElement.firstElementChild.nextSibling.textContent
    let price = parseInt(prices.slice(process.length, -1))
    obj.price = price

    let in_stock = true

    for (stock of arr) {
        if (stock.name === obj.name) {
            in_stock = false
            alert(stock.name + ' is Already add to Buying!')
        }
    }

    if (obj.qtl === 0) {
        in_stock = false
        alert(obj.name + ' is out of stock!')
    }


    if (in_stock) {

        for (v in data) {
            for (i of data[v]) {
                if (i.name === obj.name) {
                    i.qtl -= 1
                }
            }
        }

        arr.push(obj);
        let cardProduct = document.querySelector('#qt' + obj.name)
        cardProduct.textContent = parseInt(cardProduct.textContent) - 1

        processTotal += parseInt(obj.price)
        totalOrder.textContent = processTotal + '$'

        numberProductOrder += 1

        let cardOrder = document.createElement('div');
        cardOrder.id = 'unorder'
        cardOrder.classList = 'cardorder';
        listCardOrder.appendChild(cardOrder);

        let orderName = document.createElement('span');
        orderName.id = 'nameorder';
        orderName.textContent = obj.name;
        cardOrder.appendChild(orderName);

        let orderPrice = document.createElement('span');
        orderPrice.id = 'orderprice';
        orderPrice.textContent = 'Price: ' + obj.price + '$'
        cardOrder.appendChild(orderPrice)

        let minusQtl = document.createElement('i');
        minusQtl.classList = 'bx bxs-minus-circle';
        cardOrder.appendChild(minusQtl);

        minusQtl.addEventListener('click', function (e) {
            let getQtl = {};
            let minusQtlProduct = e.target.parentElement.firstElementChild.textContent
            let minusPrice = e.target.parentElement.firstElementChild.nextSibling.textContent

            minusPrice = parseInt(minusPrice.slice(7, -1));

            let cardProduct = document.querySelector('#qt' + minusQtlProduct)
            let orderQtl = e.target.parentElement.children[3]

            if (parseInt(orderQtl.textContent) > 1) {

                numberProductOrder -= parseInt(orderQtl.textContent)
                processTotal -= (parseInt(orderQtl.textContent * minusPrice))
                orderQtl.textContent = parseInt(e.target.parentElement.children[3].textContent) - 1

                cardProduct.textContent = parseInt(cardProduct.textContent) + 1
                processTotal += (parseInt(orderQtl.textContent) * parseInt(minusPrice))
                totalOrder.textContent = processTotal + '$';

                numberProductOrder += parseInt(orderQtl.textContent);
                for (s in data) {
                    for (d of data[s]) {
                        if (d.name === addOtlProduct) {
                            d.qtl = parseInt(cardProduct.textContent)
                        }
                    }
                }

            } else {
                alert(minusQtlProduct + ' was removed!')
                e.target.parentElement.remove()
                for (v in data) {
                    for (i of data[v]) {
                        if (i.name === minusQtlProduct) {
                            cardProduct.textContent = i.qtl
                            i.qtl = parseInt(cardProduct.textContent)
                        }
                    }
                }
                processTotal -= (parseInt(orderQtl.textContent * minusPrice))
                totalOrder.textContent = processTotal + '$'
                numberProductOrder -= parseInt(orderQtl.textContent)
                arr = []
            }
        })

        let orderQtl = document.createElement('span');
        orderQtl.id = 'orderqtl';
        orderQtl.textContent = 1
        cardOrder.appendChild(orderQtl)

        let addQtl = document.createElement('i');
        addQtl.classList = 'bx bxs-plus-circle';
        cardOrder.appendChild(addQtl)

        addQtl.addEventListener('click', function (e) {
            let addOtlProduct = e.target.parentElement.firstElementChild.textContent
            let cardProduct = document.querySelector('#qt' + addOtlProduct)
            let orderQtl = e.target.parentElement.children[3]

            let minusPrice = e.target.parentElement.firstElementChild.nextSibling.textContent
            minusPrice = parseInt(minusPrice.slice(7, -1));

            if (parseInt(cardProduct.textContent) >= 1) {
                numberProductOrder -= parseInt(orderQtl.textContent)
                processTotal -= (parseInt(minusPrice) * parseInt(orderQtl.textContent))
                orderQtl.textContent = parseInt(e.target.parentElement.children[3].textContent) + 1
                cardProduct.textContent = parseInt(cardProduct.textContent) - 1

                processTotal += (parseInt(minusPrice) * parseInt(orderQtl.textContent))
                totalOrder.textContent = processTotal + '$'
                numberProductOrder += parseInt(orderQtl.textContent)

                for (s in data) {
                    for (d of data[s]) {
                        if (d.name === addOtlProduct) {
                            d.qtl = parseInt(cardProduct.textContent)
                        }
                    }
                }

            } else {
                alert(addOtlProduct + ' out of stoct!')
            }
        })
    }

}
