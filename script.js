
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
    if (income < 0 || officeRent < 0 || employeeSalary <0 || houseRent < 0 || Others< 0) {
        document.getElementById("demo").innerHTML = "Negetive value is not acceptable";
        document.getElementById("demo").style.color = "red";
        document.getElementById("demo").style.fontSize = "15px";
        document.getElementById("balace").innerHTML = "Error";
        document.getElementById("balace").style.color = "red";
        document.getElementById("balace").style.fontSize = "16px"
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
    if (sav < 0 || sav>100) {
        document.getElementById("save").innerHTML = "The value is not acceptable";
        document.getElementById("save").style.color ="red";
        document.getElementById("save").style.fontSize = "15px";
        document.getElementById("rBalance").innerHTML = "Error";
        document.getElementById("rBalance").style.color = "red";
        document.getElementById("rBalance").style.fontSize = "16px";
        return false;
    }
    

}









