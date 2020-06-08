/*Factory Function*/

var makePolitician = function (polName,partyColor) {

  var politician = {
    name:polName,
    pColor:partyColor,
    electResults:null,
    totalVotes:0,
    correctV : function (index,newValue){
      this.electResults[index] = newValue;
    }
  };
  /*This is to show 2 ways of adding properties to the object*/
  politician.countV = function(){
    this.totalVotes = this.electResults.reduce(function(currentTV,currentV){
      return currentTV + currentV;
    });
  }

  return politician;
}

//Create politicians
var candidateOne = makePolitician("Bruce Willis",[132, 17, 11]);
var candidateTwo = makePolitician("Johnny Depp",[245, 141, 136]);
candidateOne.electResults = [5,1,7,2,33,6,4,2,1,14,8,3,1,11,11,0,5,3,3,3,7,4,8,9,3,7,2,2,4,2,8,3,15,15,2,12,0,4,13,1,3,2,8,21,3,2,11,1,3,7,2];
candidateTwo.electResults = [4,2,4,4,22,3,3,1,2,15,8,1,3,9,0,6,1,5,5,1,3,7,8,1,3,3,1,3,2,2,6,2,14,0,1,6,7,3,7,3,6,1,3,17,3,1,2,11,2,3,1];

//Last minute Vote Corrections using a method
candidateOne.correctV(9,1);
candidateTwo.correctV(9,28);
candidateOne.correctV(4,17);
candidateTwo.correctV(4,38);
candidateOne.correctV(43,11);
candidateTwo.correctV(43,27);

//FUNCTION UPDATE STATE RESULTS & INFO
var setStateResults = function(state){

  theStates[state].winner = null;

  if(candidateOne.electResults[state] > candidateTwo.electResults[state]) {
    theStates[state].winner = candidateOne;
  }
  else if (candidateTwo.electResults[state] > candidateOne.electResults[state]) {
    theStates[state].winner = candidateTwo;
  }
  //else winner remains null

  var stateWinner = theStates[state].winner;
  theStates[state].rgbColor = stateWinner != null ? stateWinner.pColor : [11, 32, 57];

  /*Dynamic Bottom Table*/
  var stateInfoTable = document.getElementById('stateResults');
  var stateHeader = stateInfoTable.children[0].children[0];
  var stateName = stateHeader.children[0];
  var stateAbbrev = stateHeader.children[1];
  stateName.innerText = theStates[state].nameFull;
  stateAbbrev.innerText = "(" + theStates[state].nameAbbrev + ")";

  /*CANDIDATE 1*/
  var cand1 = stateInfoTable.children[1].children[0];
  var cand1Name = cand1.children[0];
  var cand1Result = cand1.children[1];
  cand1Name.innerText = candidateOne.name;
  cand1Result.innerText = candidateOne.electResults[state];

  /*CANDIDATE 2*/
  var cand2 = stateInfoTable.children[1].children[1];
  var cand2Name = cand2.children[0];
  var cand2Result = cand2.children[1];
  cand2Name.innerText = candidateTwo.name;
  cand2Result.innerText = candidateTwo.electResults[state];

  /*STATE WINNER*/
  var candWinResult = stateInfoTable.children[1].children[2].children[1];
  candWinResult.innerText = stateWinner != null ? stateWinner.name : "DRAW";
}
//generate total votes
candidateOne.countV();
candidateTwo.countV();

//decide overal country winner
var winner = "????";
if(candidateOne.totalVotes > candidateTwo.totalVotes) {
    winner = candidateOne.name;
  }
else if (candidateTwo.totalVotes > candidateOne.totalVotes) {
    winner = candidateTwo.name;
  }
else {
    winner = "IT'S A DRAW!";
}

var tableTop = document.getElementById('countryResults');
var topRow = tableTop.children[0].children[0];
topRow.children[0].innerText = candidateOne.name;
topRow.children[1].innerText = candidateOne.totalVotes;
topRow.children[2].innerText = candidateTwo.name;
topRow.children[3].innerText = candidateTwo.totalVotes;
topRow.children[5].innerText = winner;