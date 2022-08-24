const fs = require('fs');
const input = fs.readFileSync('./stdin.txt').toString().split(" ");

const N = input[0];

for(i = 1; i <= N; i++){
    let alphabet = input[i].toString().trim();
        alphabet.match(/(a-z)*/.g);
        console.log(alphabet);
}




// for(i = 1; i <= N; i++){
//     let alphabet = input[i].toString().trim();
//     for(j = 97; j < 123; j++){
//         alphabet.match(/(a-z)*/.g);
//     }
// }
// console.log(input);