const middle = arr => {

  const midArr = [];
  const midIndex = Math.floor(arr.length / 2);

  if (arr.length <= 2) {
    return midArr;
  }

  if (arr.length % 2 !== 0) {
    midArr.push(arr[midIndex]);
  } else {
    midArr.push(arr[midIndex - 1]);
    midArr.push(arr[midIndex]);
  }

  
  return midArr;
  
};

module.exports = middle; 
