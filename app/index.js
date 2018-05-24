let string = 'ljfjdslljn,mbnroiuweurpwgfl/dkxmnb;rjirhtljlflv,.xvn.hri';

let letters = new Map();

for(let i=0; i<string.length; i++) {
    let letter = string[i];
    if(!letters.has(letter)) {
        letters.set(letter, 1);
    } else {
        letters.set(letter, letters.get(letter) + 1);
    }
}

console.log(letters);
