var b = require('bonescript');

var leds = ["P9_11","P9_13","P9_15","P9_17"];
var button = ["P9_12","P9_14","P9_16","P9_18"];

for(var i in leds) {
    b.pinMode(leds[i], b.OUTPUT);
}
for(var i in button) {
    b.pinMode(button[i], b.INPUT);
}
setInterval(check,100);
setInterval(check1,100);
setInterval(check2,100);
setInterval(check3,100);
function check(){
b.digitalRead('P9_12', checkButton);
}
function check1(){
b.digitalRead('P9_14', checkButton1);
}
function check2(){
b.digitalRead('P9_16', checkButton2);
}
function check3(){
b.digitalRead('P9_18', checkButton3);
}
function checkButton(x) {
  if(x.value == 1){
   
     b.digitalWrite('P9_11', b.HIGH);
     //delay(500);
      //b.digitalWrite('P9_11', b.LOW);
   
  }
  else{
    b.digitalWrite('P9_11', b.LOW);
  }
}
function checkButton1(x) {
  if(x.value == 1){
  
     b.digitalWrite('P9_13', b.HIGH);
     //delay(500);
    
  }
  else{
    b.digitalWrite('P9_13', b.LOW);
  }
}
function checkButton2(x) {
  if(x.value == 1){
   
     b.digitalWrite('P9_15', b.HIGH);
     //delay(500);
      //b.digitalWrite('P9_15', b.LOW);
  
  }
  else{
    b.digitalWrite('P9_15', b.LOW);
  }
}
function checkButton3(x) {
  if(x.value == 1){
   
     b.digitalWrite('P9_17', b.HIGH);
    // delay(500);
    
  }
  else{
    b.digitalWrite('P9_17', b.LOW);
  }
}
