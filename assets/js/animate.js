//Navbrand Javascript
const logoOne = document.querySelectorAll('#HRlogo path');

for(let i=0; i<logoOne.length; i++){
  console.log(`Letter ${i} is ${logoOne[i].getTotalLength()}`);
}

const logoTwo = document.querySelectorAll('#LRlogo path');

for(let j=0; j<logoTwo.length; j++){
  console.log(`Letter ${j} is ${logoTwo[j].getTotalLength()}`);
}