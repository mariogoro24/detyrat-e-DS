var button1 = document.getElementById("btn1");

button1.onclick = function() {
    button1.style.width = "100px";
    button1.style.height = "100px";
    button1.style.borderRadius = "50%";
};

var button2 = document.getElementById("btn2");

button2.onclick = function() {
    button2.style.width = "150px";
    button2.style.height = "100px";
    button2.style.background = "gray";
    button2.style.borderRadius = "0";
    button2.style.clipPath = "polygon(50% 0%, 0% 100%, 100% 100%)";
   
    button2.style.alignItems = "center";
    button2.style.justifyContent = "center";
    button2.style.color = "white";
    button2.style.textAlign = "center";
};

var button3 = document.getElementById("btn3");

button3.onclick = function() {
    button3.style.width = "100px";
    button3.style.height = "100px";
    button3.style.backgroundColor = "gray";
    button3.style.borderRadius = "0";
    button3.style.textAlign = "center";
    button3.style.color = "white";
    
}