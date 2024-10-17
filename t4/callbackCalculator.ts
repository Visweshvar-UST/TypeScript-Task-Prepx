function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function mul(a,b){
    return a*b;
}
function div(a,b){
    return a/b;
}
function mod(a,b){
    return a%b;
}
let opp : number = 1;
let a = 10;
let b = 2;
switch(opp){
    case 1:
         console.log(add(a, b));
         break;
    case 2:
         console.log(sub(a, b));
         break;
    case 3:
        console.log(mul(a, b));
        break;
    case 4:
        console.log(div(a, b));
        break;
    case 5:
        console.log(mod(a, b));
        break;
    default:
        console.log("Invalid output");
};

function calculator(a: number, b: number, opp: (x: number, y: number) => number  ): number {
    return  opp(a, b);
}
console.log(calculator(1,2,add));
