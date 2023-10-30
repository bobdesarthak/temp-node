const amount = 7;

if (amount < 10) {
    console.log('Small Number')
}
else {
    console.log('Large Number')
}

console.log('my first node')

console.log(__dirname)

setInterval(() => {
    console.log("Hello World")
}, 1000)

let num = 1; // Define num outside of setInterval to persist its value

const intervalId = setInterval(() => {
    console.log(`${num}`);
    num = num + 1;
}, 1000);
