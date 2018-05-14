'use strict';

function countSheep (number){
  if(number===0){
    return;
  }
  console.log(number, 'Another Sheep Jumps Over The Fence');
  return countSheep(number-1);
}

countSheep(3);