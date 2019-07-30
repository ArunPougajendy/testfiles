function roundToTwo(num) {
  return +(Math.round(num + 'e+2') + 'e-2');
}

console.log((22.235).toFixed(2));
console.log(roundToTwo(22.235));
