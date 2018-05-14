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

    //iterating over the left over parts of the original string sent 
    //into the loop minus the character taken out at the original for loop
    //makes those sub groupings go through the same thing until every character has been rearranged.

  }
  return permutations;
}

console.log(anagram('etac'));