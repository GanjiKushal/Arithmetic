let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

let n1=parseInt(readLine())
let n2=parseInt(readLine())
let n3=parseInt(readLine())
let r1=n2/n1
let r2=n3/n2
console.log(n3*r2);