let getValue = document.getElementById("getValue");
let result = document.getElementById("result");

let obj = {
        D: 1,
        B: 2,
        C: 3
    };

function handleResult() {
    let arr = [];

   for (let key in obj) {
        arr.push( [key, obj[key] ]);
    }

    console.log(arr);
    result.innerText = arr;

}

getValue.addEventListener("click", handleResult);
