// const arrayItterator = (array) => {
//     let index = 0;

//     return {
//         next: () => {
//             if( index < array.length ) {
//                 let next = array[index];
//                 index += 1;
//                 return next;
//             }
//         }
//     }
// }

// let it = arrayItterator([1, 2, 3]);

function* arrayItterator() {
    yield* arguments;
}

let it = arrayItterator(1, 2, 3);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);

function* evens() {
    let count = 0;
    while(true) {
        count += 2;
        let reset = yield count;
        if(reset) {
            count = 0;
        }
    }
}

let sequence = evens();
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next(true).value);
console.log(sequence.next().value);



function* countMaker() {
    let count = 0;
    while (count < 6) {
        yield count += 1;
    }
}

let countGen = countMaker();
