const product = x => y => y * x;

let mult5 = product(5);
let double = product(2);

console.log(double(3));



const addSuffix = (x) => {
    const concat = (y) => {
        return y + x;
    }
    return concat;
}

let add_full = addSuffix('full');
let f = add_full('fruit');
console.log(f);
