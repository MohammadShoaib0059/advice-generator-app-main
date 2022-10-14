
"use strict";

var count = 0;
function startClick(){
   count ++;
   document.getElementById("btn").style.boxShadow ="1px 2px 22px 0px hsl(150, 100%, 66%)";
   fetch(`https://api.adviceslip.com/advice/${count}`)
   .then(function(response){
       return response.json();
   })
   .then(function(data){
      document.querySelector("h5").innerHTML =`ADVICE# ${data.slip.id}`;
      document.querySelector("p").innerHTML = data.slip.advice;
      if("max-width = 375px"){
         document.getElementById("pause").innerHTML = `<img src="../images/pattern-divider-desktop.svg" width="420px">`;
      }
      if("min-width = 375px"){
         document.getElementById("pause").innerHTML = `<img src="../images/pattern-divider-mobile.svg" width="280px">`;
      }
   })
}
