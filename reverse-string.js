'use strict';

function reverseString(string){
  if(!string.length){
    return '';
  }

  const lastChar = string.slice(-1);
  return lastChar + reverseString(string.slice(0, -1));
}

reverseString('cat');