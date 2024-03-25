// function display(result){
//     console.log(result);
// }

// function add(a,b,mycallback){
//     let sum=a%b;
//  mycallback(sum)   
// };

// add(10,20,display);  



// anonymous function
let sum=function(x,y){
    return x+y;
}
console.log(sum(10,20));



setTimeout(() => {
    console.log('Hello World');
    
}, 2000);