let readlineSync = require('readline-sync');
const chalk = require('chalk');
let score = 0;



console.log(chalk.bgGreenBright("Welcome to the quiz")) 
let userName = readlineSync.question(chalk.bgBlueBright("What's your Name: \n")); 
console.log(chalk.bgCyan(`Hello ${userName}. Let's start the quiz`));
console.log('\n');
console.log('Rules & Instructions: ');
console.log('1.',userName + ', There are 6 questions about to see how well do you know the beautiful game');
console.log('2. You will get 1 points on each Right Answer.');
console.log('3. No Point will be deducted if the Answer is Wrong.');
console.log('4. In MCQ based questions you have to type the Serial Number / Index Value.');
console.log('\n');


const questions = [
  {
    answerArray : ['Harry Kane' , 'Kevin De Bruynne' , 'Sadio Mane' , 'Jamie Vardy'],
    question: 'Which player scored the fastest hat-trick in the Premier League? ⚽ ⚽ ⚽',
    answer : 'Sadio Mane'
  },
  {
    answerArray : ['2020' , '2015' , '2016' , '2017'],
    question: 'Ronaldo helped Portugal win the European Championship in which year?🏆',
    answer : '2016'
  },
  {
    answerArray : ['Spain' , 'Italy' , 'Brazil' , 'England'],
    question: 'Which country has won the most World Cups🥇?',
    answer: 'Brazil'
  },
  {
    answerArray : ['Hugo Lloris' , 'Bernd Leno' , 'Joe Hart' , 'Petr Cech'],
    question: 'With 202 clean sheets, which goalkeeper has the best record in the Premier League?🧤',
    answer: 'Petr Cech'
  },
  {
    answerArray : ['1947' , '1970' , '1960' , '1990'],
    question: 'In which year was the first European Championship held?',
    answer: '1960'
  },
  {
    answerArray : ['21' , '22' , '20' ,'23'],
    question: 'How many clubs competed in the inaugural Premier League season?',
    answer: '22'
  }
]

const highScore = [
  {
    name : 'Simon',
    personalScore : 5
  },
  {
    name : 'Jhosh',
    personalScore : 4
  }
]

const quiz = () => {
  for(var i = 0;i<questions.length;i++){
    console.log('\n');
    checkAnswers(questions[i].answerArray,questions[i].question,questions[i].answer);
    console.log('*******************************');
  }
}


const checkAnswers = (listOfAnswers , question , answer ) => {
  let userAnswer = readlineSync.keyInSelect(listOfAnswers, question);
  console.log('\n');
  if(listOfAnswers[userAnswer] === answer){
    score++;
    console.log(chalk.green('Your answer was right ‍'));
  }else{
    console.log(chalk.red('Your answer was wrong'));
    console.log(chalk.cyanBright(`Right answer was ${answer}`))
  }
  console.log(chalk.blue(`Current Score : ${score}`)); 
}

quiz();

const checkHighScore = () => {
for(let i = 0 ; i < highScore.length ; i++){
  if(highScore[i].personalScore <= score){
    console.log(chalk.greenBright(`Congratulations You have beaten ${highScore[i].name}'s highscore`));
  }else{
    console.log(chalk.white(`${highScore[i].name}'s highscore was ${highScore[i].personalScore}`))
  } 
}
}

checkHighScore();