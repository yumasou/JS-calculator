"use strict";
var  input=document.querySelector(".input");//input output 
var  operator=document.querySelectorAll(".operator div"); //operator
var number=document.querySelectorAll(".number div");//input value;
var equal=document.querySelector("#result");
var clear=document.querySelector("#clear");
var resultDisplayed=false;

for(var i=0;i<number.length;i++) //handling all the number
{   
    number[i].onclick=(e)=>{    //handle the number click action
       var currentString=input.innerHTML;   //accept the pressed button value
        var lastChar=currentString[currentString.length-1]; //check the last value if operator or not
        
        if(resultDisplayed===false){
            currentString=e.target.innerHTML;
            input.innerHTML+=currentString;
        }

          else  if(resultDisplayed===true && lastChar==="+" || lastChar==="-" || lastChar==="×" || lastChar==="÷"){
            resultDisplayed=false;

            currentString=e.target.innerHTML;
            input.innerHTML+=currentString;
        }else
       //check the equal button press or not
         {  //storing the number value to input field

            input.innerHTML=e.target.innerHTML; //check number input
         }
       
    }
    
}

for(var i=0; i<operator.length;i++){ //handling all the operator
    operator[i].onclick=(e)=>{ //handle the pressed operator
       
        var currentString=input.innerHTML;   //accept the pressed button value
        var lastChar=currentString[currentString.length-1]; //check the last value if operator or not
        console.log(currentString);
        if(lastChar==="+" || lastChar==="-" || lastChar==="×" || lastChar==="÷"){ //when operator is add and press another operator
            console.log(currentString.length-1)
            currentString=currentString.substring(0,currentString.length-1)+ e.target.innerHTML; //replace with last pressed operator
            console.log(currentString);
            input.innerHTML=currentString;
        }else if(currentString.length==0){
            //do nothing
        }else
        {
             //store the operator value 
            
            input.innerHTML+=e.target.innerHTML;
        }
    }
}

equal.addEventListener("click",function () {
    

    var currentString=input.innerHTML;
    var numbers=currentString.split(/\+|\-|\×|\÷/g);
    var operators=currentString.replace(/[0-9]|\./g, "").split("");
    
    console.log(currentString);
    console.log(numbers);
    console.log(operators);
while(numbers.length!=1){
    var divide=operators.indexOf("÷");
    while(divide != -1)
    {   
        numbers.splice(divide,2,numbers[divide] / numbers[divide+1]);
        operators.splice(divide,1);
        divide=operators.indexOf("÷");
        
    }
        
      
    var multi=operators.indexOf("×");
    while(multi !=-1){
        
        numbers.splice(multi,2,numbers[multi]*numbers[multi+1]);
        operators.splice(multi,1);
        multi=operators.indexOf("×");
    }

   
    var sub=operators.indexOf("-");
    while(sub != -1){
        numbers.splice(sub,2,numbers[sub]-numbers[sub+1]);
        operators.splice(sub,1);
        sub=operators.indexOf("-");
    }
      
    var add=operators.indexOf("+");
    while(add != -1)
    {
        numbers.splice(add,2,parseFloat(numbers[add])+parseFloat(numbers[add+1]));
        operators.splice(add,1);
        add=operators.indexOf("+");
        console.log(numbers);
    }
}

    input.innerHTML=numbers[0];
    resultDisplayed=true;

});
  
clear.onclick=()=>{
    input.innerHTML="";
    resultDisplayed=false;
}
