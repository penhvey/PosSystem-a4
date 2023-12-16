function date() {
    const d = new Date();
    let day_new = d.getDate();
    document.querySelector("#day-new").innerHTML = day_new;
    const month_new = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let name = month_new[d.getMonth()];
    document.getElementById("month-new").innerHTML = name;
    let year_new = d.getFullYear();
    document.querySelector("#year-new").innerHTML = year_new;
    document.querySelector("#day-old").innerHTML = day_new - 15;
    const month_old = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let name_old = month_old[d.getMonth()];
    document.getElementById("month-old").innerHTML = name_old;
    let year_old = d.getFullYear();
    document.querySelector("#year-old").innerHTML = year_old;

}
date()
let tbody = document.getElementsByTagName("img");
let tr = document.getElementsByTagName("tr");

for (let i = 0; i <tr.length;i++){
    tr[i].children[4].addEventListener('click', deleteRow);
}

function deleteRow(e){
    if (window.confirm("Do you want to delete?")){
        e.target.closest('tr').remove();
    }
}





