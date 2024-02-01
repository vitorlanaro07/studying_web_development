function display (some){
    console.log(some);
}

function add(a,b, callback){
    sum = a+b;
    callback(sum);
}

add(5,3,display);

//testing firstly callback's

//Promise

let myPromisse = new Promise(function(myResolve, myReject) {
    myResolve();
    myReject();
})

myPromisse.then(
    function(value){console.log("Success")},
    function (error){console.log(error)}
);

//--------------------------------------------------------------

let myPromisse2 = new Promise((resolve, reject) => {
    let x = 2;

    if (x == 0){
        resolve("Ok");
    }else{
        reject("Error");
    }
})


myPromisse2.then(
    function(value){console.log(value)},
    function(error){console.log(error)}
)

//--------------------------------------------------------------
let myPromisse3 = new Promise((resolve) => {
    let x = 0;
    if (x == 0){
        resolve("Sucess");
    }
})


myPromisse3.then(
    function(value){console.log(value)},
)


//--------------------------------------------------------------

let myPromisse4 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Depois de 2,5s: Ok");
    }, 2500);
})

myPromisse4.then(
    function(display){console.log(display);}
);

//--------------------------------------------------------------

var arrayTmp= ["maça", "abacate", "laranja", "uva", "moranjo", "abacaxi"];
var valueTmp=0;


// function callFruit(fruitArray, index){
//     setTimeout(() => {
//         console.log(fruitArray[index]);
//         nextFruit(fruitArray, index)
//     },1000)
// }

// function nextFruit(fruitArray, index){
//     index++
//     if(index < arrayTmp.length){
//         callFruit(fruitArray, index)
//     }else{
//         console.log("cancela");
//     }
// }

// function displayFruit(arrayTmp){
//     let index = 0;
//     callFruit(arrayTmp, index); 
// }

// displayFruit(arrayTmp);

for (let i; i < arrayTmp.length; i++){
    setTimeout(() => {
        console.log(arrayTmp[i]);
    }, (i+1) * 1000);
} 

//-------------------------------------------

let x = 0;
function loop () {
    console.log(arrayTmp[x]);
    x++;

    if (x < arrayTmp.length) {
        setTimeout(loop, 1000);
    }
}
// loop();

//-----------------------------------------------

// First we need a promisified setTimeout:
function delay(ms){
    return new Promise((resolve,reject) => {
        setTimeout(resolve, ms)
    });
}

async function test(){
    for (let i=0; i<3; i++){
        await delay(100);
        console.log("hi");
    }
}

test();
