function delay (ms){
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    })
}

async function calculator(length) {
    for (let i =0; i < length; i++){
        console.log(i);
        await delay(100);
    }
}

calculator(10);