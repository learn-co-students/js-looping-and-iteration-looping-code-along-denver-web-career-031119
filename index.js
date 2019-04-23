// Code your solutions in this file
function printBadges(arr1){
  // if (arr1.length > 0){
    for (let i = 0; i < arr1.length; i++){
      console.log(`Welcome ${arr1[i]}! You are employee #${i+1}.`);
    }
  // } else {
  //   console.log('why!')
  // }
  // console.log(arr1)
  return arr1;
}

function tailsNeverFails(){
  let tailsCount = 0
  for(let i = 0; i < 1000; i++){
    let toss = Math.round(Math.random());
    if(toss === 1){
      tailsCount++
    } else {
      break;
    }
  }
  return `You got ${tailsCount} tails in a row!`
}
