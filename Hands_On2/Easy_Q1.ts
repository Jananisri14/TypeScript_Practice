import * as fs from 'fs';

const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);

const Length = Number(input[0]);
const breadth = Number(input[1]);

if (Length === breadth) {
    console.log("It is a Square");
}
else {
    console.log("Not a Square");
}
