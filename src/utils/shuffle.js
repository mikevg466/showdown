const shuffle = array => {
  // return an empty array if the array paramter is null
  if(!array)
    return [];

  // create a new array so we don't mutate
  const shuffledArray = array.slice();

  // loop through the array from the end to the start
  //   replacing with a random item with a smaller index
  for(let i = shuffledArray.length - 1; i > 0; i--){
    let j = Math.floor(Math.random() * (i + 1));
    let temp = shuffledArray[i];
    shuffledArray[i] = shuffledArray[j];
    shuffledArray[j] = temp;
  }

  return shuffledArray;
}

export default shuffle;
