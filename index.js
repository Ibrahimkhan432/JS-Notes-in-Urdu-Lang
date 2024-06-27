// *let aur const 

// let aur const block scope variable aur re initialize nhi kar sakate he matlab ye sirf {} me esecute hote he 
// if(true){
//     const a =10;
    // console.log(a);   // ye run hoga 
// }
// console.log(a);   //ye run nhi hoga

// *var
// var global scope he aur reinitialize aur redeclare kar sakte he 
// if(true){
//     var a =10;
// }
// console.log(a);   // ye run hojaiga

//*template literal => ${}
    //ail key he jise huim console me string k sath variable console kara sakte he 
// if(true){
//     var a =10;
//     var b = `value of a is ${a}`
// }
// console.log(b); 

//*ternary operator
// if else ki condition ka alternate syntax hota he 
// if ki jaga (?) aur else ki jaga (:) use hote he
// let a = 10;
// a > 2 ? console.log("run") : console.log("not run"); // run hoga

//*circuits
// circuits gates ki condition satisfy karte he
// let a = 10;
// let b = a && "abc";
// console.log(b); //abc run hoga

//* Pass By Value and Pass By Reference
// kisi bhi object me value inject karna k lie use hota he
// let a = {
//   id: 1,
//   value: "ABC",
// };
// console.log(a);
// let b = a;
// b.institute = "saylani";
// console.log(a);

//*spread operator
// aik variable ki array  value ko dusre variable me union (dono value ko milane) k lie use kia jata he jese ke push
// let a = [1,2,3,]
// let b = [4,5,6,]
// console.log(...a,...b); // [1,2,3,4,5,6] run hoga

// let a = {
//       id: 1,
//       value: "ABC",
//     };
//     let b = {
//           bill: "xyz",
//         };
// let c = {
//     ...a,...b,
// };
// console.log(c); // dono value aur bill run hoga.

//*Rest operator
// rest operator (...) variable ki value aur argument  value ko run karta he
//function fun(b,c,...a) {
  //  console.log(a);
//}
//fun(1,2,3,4) // b,c me 1,2 aur baqi a me sari value (3,4) run hojaigi

//*destructure array and object
// kisi array me mojood value ko rename karke  (index se) direct rename value se bulane k lie use karte he aur object me obj.name ki jaga name se bula sakte he 
  //  let a = [1,2,3]
   // let [ one,two,three] = a ;
   // console.log(one); // one log pe 1 run hoga 

//    let obj = {
//     id :1,
//     value:"val"
//    }
//    let  {id,value} = obj;
//    console.log(id);   obj.id ki jaga direct id se run hojaiga

   //* Object Methods
// object ke keys value entries aur freeze 
// let obj = {
//   name: "laptop",
//   ram: 8,
//   company: "hp",
// };

// let keys = console.log(Object.keys(obj));  // keys run hogi (keys> name ,ram,aur company he)
// let val = console.log(Object.values(obj)); //values> laptop,8,hp run hoga
// let entries = console.log(Object.entries(obj)); //har key value ka naya separate array banega
// console.log(Object.freeze(obj));// key value change nhi hosakti freeze hogai

//*functions
// kisi bhi value ko kisi khas jaga zarurat k tehat chalana (events,loop,waghera)
// do types k syntax se likh sakte He(parenthesis,arrow function)
//  function fun(a,b){
// return a+b
// }
// console.log(fun(2,3));
//*arrow function
// const fun =( )=> {
//     console.log("run");
// }
// fun();

// *short form 
// let fun = () => "go"  // go run hoga
// let a= fun()
// console.log(a);

//*lexical scope

// let a = "one";
// function abc() {
//   let a = "two";   //two run hoga q k let scope k andar he (scope >{})
//   console.log(a);
// }
// abc();

//*default parameter
// agar () me aik parameter ho to run undefine run hota he is lie parenthesis me aik value ki value equal karte he jese(a,b=2)
// agar b argument nhi diya to b ki value 2 li jaigi
//function fun(a,b=2){
  //  return a+b
//}
//console.log(fun(3));//b ki value nhi di lekin 5 run hoga 3+ upar b=2 3+2=5

// *array functions
  //*map
// let a = [1,2,3,4]
// a.map((b)=>{
//     console.log(b);
// })
//map array return karta he
//return me kuch na ho to undefine par return zrur hoga
let arr = [
{
  name:"asad",
  age:10
},
{
  name:"kaif",
  age:20
},
{
  name:"imran",
  age:30
},
{
  name:"khan",
  age:40
},
]
 let b = arr.map((x,y,z)=>{
// return x.name;
// return x.age;
// return x; // pura object array me milega
// return y;// sub index milenge
// return z;// pura array milenge;
// return x.name.length;// name ki length milenge

 });
 console.log(b);


//1 sare array function me loop chalta  he  
//2 her func me callback laga hota he
//3 callback har iteration pe chalta he  
//4 har aik array func me pehle perimeter me value milti he, dusre me index num , teesre me pura array dubaara mlilta he.
// let arr = [ "a","b","c"];
// arr.map((p,q,r) => {
//   console.log(p);
//   console.log(q);
//   console.log(r);
// });

//*filter
// array se value nikalne k lie

//*forEach
// har aik item  par kaam karne k lie

//*reduce
// comparision k lie use karte he

//*some
// agar koi value true he to true return karta he
// matlab k data me kisi ke number me (one zero) ho to true dega

//*every
// agar sabhi value true he to true return karta he

//*find



//*findIndex
// pure array me value ka index find karne k lie