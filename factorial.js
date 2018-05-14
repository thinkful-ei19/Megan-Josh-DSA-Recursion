'use strict';

function factorial(num){
  if(num===1){
    return 1;
  }
  const equation = num * factorial(num-1);
  return equation;
}

factorial(5);