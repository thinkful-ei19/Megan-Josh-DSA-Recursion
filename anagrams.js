'use strict';

function anagram(string) {
  if (string.length < 2){
    return string;
  } // return original string

  let permutations = []; 

  for (let i=0; i<string.length; i++) {
    let char = string[i];
    //take that character at location i and set it to char
    console.log('hey', string.slice(0,i));
    let stringMinusThatCharAtI = string.slice(0,i) + string.slice(i+1,string.length);
    // taking the string and slicing the characters from 1st to the character at i, 
    //then adding the rest of the characters to the end

    for (let subPermutation of anagram(stringMinusThatCharAtI))
      permutations.push(char + subPermutation);

    //got help on this part (18-19): need to go over

  }
  return permutations;
}

console.log(anagram('etac'));