// Code your solutions in this file
function printBadges(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`Welcome ${array[i]}! You are employee #${i + 1}.`);
  }
  return array;
}

function tailsNeverFails() {
  let tossResults = 0;
  function toss() {
    return Math.random();
  }
  while (Math.round(toss()) != 0) {
    tossResults += 1;
    toss();
  }
  return `You got ${tossResults} tails in a row!`;
}
