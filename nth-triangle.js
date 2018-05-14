'use strict';

function nthTriangle(nth){
  if(nth===1){
    return 1;
  }
  const equation = nth + nthTriangle(nth-1);
  return equation;
}

nthTriangle(4);