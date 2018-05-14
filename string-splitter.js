'use strict';

function stringSplitter(string, sep){
  if(!string.length){
    return [];
  }

  let piece='';
  
  if( string[0]!== sep){
    piece += string[0];
    return piece + stringSplitter(string.slice(1), sep);
  }
    
  if(string[0] === sep){
    piece += string[0];
    return ' ' + piece + stringSplitter(string.slice(1), sep);
  }
}
  
stringSplitter('helloworld', 'l');