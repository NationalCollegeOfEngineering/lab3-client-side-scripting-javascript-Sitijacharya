function externalJs() {
    alert('Hello from externalJs');
}
function sayHi() {
    alert("Hi " + document.getElementById("name").value);
}
function changeColorRed() {
    document.body.style.backgroundColor = "red";
}
function changeColorBlue() {
    document.body.style.backgroundColor = "blue";
}
function resetColor() {
    document.body.style.backgroundColor = "";
}
function divColor() {
    var divcolor = document.getElementsByTagName("div")[0].style.backgroundColor;
    if (divcolor == "") {
        document.getElementsByTagName("div")[0].style.backgroundColor = "yellow";
    }
    else {
        document.getElementsByTagName("div")[0].style.backgroundColor = "";
    }
}

function dynamicEventTest() {
    alert("dynamic listener");
    console.log("dynamic listener");
}
function addDynamicEventListener(){
document
    .getElementById("Dynamic")
    .addEventListener("click", dynamicEventTest, false);
}

function showHideDiv() {
    var currentStyle = document.getElementById("Div2").style.display;
    if (currentStyle == "none") {
        document.getElementById("Div2").style.display = "block";
    } else {
        document.getElementById("Div2").style.display = "none";
    }
}
function askconfirm() {
    var Result = confirm("Are you sure you want to delete?");
    if (Result == true) {
        console.log("deleted");
    }
}
function showPrompt() {
    var result = prompt("What is your name?");
    document.write("Welcome " + result);
}