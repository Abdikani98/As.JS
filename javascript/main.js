
function firstJsprogram(){
    console.log("Hello World");
    document.getElementById("hello").innerHTML ="Hello World";
}

function number(){
    let age = 30;    
    let price = 19.99;
    console.log(age, price)
    document.getElementById("Num1").innerHTML = `age= ${age} <br> price = ${price}`
}

function Strings(){
    let name = "Mohamed";
    let message = 'Hello, World!';
    document.getElementById("string1").innerHTML = `name= ${name} <br> message = ${message}`
}

function Boolean(){
    let isVisible = true; 
    let isLoggedIn = false;
    document.getElementById("boolean1").innerHTML = `isVisible = ${isVisible} <br> isLoggedIn = ${isLoggedIn}`
}

function Undefined(){
    let undefinedVar; 
    console.log(undefinedVar);  // Outputs: undefin
    document.getElementById("Undefined1").innerHTML = `undefineVar = ${undefinedVar}`
}

function Null(){
    let emptyValue = null;
    document.getElementById("null1").innerHTML = `emptyValie = ${emptyValue}`
}

function Variables(){
    x = 10; 
    let tiro = 19;   
     const myName = "Abdikani";  
     var fariin = "Hi Saxiib";
     document.getElementById("Variables11").innerHTML = `x= ${x} <br> tiro =${tiro} <br> myName = ${myName} <br> fariin = ${fariin}  `
     
}

function ArithmaticOperators (){
    let result = 5 + 3; 
    console.log(result) // result is 8
    document.getElementById("Arithmetic1").innerHTML = `result ${result}`
}

function ComparisonOperators(){
    let isEqual = 2 === 3; 
    console.log(isEqual) //  isEqual is false
    document.getElementById("Comparison1").innerHTML = `isEqual ${isEqual}`
}


function LogicalOperators(){
    let True = true && false;  
        console.log(True) // false <br>
        let Abdikani = true || false; 
         console.log(Abdikani) // true <br>
          let isTrue = !true;  
          console.log(isTrue) // false
          document.getElementById("logical").innerHTML = `True ${True} <br> Abdikani ${Abdikani} <br>  isTrue ${isTrue}`
}


function AssignmentOperators(){
    let count = 10; 
     count += 5;  // count is now 15
     document.getElementById("assignment").innerHTML = `count ${count}`
}


function OtherOperators(){
    let age = 20; 
    let message = age > 18 ? "Adult" : "Junior"; 
    console.log(message)  // Adult
    document.getElementById("other").innerHTML = `age ${age} <br> message ${message}`
}


function IncrementOperator(){
                let x = 5; 
                let y = x++; // y will be 5, and x will be 6 <br>
                let z = 10; 
                let i = ++x; // y will be 11, and x will be 11
                document.getElementById("Increment1").innerHTML = `x ${x} <br> y ${y} <br> z ${z} <br> i ${i}`

}


function DecrementOperator (){
                    let x = 8;
                    let z = x--; // y will be 8, and x will be 7 <br>
                    let i = 15; 
                    let  y = --x; // y will be 14, and x will be 14 
                    document.getElementById("Decrement1").innerHTML = `x ${x} <br> z ${z} <br> i ${i} <br> y ${y}`
}


function StringConcatenationimplicitconversion(){
    let age = 25; 
    let message = "I am " + age + " years old."; // Implicitly converts age to a string
    document.getElementById("string").innerHTML = `age ${age} <br> message ${message}`
}


function NumericOperationsimplicitconversion(){
    let numStr = "42"; 
    let result = numStr * 2; // Implicitly converts numStr to a number: result is 84
    document.getElementById("numeric1").innerHTML = `numStr ${numStr} <br> result ${result}`
} 


function ComparisonOperatorsimplicitconversion(){
    let num = 10; 
    let strNum = "5"; 
     console.log(num > strNum); 
     // Implicitly converts strNum to a number for comparison: true
     document.getElementById("comparison11").innerHTML = `num ${num} <br> strNum ${strNum}`
}


/*chapter*/
function example1(){
    const age = 30; 
    const message = `My age is ${age} years. <br>
     I live in Mogadishu.`;
     document.getElementById("ex1").innerHTML = `age ${age} <br> message ${message}`
}


function UsingaTemporaryVariable(){
    let a = 5; 
     let b = 10; 
    let temp = a; 
     a = b; 
     b = temp; 
   console.log("After swapping: a = `+ a +, b = ` + b");
   document.getElementById("using1").innerHTML = `a ${a} <br> b ${b} <br> temp ${temp}`
}


function UsingArithmeticOperations(){
    let a = 5; 
    let b = 10; 
    a = a + b; 
    b = a - b; 
    a = a - b; 
    console.log("After swapping: a = `+ a +, b = ` + b");
    document.getElementById("using2").innerHTML = `a ${a} <br> b ${b}`
}




function ifStatement(){
    let age = 18; 
    if (age >= 18) { 
     console.log("you are an adult."); 
     }
     document.getElementById("ifStatement1").innerHTML = `age ${age} <br>  `
}


function elseifStatement(){
    let age = 18; 
     if (age >= 18) { 
    console.log("you are an adult."); 
     } else {
   console.log("You are a minor.");
   }
   document.getElementById("elseif").innerHTML = `age ${age} <br> `
}


function TheelseifStatement(){
    let grade = 85;
    if (grade >= 90){ 
     console.log("A") 
     } else if(grade >= 80){ 
      console.log("B") 
      }else { 
      console.log("C") 
       }
       document.getElementById("the1").innerHTML = `grade= ${grade} <br>`
       
}

function ternaryoperator() {
    let age=18;
    let isAdult = age >= 18? true : false; 
    console.log(isAdult);
    document.getElementById("ternary1").innerHTML = `isAdult ${isAdult}`
}

function Switchday(){
    let day="Saturday";
    switch(day) {
        case "Saturday":
            console.log("The first day of the week");
            break;
        case "Wednesday":
            console.log("Almost the weekend");
            break;
        default:
            console.log("It's regular day!");

    }
}


function iteration(){
    for (let i = 1; i <=5; i++){ 
        console.log (i); 
        document.getElementById("4loop").innerHTML = `i ${i}`

    }
}

function whileloop(){
    let i = 1;
     while (i <= 5){ console.log(i); i++;}
     document.getElementById("whileloop").innerHTML = `i ${i}`
}

function dowhileloop(){
    let i = 1; 
     do { 
    //  console.log(i); 
    document.getElementById("dowhile").innerHTML = `i ${i}`
     i++; 
     } while(i <= 5);
     
}


function Break() {
    for (let i = 0; i < 5; i++) { 
        if (i === 3) { 
            break;
        } 
        // console.log(i);
        document.getElementById("break1").innerHTML = `i ${i}`; 
    }
}


function Continue(){

    for (let i = 0; i < 5; i ++) { 
                 
        if (i===2){
            continue;

        }

        console.log(i);
        document.getElementById("continue1").innerHTML = `i ${i}`;
    }
}


/*chapter4*/



function functionName() {
console.log("Hello, world!");
document.getElementById("Ex").innerHTML =`Hello World`;
}



function greet(Name){
console.log(`Hello, ${Name}!`);
document.getElementById("Ab").innerHTML = `Hello, ${Name}!`;

}
greet("Abdikani");


function add(a,b) {
    return a+b;
}

var globalVariable="im in global scope"
function sayhello(){
    console.log(globalVariable);
    document.getElementById("sh").innerHTML = ` ${globalVariable} `
}







// CALCULATOR PROGRAM
console.logdisplay = docoment.getElementByid("display");

function appendToDisplay(input){
    display.value+= input;
}

function clearDisplay(){
    display.value ="";
}

function calculate(){
    display.value = eval(display.value);
}



function Addition()
{
    let num1=Number(prompt("enter number: "))
    if(isNaN(num1)) {
        alert("invalid");
        return;
    }
    let num2=Number(prompt("enter number: "))
    if(isNaN(num2)) {
        alert("invalid");
        return;
    }
    let total=num1+num2;
    alert("result is :"+total)
}

function Sub()

    {
        let num1=Number(prompt("enter number: "));
        if(isNaN(num1)) {
            alert("invalid");
            return;
        }
        let num2=Number(prompt("enter number: "));
        if(isNaN(num2)) {
            alert("invalid");
            return;
        }
        let total=num1-num2;
        alert(`the subtruction: ${num1} - ${num2} = ${total} `);
    }

function div()
{
    let lacgata_dhaxalka=parseInt(Number(prompt("Enter the wolth: ")));
    if(isNaN(lacgata_dhaxalka)) {
        alert('invalid');
        return;
    }
    const caruurta=2;
    let carur1=lacgata_dhaxalka/2;
    let carur2=lacgata_dhaxalka/2;


    alert("canuga koowaad waxa u leyahy: "+carur1);
    alert("canuga labaad waxa u leyahy: "+carur2);
}


function mult()
{
    let num1=Number(prompt("enter number: "));
    if(isNaN(num1)) {
        alert("invalid");
        return;
    }
    let num2=Number(prompt("enter number: "));
    if(isNaN(num2)) {
        alert("invalid");
        return;
    }
    let mult=num1*num2;
    alert(mult);

}
  
    /*BREAK*/

function brea(){
    while(true) {
    let Name=prompt("enter your name: ");
    if(!isNaN(Name)) {
        alert("invalid");
    }
    if(Name.toLowerCase===('abdikani') || Name.toUpperCase===('ABDIKANI')) {
        break;
    }
    console.log(Name);
    
}

}
function continue1(){
    while(true) {
    let Name=prompt("enter your name: ");
    let myName='Abdikani';
    let MynameLower=myName.toLowerCase();
    let Mynameupper=myName.toUpperCase();

    if (Name===MynameLower||Name===Mynameupper) {
        continue;
    }
    console.log(Name);
    
}

}


    /*GRADE*/

    function grade(){
        let sub1 = Number(prompt("ENTER SUHJECT1; "))
        if(sub1>100 || sub1<0) {
            alert("Invalid Number!")
        } 
        let sub2 = Number(prompt("ENTER SUHJECT2: "))
        if(sub2>100 || sub1<0) {
            alert("Invalid Number!")
        }
        let sub3 = Number(prompt("ENTER SUHJECT3: "))
        if(sub3>100 || sub1<0) {
              alert("Invalid Number!")
        }
        let sub4 = Number(prompt("ENTER SUHJECT4: "))
        if(sub4>100 || sub1<0) {
            alert("Invalid Number!")
        }
        let sub5 = Number(prompt("ENTER SUHJECT5: "))
        if(sub5>100 || sub1<0) {
            alert("Invalid Number!")
        }
        let sub6 = Number(prompt("ENTER SUHJECT6: "))
        if(sub6>100 || sub1<0) {
            alert("Invalid Number!")
        }
        let total = sub1+sub2+sub3+sub4+sub5+sub6;
        let avarage=total/6;
          
        
        // alert("the avarage is: " +avarage)
    
        if (avarage>90){
            alert("you have grade A")
        }else if(avarage>=80){
            alert("you have grade B")
        }else if(avarage>=70){
            alert("you have grade c")
        }else if(avarage>=60){
            alert("you have grade d")
        }else if(avarage<50){
            alert("sorry")
        }

        alert("the total of the subjects are: " + " " + total + "\n" + " " + "\n" + avarage);
        
    
    }

    /* DO WHILE*/


function tiirarka() {

    let choice;
    do {
        console.log("Menu: 5 Pillars of Islam");
        console.log("1. Shahada (Faith)");
        console.log("2. Salah (Prayer)");
        console.log("3. Zakat (Charity)");
        console.log("4. Sawm (Fasting)");
        console.log("5. Hajj (Pilgrimage)");
        console.log("6. Exit");
        choice=Number(prompt("Choice (1-6): "));
        switch (choice) {
            case 1:
                console.log("Shahada (Faith)");
                break;
            case 2:
                console.log("Salah (Prayer)");
                break;
            case 3:
                console.log("Zakat (Charity)");
                break;
            case 4:
                console.log("Sawm (Fasting)");
                break;
            case 5:
                console.log("Hajj (Pilgrimage)");
                break;
            case 6:
                console.log("Existing the program");
            default:
                console.log("invalid choice! please try again");

        }

    }while(choice<=6);

}

function tempreture(){
    let user = Number(prompt("enter rate of temperture "))
    let calculate=(user*9/5)+32;
    alert("the number of f is:  " +calculate)

}






    

    





















































































































