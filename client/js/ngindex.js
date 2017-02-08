 //"This does nothing other than making C9 happy
function require() {return 1;} //Define the require function
if(false) {
    /*global Quiz angular*/
   var blab = require("./quiz.js");;
 //  var blah = require("./angular.min.js");
}

var app=angular.module('quizApp',[]);
app.controller('quizCtl',function($scope){
    console.log("hello");
    
    $scope.xRange=Quiz.xRange;
    $scope.yRange=Quiz.yRange;
    $scope.operators=Quiz.operators;
    $scope.numQuestions=1;
    $scope.tmp="hi";
    
    $scope.quiz=new Quiz(
        $scope.xRange,
        $scope.yRange, 
        $scope.operators,
        $scope.numQuestions
    );
});
