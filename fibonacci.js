'use strict';

function fibonacci(num) {
  if (num === 1){ 
    return [1, 1];
  }
  
  const nextNumber=fibonacci(num-1);
  return  [...nextNumber, nextNumber[num - 1] + nextNumber[num - 2]];
}
  
fibonacci(7);