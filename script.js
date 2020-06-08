/*Factory Function*/

var makePolitician = function (polName,partyColor) {

  var politician = {
    name:polName,
    pColor:partyColor,
    electionResults:null,
    totalVotes:0,
    correctVote : function (index,newValue){
      this.electionResults[index] = newValue;
    }
  };
  /*This is to show 2 ways of adding properties to the object*/
  politician.countV = function(){
    this.totalVotes = this.electionResults.reduce(function(currentTV,currentV){
      return currentTV + currentV;
    });
  }

  return politician;
}

//Create politicians
var bruce = makePolitician("Bruce Willis",[132, 17, 11]);
var depp = makePolitician("Johnny Depp",[245, 141, 136]);
bruce.electionResults = [5,1,7,2,33,6,4,2,1,14,8,3,1,11,11,0,5,3,3,3,7,4,8,9,3,7,2,2,4,2,8,3,15,15,2,12,0,4,13,1,3,2,8,21,3,2,11,1,3,7,2];
depp.electionResults = [4,2,4,4,22,3,3,1,2,15,8,1,3,9,0,6,1,5,5,1,3,7,8,1,3,3,1,3,2,2,6,2,14,0,1,6,7,3,7,3,6,1,3,17,3,1,2,11,2,3,1];

//Vote Correction function
bruce.correctVote(9,1);
depp.correctVote(9,28);
bruce.correctVote(4,17);
depp.correctVote(4,38);
bruce.correctVote(43,11);
depp.correctVote(43,27);

//FUNCTION UPDATE STATE RESULTS & INFO
var setStateResults = function(state){

  theStates[state].winner = null;

  if(bruce.electionResults[state] > depp.electionResults[state]) {
    theStates[state].winner = bruce;}
  else if (depp.electionResults[state]>bruce.electionResults[state]) {
    theStates[state].winner = depp;}
  //else winner remains null

  var stateWinner = theStates[state].winner;
  theStates[state].rgbColor = stateWinner != null ? stateWinner.pColor : [11, 32, 57];

  /*Dynamic Table*/
  var stateInfoTable = document.getElementById('stateResults');
  var stateHeader = stateInfoTable.children[0].children[0];
  var stateName = stateHeader.children[0];
  var stateAbbrev = stateHeader.children[1];
  stateName.innerText = theStates[state].nameFull;//"HACKHAHAHA";
  stateAbbrev.innerText = "("+theStates[state].nameAbbrev+")";

  /*CANDIDATE 1*/
  var candidate1 = stateInfoTable.children[1].children[0];
  var candidate1Name = candidate1.children[0];
  candidate1Name.innerText = bruce.name;
  var candidate1Result = candidate1.children[1];
  candidate1Result.innerText = bruce.electionResults[state];

  /*CANDIDATE 2*/
  var candidate2 = stateInfoTable.children[1].children[1];
  var candidate2Name = candidate2.children[0];
  candidate2Name.innerText = depp.name;
  var candidate2Result = candidate2.children[1];
  candidate2Result.innerText = depp.electionResults[state];

  /*STATE WINNER*/
  var candidateWin = stateInfoTable.children[1].children[2];
  var candidateWinResult = candidateWin.children[1];
  candidateWinResult.innerText = stateWinner != null ? stateWinner.name : "DRAW";
}

bruce.countV();
depp.countV();
//console.log(bruce.totalVotes,depp.totalVotes);
//console.log(bruce.pColor,depp.pColor);

var winner = "????";
if(bruce.totalVotes > depp.totalVotes) {
    winner = bruce.name;
  }
else if (depp.totalVotes > bruce.totalVotes) {
    winner = depp.name;
  }
else {
  winner = "IT'S A DRAW!";
}

console.log("AND THE WINNER IS..."+winner);

var tableTop = document.getElementById('countryResults');
var topRow = tableTop.children[0].children[0];
topRow.children[0].innerText = bruce.name;
topRow.children[1].innerText = bruce.totalVotes;
topRow.children[2].innerText = depp.name;
topRow.children[3].innerText = depp.totalVotes;
topRow.children[5].innerText = winner;