'use strict';

function arrayDouble (array){
  if(!array.length){
    return [];
  }
  const doubledNumber=array[0]*2;
  return [doubledNumber, ...arrayDouble(array.slice(1))];
}

const arr=[1, 2, 3];
arrayDouble(arr);