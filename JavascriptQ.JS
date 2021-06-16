<!DOCTYPE html>
<html lang="en">


<head>
 <meta name="description" content="Webpage description goes here" />
 <meta>meta charset="utf-8"</meta>
 <title>Change_me</title>
 <meta>name="viewport" content="width=device-width, initial-scale=1"</meta>
 <meta name="author" content="">
 <link rel="stylesheet" href="css/style.css">
 <script src="http://code.jquery.com/jquery-latest.min.js"></script>
</head>


<body>
 
<div class="container">
 
</div>
<section>

var person=prompt("Class")
if (person !=null){
  document.getElementById("welcome").innerHTML="Class"
}
var x=document.getElementById("INPUT")
X.setAttributes("type",Class);

var person=prompt("Date")
if (person !=null){
  document.getElementById("welcome").innerHTML="Date"
}
var x=document.getElementById("INPUT")
X.setAttributes("type",Date);


var person=prompt("Subject")
if (person !=null){
  document.getElementById("welcome").innerHTML="Subject"
}
var x=document.getElementById("INPUT")
X.setAttributes("type",Subject);




</section>


<script>
</script>


</body>
</html>


{/* /* Question2-implementing call back */
// call backs functions are functions passed inside other functions to be executed later
// first a function is created which is the main function then it is called.Afterwards
// a call back function is created in which the aruments are passed after console.log

// Here the parameters are passed into the function of which it will print out a 
// sentence stating "Hi my name is Daisi"
function sayhi(name, callback) {
  console.log('Hi' + ' ' + name);
  callback();
}


fuunction sentence() {
  console.log('My name is Daisi');
}

greet('Daisi', sentence);



// call backs also have set time out where events can take time to be executed 
// in that one event has to take place for the other to be executed according to
// the settime.For instance below is a program of activities carried out by a student
// in the morning before going to class.
function wakeup(){
  console.log("make your bed ")
}
setTimeout(wakeup,3000);


console.log("when you wake up");

setTimeout(wakeup,3000);
console.log("make your bed");

setTimeout(wakeup,3000);
console.log("Brush your teeth")

setTimeout(wakeup,3000);
console.log("Shower");

setTimeout(wakeup,3000);
console.log("Take breakfast")

setTimeout(wakeup,3000);
console.log("Go to class");

// Question3-what will the code below output in the console and why?
var lisaLab = {
  name: "bar",
  func: function() {
      var self = this;
      console.log("outer func:  this.name = " + this.name);
      console.log("outer func:  self.name = " + self.name);
      (function() {
          console.log("inner func:  this.name = " + this.name);
          console.log("inner func:  self.name = " + self.name);
      }());
  }
};
lisaLab.func();

// This is nested scope and it has  inner and outer functions
// the code will return the variables within the scope of the outer function.
// The inner scope returns the entire body of the inner function.This is because 
// outer function fishes out execution and all the variables within the scope
// of outer function will no longer exist.


// question4-how has this identifier been used?
var lisaLab = {
  name: "bar",
  func: function() {
      var self = this;
      console.log("outer func:  this.name = " + this.name);
      console.log("outer func:  self.name = " + self.name);
      (function() {
          console.log("inner func:  this.name = " + this.name);
          console.log("inner func:  self.name = " + self.name);
      }());
  }
};
lisaLab.func();

In the above code this is a keyword and it has been used to refer to the owner of the obeject
It has been used to refer to the global object it belongs to which is the name.

