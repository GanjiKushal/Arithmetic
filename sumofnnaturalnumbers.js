let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

let n=parseInt(readLine())
console.log((n*(n+1))/2);

// Method-2

let sum=0
for(let i=1;i<=n;i++){
    sum=sum+i   
}
console.log(sum);