export {}

const actualCount = document.getElementById("actualCount")!;
const theoreticalCount = document.getElementById("theoreticalCount")!;
let count = 0;
const start = Date.now();
setInterval(() => {
    count++;
    actualCount.textContent = count.toString();
    theoreticalCount.textContent = Math.floor((Date.now() - start) / 1000).toString();
}, 1000)