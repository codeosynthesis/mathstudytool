function err(x){
  // TODO: Error
  console.error(x);
}

function rep(x){
  document.getElementById('resp').innerHTML=x;
  return true;
}

function isInArray(value, array) {
  return array.indexOf(value) > -1;
}

// the app dosn't have the logic to process the operator
function InvalidOperatorException(x){
  this.operator=x;
}

/**
 * result from checking a problem, include result and an explanation of 
 * any common mistakes.
 */
var CheckResult=function(result,tip){
  this.result=result;
  this.tip=tip;
}

///////////////////////// Application ////////////////////////////

/**
 * Quiz
 * @arg [int] xRange - numbers to be included in first operator
 * @arg [int] yRange - numbers to be included in second ooperator
 * @arg [char] operators - operators to be used for making the quize
 * @arg int numQuestions - the number of questions in the Quiz
 * @attribute [Question] - the questions in the quiz
 **/
var Quiz=function(xRange, yRange, operators, numQuestions){
  console.log(xRange +""+yRange +""+ operators +""+ numQuestions);
  var numXs=xRange.length;
  var numYs=yRange.length;
  var numOps=operators.length;
  
  this.xRange=xRange;
  this.yRange=yRange;
  this.operators=operators;
  this.numQuestions=numQuestions;
  this.questions=[];
  
  //loop for number of questions generating questions randomly  
  for (var i = numQuestions; i>0; i--){
    this.questions.push(
      new Question( 
        xRange[Math.floor(Math.random() * numXs)],
        yRange[Math.floor(Math.random() * numYs)],
        operators[Math.floor(Math.random() * numOps)]
      )
    );
  }
}

//Defaults
Quiz.xRange=[0,1,2,3,4,5,6,7,8,9];
Quiz.yRange=[0,1,2,3,4,5,6,7,8,9];
Quiz.operators=['+','-','%','*','/'];

/**
 * create a question with 2 numbers and an operator
 * @arg int x - the x operator
 * @arg int y - the y operator
 * @arg char operator - the operator for the question
 * @att int answer - the answer to the question
 */
function Question(x,y,operator){
  this.x=x;
  this.y=y;
  this.operator=operator;
  this.answer=Question.getAnswer(x,y,operator);
  this.given='';
}

Question.prototype.check=function(){
  if (this.answer == this.given){
    console.log("correct "+this.x+this.operator+this.y+"="+this.answer+"=="+this.given);
    return true;
  } 
  console.log("wrong "+this.x+this.operator+this.y+"="+this.answer+"=="+this.given);
  return false;
}

/**
 * param x int - number 1
 * param y int - number 2
 * param operator int - operation to do
 * @returns Boolean
 */
Question.getAnswer=function(x,y,operator){
  
  switch (operator){
    case '+' : return x + y;
    case '*' : return x * y;
    case '/' : return x / y; 
    case '-' : return x - y;
    case '%' : return x * ( y % 100 );
    default  : throw new InvalidOperatorException(operator);
  }
}

/**
 * check addition answer and give tip 
 */
Question.checkAddition=function(numa,numb,ans){
        
  console.log("Checking "+numa+"+"+numb+"="+ans);
  
  var chk=parseInt(numa)+parseInt(numb);
  
  console.log("Compare :" + chk + ":"+ans);
  
  if( chk == ans ){
    console.log("true");
    return true;
  } else {
    console.log("false");
    return false; 
  }
}

// TODO: add tips here
Question.checkSubtraction=function (numa,numb,ans){
  if( (numa-numb) == ans ){
    return true;
  } else {
    return false; 
  }
}

// TODO: add tips here
Question.checkDivision=function(numa, numb,ans){
  if( (numa/numb) == ans ){
    return true;
  } else {
    return false; 
  }
}

// TODO: add tips here
Question.checkMultiplication=function (numa,numb,ans){
  if( (numa*numb) == ans ){
    return true;
  } else {
    return false; 
  }
}

// TODO: add tips here
Question.checkPercentage=function(numa,numb,ans){
  if( (numa * (numb/100)) == ans ){
    return true;
  } else {
    return false; 
  }
}


if(false){
module.exports.err=err;
module.exports.Quiz=Quiz;
module.exports.Question=Question;
}