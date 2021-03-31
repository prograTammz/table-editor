/// <reference lib="webworker" />

//Generates a string from CAPs Alphapet with random value between min & max
function generateString(min: number,max: number) {
  let result = ' ';
  const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const randomLength = randomIntFromInterval(min,max);
  const charactersLength = characters.length;
  for ( let i = 0; i < randomLength; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

//Generates a random Integer between min & max
function randomIntFromInterval(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//Generates data based on rows number and cols number
function createData(rows: number,cols: number) {
  let dataObjects = [];
    for(let i = 0; i < rows; i++) {
        let rowArray = [];
        for(let j = 0; j < cols; j++) {
            const colValue = {value: generateString(10,100).substring(1) }
            rowArray.push(colValue);
        }
        dataObjects.push(rowArray);
    }

    return dataObjects;
}
  
//Listens to the main thread and post the data to it.
addEventListener('message', (message: MessageEvent) => {
  const response = createData(message.data.rows, message.data.cols);
  console.log(response);
  postMessage(response);
});



