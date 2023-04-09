// //CONSOLE log can print something on console
// console.log("helloG");
// var firstname = 'mohit';
// var i="mohitg";
// console.log(firstname);
// console.log(i);
// firstName = "harshit";
// console.log(firstName);
// // We can see that we can declare variable even without writing var.this can create problems.so to avoid this we can use "use strict"

// //now it is compulsory to write var
// var value1 = 2;
// console.log(value1 ** 3);
// // js has ** operator as its ^ operator
// // you can use only _ and dollar character in variable names
// //_i(valid)
// //$firstname(valid)
// // can not use spaces in variable names
// //if we declare variable two times using var,then no error but if we use let in place of var then error
// let value2=7;
// // declare constants
// const pi= 3.14;
// console.log(pi+ 3**4);
// let name= "harshit"
// // h a r s h i t
// // 0 1 2 3 4 5 6 
// console.log(name[3]);
// //printing length of string(it includes spaces as well)
// console.log(name.length);
// //finding last entry
// console.log(name[name.length-1]);
// // using trim() functiom to remove spaces
// // let name1 = "    gajju    "
// // let newname = name1.trim();
// // console.log(newname);
// // name1 = name1.trim();
// // console.log(name1);
// name= name.toUpperCase();
// console.log(name);
// name = name.toLowerCase();
// console.log(name);
//        var a=10;
//        var b=5;
//         if(a>b){
//             alert("the sum of a and b is "+ (a+b));
//  }
//  else{alert("you are going to submit");}
// var a= confirm("do you like me");
// // we can store vslue of confirm in a variable as ok->true and cancel->false
// if(a){
//     alert("you have a good choice");
// }else{
//     alert("you need to improve your taste");
// }
// var a = prompt("enter your age");
// if(a>18){
//     alert("hi,you are an adult");
// }
// else{
//     alert("chal aage chal");
// }
// function hello(a=1,b = 0){
//     document.write(a+b);
// }
// hello();
// document.write(" ");
// hello(8,5);
//  function hello(){
//     alert("you are going to submit this");
// }
// var ary = new Array(7,'$',"ram",null);
// var ary = new Array(3);
// for(var v = 0;v<3;v++){
//     ary[v] = prompt("enter the value");
// }
//      document.write("<ul>");
//         for(var a = 0;a<3;a++){
// document.write("<li>" + ary[a] + "</li>");
//         }
//    document.write("</ul>");
// var ary = [
//     ["Mohit","b.tech",'A',18],
//     ["Bawal","b.tech",'B',19],
//     ["Jaskaran","b.tech",'B',18],
// ]
// document.write("<table border = '1px' cellspacing = '0'>");
//     for(var v = 0;v<3;v++){
//         document.write("<tr>");
//             for(var b = 0;b<4;b++){
//                 document.write("<td>" + ary[v][b] + "</td>");
//             }
//             document.write("</tr>");
//     }
//     document.write("</table>");
// var ary = ["bawal","mohit","jaskaran","sooraj"];
// document.write(ary + "<br>");
// ary.splice(2,0,"devansh","arvinder",);
// document.write(ary);
// var ary = [23,78,45,8,9,56,70];
// var b = ary.filter(checkAge);
// document.write(b);
// function checkAge(age){
//     return age>=18;
// }
{/* <body>
<!-- <body onkeypress="hello()">
    <!-- onscroll event calls given thing when content overflows and a scroll bar is added in our page -->
    <!-- onkeypress event works only in fonts and body -->
    <!-- <h1>hello</h1>
    <button onclick="hello()">Submit</button> -->
    <!-- <p onmouseup = "hello()">to kaise hai aap log</p>
    <p onmousedown = "hello()">to kaise hai aap log</p> --> -->
   
// </body> */}