console.log("i like pizza!");

window.alert("i really love it")
let firstName = "bro"


let students = 21/4;
console.log(students)
document.getElementById("p1").innerHTML ="hello" + firstName;

//accepting user input, window prompt
let username = window.prompt("whats your name?");
console.log(username);

//using 
// document.getElementById("mybutton").onclick = function(){
//     myName = document.getElementById("myText").value;
//     console.log(myName)
// }

//type conversion

// every input is automatically a string, you have to convert to a number or any other variable type?
// math.functions

//our first counter program
let count = 0;
document.getElementById("decreasebtn").onclick = function(){
    count -= 1;
    document.getElementById("counter").innerHTML = count;
    console.log(count)
}
document.getElementById("resetbtn").onclick = function(){
    count = 0;
    document.getElementById("counter").innerHTML = count;
    console.log(count)
}
document.getElementById("increasebtn").onclick = function(){
    count += 1;
    document.getElementById("counter").innerHTML = count;
    console.log(count)
}

// random number generator
let x,y;

document.getElementById("rollbtn").onclick = function(){
    x = Math.floor(Math.random()* 6)
    document.getElementById("xlabel").innerHTML = x;
    console.log(x)
}
document.getElementById("rollbtn").onclick = function(){
    y = Math.floor(Math.random()* 6)
    document.getElementById("ylabel").innerHTML = x;
    console.log(y)}