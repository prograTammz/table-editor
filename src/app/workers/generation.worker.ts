/// <reference lib="webworker" />

//Generates a string from CAPs Alphapet with random value between min & max
function generateString(min,max) {
  let result = ' ';
  const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const randomLength = randomIntFromInterval(min,max);
  const charactersLength = characters.length;
  for ( let i = 0; i < randomLength; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}




addEventListener('message', ({ data }) => {
  const response = `worker response to ${data}`;
  postMessage(response);
});



