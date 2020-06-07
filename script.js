var makePolitician = function (polName,results,totalVotes,partyColor) {
  var politician = {};
    politician.name = polName;
    politician.pColor = partyColor;
    politician.electionResults = results;
    politician.totalVotes = totalVotes;
    politician.correctVote = function(index,newValue){
      this.electionResults[index] = newValue;
    }
    politician.countV = function(){
      this.totalVotes = this.electionResults.reduce(function(currentTV,currentV){
        return currentTV + currentV;
      });
    }

  return politician;
}

var harveyDent = makePolitician("Harvey Dent",null,0,[132, 17, 11]);
var obama = makePolitician("Obama",null,0,[245, 141, 136]);

harveyDent.electionResults = [5,1,7,2,33,6,4,2,1,14,8,3,1,11,11,0,5,3,3,3,7,4,8,9,3,7,2,2,4,2,8,3,15,15,2,12,0,4,13,1,3,2,8,21,3,2,11,1,3,7,2];
obama.electionResults = [4,2,4,4,22,3,3,1,2,15,8,1,3,9,0,6,1,5,5,1,3,7,8,1,3,3,1,3,2,2,6,2,14,0,1,6,7,3,7,3,6,1,3,17,3,1,2,11,2,3,1];

console.log("Politician1: ",harveyDent,"Politician 2: ",obama);


harveyDent.correctVote(9,1);
obama.correctVote(9,28);
harveyDent.correctVote(4,17);
obama.correctVote(4,38);
harveyDent.correctVote(43,11);
obama.correctVote(43,27);

harveyDent.countV();
obama.countV();
console.log(harveyDent.totalVotes,obama.totalVotes);

var winner = harveyDent.totalVotes > obama.totalVotes ? harveryDent.name : obama.name;
//console.log(winner);