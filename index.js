let readlinSync = require('readline-sync');
const chalk = require('chalk');
let score = 0;

const questions = [
  {
    question: 'Which player scored the fastest hat-trick in the Premier League? ⚽ ⚽ ⚽',
    answer : 'Sadio Mane'
  },
  {
    question: 'Ronaldo helped Portugal win the European Championship in which year?🏆',
    answer : '2016'
  },
  {
    question: 'Which country has won the most World Cups🥇?',
    answer: 'Brazil'
  },
  {
    question: 'With 202 clean sheets, which goalkeeper has the best record in the Premier League?🧤',
    answer: 'Petr Cech'
  },
  {
    question: 'In which year was the first European Championship held?',
    answer: '1960'
  },
  {
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
  for(let i = 0 ; i < questions.length ; i++){
    checkAnswers(questions[i]);
  }
};

const checkAnswers = (quizQuestions) => {
  const userAnswer = readlinSync.question(chalk.yellowBright(quizQuestions.question + '  ')).toUpperCase();
  if(userAnswer === quizQuestions.answer.toUpperCase()){
    score++;
    console.log(chalk.green('Your answer was right ‍'));
  }else{
    console.log(chalk.red('Your answer was wrong'));
    console.log(chalk.cyanBright(`Right answer was ${quizQuestions.answer}`))
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