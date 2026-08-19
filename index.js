//   const passwordInput = document.getElementById("mypassword");
//   const toggleButton = document.getElementById("togglePassword");

//   toggleButton.addEventListener("click", () => {
//     const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
//     passwordInput.setAttribute("type", type);
    
//     // Optional: change the icon depending on state
//     toggleButton.textContent = type === "password" ? "👁️" : "🙈";
//   });


// const mycheckbox = document.getElementById("mycheckbox") ;
// const visabtn = document.getElementById("visabtn") ;
// const mastercardbtn = document.getElementById("mastercardbtn") ;
// const paypalbtn = document.getElementById("paypalbtn") ;
// const subresult = document.getElementById("subresult") ;
// const paymentresult = document.getElementById("paymentresult") ;
// const mysubmit = document.getElementById("mysubmit") ;

// mysubmit.onclick = function() {
//     if(mycheckbox.checked){
//         subresult.textContent = "You are suscribed!"
//         if(visabtn.checked){
//         paymentresult.textContent = "Visa is your Payment Gateway!"
//         }
//         else if(mastercardbtn.checked){
//         paymentresult.textContent = "Mastercard is your Payment Gateway!"
//         }
//         else if(paypalbtn.checked){
//         paymentresult.textContent = "Paypalbtn is your Payment Gateway!"
//         }
//         else {
//         paymentresult.textContent = "Payment Gateway not selected"
//         }
//     }
//     else{
//         subresult.textContent = "You are not suscribed"
//         paymentresult.textContent = ""
//     }

// } 




// let username = "Nishant Meesari" ;
// let firstName ;
// firstName = username.slice(0, 7);
// let lastName = username.slice(8, 15);

// console.log(firstName,lastName);

// console.log(username.lastIndexOf("n"));
// username = username.trim();  removes white spaces
// console.log(username.length);
// console.log(username);
// console.log(username.indexOf("n"));
// console.log(username.toUpperCase()) ;
// console.log(username.repeat(2)) ;
// startWith or endWith , replace ;

// const email = "nishant@gmail.com";

// console.log("user:" ,email.slice(0, email.indexOf("@")));
// console.log("extension:", email.slice(email.indexOf("@")));


// let username = window.prompt("Enter your username");

// username = username.trim();
// let letter = username.charAt(0);
// letter = letter.toUpperCase();

// let extrachars = username.slice(1);
// extrachars = extrachars.toLowerCase();

// username = letter + extrachars ;
// console.log(username);

// --- method chaining ---

// username = username.trim().charAt(0).toUpperCase()+ username.trim().slice(1).toLowerCase();
// console.log("hello", username);


// let username ;
// do{
//     username = window.prompt("Enter your username");
// }while(username === "" || username === null)
// console.log("Hello, $(username));

// let loggoedin = false;
// let username ;
// let password ;

// while(!loggedin){
//     username = window.prompt("Enter username:");
    
// }

// Nuber guessing game ;

// const min = 1;
// const max = 100;

// const answer = Math.floor(Math.random()*(max - min + 1) + min) ;

// let atempts = 0 ;
// let guess ;
// let running = true ;

// while(running){

//   guess = window.prompt(`Enter a number between ${min} - ${max} `)
//   guess = Number(guess);
  
//   // console.log(typeof guess , guess);
  
//   if(isNaN(guess)){
//     window.alert(`Enter a valid number`);
//   }
//   else if(guess < min || guess > max){
//     window.alert(`Enter a valid number`);
//   }
//   else{
//     atempts ++ ;
//     if(guess < answer){
//       window.alert(`Higher`);
//     }
//     else if(guess > answer){
//       window.alert(`Lower`);
//     }
//     else{
//       window.alert(`Correct! you took ${atempts} atempts`);
//       running = false ;
//     }
//   }

// }

// temperature conversion
// const textbox = document.getElementById("textbox") ;
// const tofahrenheit = document.getElementById("tofahrenheit");
// const tocelcius = document.getElementById("tocelcius");
// const result = document.getElementById("result"); 

// let temp;


// function convert(){

//     temp = textbox.value;
//     temp = Number(temp);

//     if(tofahrenheit.checked){
//         temp = (temp * 1.8) + 32
//         result.textContent  = temp.toFixed(1) + "°F";
//     }
//     else if(tocelcius.checked){
//         temp = (temp - 32) / 1.8 ;
//         result.textContent = temp.toFixed(1) + "°C";
//     }
//     else{
//         result.textContent = "Select a unit";
//     }
    
// }

// let fruits = ["apple", "banana"];
// let vegetables = ["pumpkin", "Brinjal"];
// // for(let value of fruits){
// //     console.log(value);
// // }
// console.log(fruits.join(", "))
// console.log("food :",[...fruits,...vegetables,"eggs", "milk"].join(", "));


// dice roller 
// function rolldice(){

// const numofdice = document.getElementById("numofdice").value;
// const diceresult = document.getElementById("diceresult");
// const diceimages = document.getElementById("diceimages");
// const images =[];
// const values =[];

// for(let i = 1; i <=numofdice; i++){
//     const value = Math.floor(Math.random()*6) +1 ;
//     images.push(`<img src="dice_images/IMG_${value}.png">`)
//     values.push(value);

// }
// diceresult.textContent= values.join(", ") ;
// diceimages.innerHTML = images.join(" ");

// }



// Random password generator

// function generatepass(length, includelowerCase, includeupperCase, includesymbols, includenumberchars) {

//     const lowercase = "abcdefghijklmnopqrstuvwxyz";
//     const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     const numbers = "0123456789";
//     const symbols = "!@#$&*_-"

//     let allowedchars = "";
//     let password = "";

//     allowedchars += includelowerCase ? lowercase : "";
//     allowedchars += includeupperCase ? uppercase : "";
//     allowedchars += includesymbols ? symbols : "";
//     allowedchars += includenumberchars ? numbers : "";


//     if(length <= 0){
//         window.alert(`Enter a valid password length!`);
//     }
//     else if(allowedchars.length === 0){
//         window.alert(`Atleast one need to be selected!`);
//     }

//     for(let i = 0; i < length; i++ ){
//         let randomindex = Math.floor(Math.random()*allowedchars.length);
//         password += allowedchars[randomindex];
//     }

//     return password;

    
// }

// passwordlength = 15 ;
// includelowerCase = false ;
// includeupperCase = false ;
// includesymbols = false ;
// includenumberchars = false ;


// let pass = generatepass(passwordlength, 
//                         includelowerCase,
//                         includeupperCase,
//                         includesymbols,
//                         includenumberchars
// ) ;

// console.log(pass);




//call back ;

// sum(displayresult, 7, 5);

// function sum(callback, x, y){
//     let result = x + y ;
//     callback (result);
   
// }

// function displayresult(result){
//     console.log(result);
// }


//foreach()

// let numbers =[1, 2, 3, 4];

// function tripel(lement, index, array){functionss};
// numbers.foreach(triple);

// function double(element, index, array){
//     array[index] = 2* element;
// }

// function display(element){
//     console.log(element);
// }
// numbers.forEach(double);
// numbers.forEach(display);


// let dates = ["26-04-2007", "6-5-2005"];
// const cdates = dates.map(correcteddates);

// console.log(cdates);
// function correcteddates(element){
//     let temp = element.split("-");
//     return `${temp[1]}/${temp[2]}/${temp[0]}` ;
// }

// foreach -> callback and it modifies the elements
// map -> it modifier but creates new array
// reduce - reduces to one (callbcak)
// filter - filters (callback) creates new array but doesnt change a elemts value;
//arrow functions - it is function expression but without write function (argument) =>{}

// const numbers = [1, 2, 3, 4, 5];

// const squareroots = numbers.map(function (element){
//     return Math.sqrt(element).toFixed(2);
// }) ;

//  console.log(squareroots);
//yo what is up my gang 
//bye
//again hello
//


// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test





