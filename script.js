
var loader = document.querySelector(".loader");
setTimeout(function () {
    loader.style.top = "-100%"
}, 4000);

function calculate() {
    var income = parseFloat(document.getElementById("inc").value);
    var officeRent = parseFloat(document.getElementById("oRent").value);
    var employeeSalary = parseFloat(document.getElementById("eSlary").value);
    var houseRent = parseFloat(document.getElementById("hRent").value);
    var Others = parseFloat(document.getElementById("other").value);
    var expenditure = officeRent + employeeSalary + houseRent + Others;
    var Balance = income - expenditure;
    document.getElementById("demo").innerHTML = expenditure;
    document.getElementById("balace").innerHTML = Balance;
    if (income < 0) {
        document.getElementById("demo").innerHTML = "negetive value not accepted";
        document.getElementById("demo").style.color = "red";
        document.getElementById("balace").innerHTML = "Error";
        document.getElementById("balace").style.color = "red";
        return false;
    }
}

function mySavings() {
    var income = parseFloat(document.getElementById("inc").value);
    var officeRent = parseFloat(document.getElementById("oRent").value);
    var employeeSalary = parseFloat(document.getElementById("eSlary").value);
    var houseRent = parseFloat(document.getElementById("hRent").value);
    var Others = parseFloat(document.getElementById("other").value);
    var expenditure = officeRent + employeeSalary + houseRent + Others;
    var Balance = income - expenditure;
    var sav = parseFloat(document.getElementById("saving").value);
    var sving = (Balance * (sav / 100));
    var save = Balance - sving;
    document.getElementById("save").innerHTML = sving;
    document.getElementById("rBalance").innerHTML = save;
    if (sav < 0 &&income < 0) {
        document.getElementById("save").innerHTML = "negetive value not accepted";
        document.getElementById("save").style.color ="red";
        document.getElementById("rBalance").innerHTML = "Error";
        document.getElementById("rBalance").style.color = "red";
        return false;
    }
    

}









