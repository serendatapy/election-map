var makePolitician = function (polName,results,totalVotes) {
  var politician = {};
    politician.name = polName;
    politician.electionResults = results;
    politician.totalVotes = totalVotes;

  return politician;
}

var harveyDent = makePolitician("Harvey Dent",null,0);
var obama = makePolitician("Obama",null,0);

console.log("Politician1: ",harveyDent,"Politician 2: ",obama);