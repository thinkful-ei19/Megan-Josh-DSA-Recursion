'use strict';

function binaryRep(num){ 
  if(num===0){ 
    return ''; 
  }

  let remainder = num%2;

  let backwards = remainder + binaryRep(Math.trunc(num/2));

  return backwards.substr(1) + backwards.charAt(0); 
}

binaryRep(25);