function forLoop(array) {
    for (let i = 0; i < 25; i++) {
      if (i === 1) {
        array.push(`I am 1 strange loop.`);
      } else {
        array.push(`I am ${i} strange loop${i===0 ? '' : 's'}.`);
      } 
      return array;
    }
}

function whileLoop(number) {
  const n = Math.floor(Math.random() * 100);
  while (n >= 0) {
    console.log(--countdown);
    if (n === 0) {
      return 'done';
    }
  }
}

function doWhileLoop(array) {
  function incrementVariable() {
    i = i + 1;
  }
  do {
  incrementVariable()
  }
}