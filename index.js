<<<<<<< HEAD
function theBeatlesPlay (musicians, instruments) {
  var emptyArray = [];

  for (var i = 0; i < musicians.length; i++) { //this loop will start from index 0 and stop at the end of the array
    emptyArray.push(musicians[i] + " plays " + instruments[i]);// pushing to the empty array -> 1st index of musicians combine with play and 1st index of instruments( this is just a tempate)
  }
  return emptyArray
}

=======
function theBeatlesPlay (musicians, instruments) {
  var emptyArray = [];

  for (var i = 0; i < musicians.length; i++) { //this loop will start from index 0 and stop at the end of the array
    emptyArray.push(musicians[i] + " plays " + instruments[i]);// pushing to the empty array -> 1st index of musicians combine with play and 1st index of instruments( this is just a tempate)
  }
  return emptyArray
}

>>>>>>> 826d4bbe6dcaf122102b5b07185d3c4b3899781b
function johnLennonFacts (facts){
var i = 0;
while (i < facts.length){
  facts[i] = facts[i] + "!!!"; //the i-th element of "facts" = the i-th element + !!!
  i++;
} //end of the loop
return facts;
}


function iLoveTheBeatles (number){
  var empArray =[];

  do {
    empArray.push("I love the Beatles!");
    number ++;
  } while (number < 15);

  return empArray;
}
