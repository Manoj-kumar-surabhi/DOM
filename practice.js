// var manoj="manoj";
// var lasya = " manta";

// var name = prompt(
//     "what is your name"
// );
// var namecount = name.slice(0,10);

// var promptname = prompt("enter your name");

// var first_char = promptname.slice(0,1);
//  var upperfirst_char = first_char.toUpperCase();


// alert(
//     upperfirst_char + promptname.slice(1,promptname.length)
// );

// var firstletter = promptname.slice(0,1);
//  var upperfirstletter = firstletter.toUpperCase();

//  var remainingletters = promptname.slice(1,promptname.length);

//  var lowerremainingletters = remainingletters.toLocaleLowerCase();

//  alert(
//      upperfirstletter + lowerremainingletters
//  );

 
//  function modda(){
//     var dogage = prompt("what is your age");

//     var humanage = (dogage-2)*4+21;
//     alert(
//         humanage
//     );
//  }
//  modda();
// var a = 10;
// var b = 20;
//  function division(){

//     if ((a % 10) == 0 || (b % 10) == 0){
//         console.log ("true");

//     }
//     else{
//         console.log ("false");
//     }

//  }
// let age = 18;

// switch(true){
//     case age<18:
//     console.log("child");
//     break;
//     case  18>age>40:
//     console.log("adult");
//     break;
//     default:
//         console.log("old");
// }
// let days = 0;

// switch(days){
//      case days==0:
//          console.log("Monday");
//          break;
//     case days==1:
//          console.log("Tuesday");
//           break;
//      case days==2:
//          console.log("wedsday");
//           break;
//     case days==3:
//            console.log("Thursday");
//            break;         
//     case days==4:
//           console.log("friday");
//           break;  
//      default:
//          console.log("Friday");       
                     

// }
// var a = 9;

// for(var i = 1; i<=10; i++)
// {
//     var multiplication = a * i;
//     console.log(multiplication);
// }
// var n = 4520;
// function prav(n){

//    var a = n.tostring(0,1);

//    return a;

// }
// prav(n);

// let a = 10 ;

// switch(a){

// case 25 || 1:
//     console.log("a is equal to 25");
//     break;
// case 10:
//     console.log("a is equal to 10");
//     break;
// default:
//     console.log("a is an integer");
//     break;
// }

// switch(true){
//     case a>10:
//         console.log("a is greater than 10");
//         break;
//     case a<10:
//         console.log("a is lesser than 10");
//         break;
//     default:
//         console.log("a is equal to ten");        
//         break;
// }



// for (let m = 10; m<=20; m++ ){

//     console.log(m);
   
// }
// let i = 0;
// while(i<=10;){
//     console.log(i);
 
// }

// let n = 1;
// do{
//     console.log(n);
//    ++n;
  

// }
// while(n<10)
// var x = 10;

// function a() {
//     var y = 20
//     function b() {
//         console.log(x, y)
//     }
//     b();
// }
// a();
// function countString (arr){
//     let count = 0;
//     let tempArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//         if (typeof(element)==="string") count++;
//         // if (typeof(element)==="string") tempArr.push(element)
//     }
//     return tempArr;
// }

// const result = countString(["a", "b", "c", 1, 3, 5]);
// console.log(result);
// var N=15251555;
// const Find_Five = (N) => 
// {
 
//   let result =0;
//   var convert = Array.from(String(N), Number);
//   var arr = convert[i];
//   for(var i =0;i<=(convert.length - 1);i++){
//       arr = convert[i];
//       if(arr=5){
//           result++;
//       }
//       return result;
//   }
   
// };
// console.log(Find_Five(N));

// const Print_Table = (N) => 
// {
 
//   var product=0;
//   var display=0;
  
//   for(var i =1; i<=10;i++){
//    product=N*i;
//    display = (N + "*" + i + "=" + product) ;
//    console.log(display);
//   }
  

  
	
// };

// console.log(Print_Table(3));
// var x = 10

// function a() {
//     var x = 20
//     function b() {
//         var x = 30
//         console.log(x, 'b') //30
//     }
//     b()
//     console.log(x, 'a') //20
// }
// console.log(x, 'global') //10
// a()
// fruits = ['apple', 'banana', 'orange', 'kiwi']

// fruits.pop();
// console.log(fruits)
// console.log(fruits.pop())
// console.log(fruits)
// console.log(fruits.push('strawberry'))
// console.log(fruits.push('melon'))
// console.log(fruits)

// let fruits = ['apple', 'banana', 'orange', 'kiwi', 'melon', 'tomato', 'grapes']

// console.log(fruits.push('strawberry', 'papaya', 'pear'))
// console.log(fruits.pop())
// console.log(fruits.shift())
// console.log(fruits.unshift('jackfruit'))
// let result = fruits.slice(0, 3)
// console.log(result);
// let arr = [1, 2, 3, 4, 5, 6]

// console.log(arr.some(y => y < 2)) //
// console.log(arr.every(y => y > 6)) //
// let resultArray = arr.filter(element => element%2 !===0)

// let sum = 0;
// let array = [1,2,2,2.2,5];
// array.forEach(item )
// let salary = [100, 200, 300, 400, 500, 600]

// filter out salaries greater than 300

// double the filtered salaries

// find out the total salary
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Peter: 130
// }
// let add =0;
// for(let key in salaries){

//     add = add + salaries[key];

// }
// console.log(add);
// let menu = {
//     width: 200,
//     height: 300,
//     title: 'My menu'
// }
// for(let key in menu){
//     menu[key]= menu[key]*2;
    
// }
// console.log(menu);
// function sayhi(){
//     console.log(this);
// }
// let sayhii = () => {
//     console.log(this);
// }
// let hello = {
//     name : "modda",
//     age: 212,
//     moddagudu(){
//         console.log(this);
//     }
// }
// sayhi();
// sayhii();
// hello.moddagudu();
// let newij = {
//     func : function(){
//         console.log(this.name);
//     }

let j = {
    name : "Manoj"
}
// newij.func.call(lj);
let  manoj =  () => {
    console.log(this.name);
}
manoj.call(j);