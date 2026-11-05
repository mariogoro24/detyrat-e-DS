document.getElementById("firstname").value = "Mario";
document.getElementById("lastname").value = "Goro";
document.getElementById("age").value = "16";

var button1 = document.getElementById("btn");

button1.onclick = function() {
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var age = document.getElementById("age").value;

    alert("Hello " + firstname + " " + lastname + ", you are " + age + " years old!");
}