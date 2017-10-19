/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var solution = undefined; //fixme
  var c=0;
  var r=0;
  var board = new Board({n:n});
  solution = board.rows();
  for(var i = 0; i < n; i++){
    solution[c][r]=1;
    c++;
    r++;
  }

  //console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0; //fixme
  if(n === 1) {
    return 1;
  }
  var x = true;
  var board = new Board({n:n});
  var tree = function (numR, br,i) {
    //console.log(numR);
    if(i > n){
    } else if(numR === 0){
      solutionCount++;

    } else {
      for(var j = 0; j < n; j++){
          br.togglePiece(i,j);
          if(br.hasAnyRooksConflicts()){
            br.togglePiece(i,j);
          } else{
            tree(numR-1,br,i+1);
            br.togglePiece(i,j);
          }
        
      }
      
    }
  };

  tree(n,board,0);
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme
  if(n === 0) {
    return [];
  }
  if(n === 1) {
    return [[1]];
  }
  if(n===2){
    return [[],[]];
  }
  if(n===3){
    return [[],[],[]];
  }
  var board = new Board({n:n});
  var tree = function (numR, br,i) {
    //console.log(numR);
    if(i > n){
    } else if(numR === 0){
      solution = br.rows().map(function(arr) {
        return arr.slice();
      });

    } else {
      for(var j = 0; j < n; j++){
          br.togglePiece(i,j);
          if(br.hasAnyQueensConflicts()){
            br.togglePiece(i,j);
          } else{
            tree(numR-1,br,i+1);
            br.togglePiece(i,j);
          }
        
      }
      
    }
  };

  tree(n,board,0);

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0; //fixme
  if(n === 0) {
    return 1;
  }
  if(n === 1) {
    return 1;
  }
  if(n===2){
    return 0;
  }
  if(n===3){
    return 0;
  }
  var board = new Board({n:n});
  var tree = function (numR, br,i) {
    //console.log(numR);
    if(i > n){
    } else if(numR === 0){
      solutionCount++;
    } else {
      for(var j = 0; j < n; j++){
          br.togglePiece(i,j);
          if(br.hasAnyQueensConflicts()){
            br.togglePiece(i,j);
          } else{
            tree(numR-1,br,i+1);
            br.togglePiece(i,j);
          }
        
      }
      
    }
  };

  tree(n,board,0);

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
