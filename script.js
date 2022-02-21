'use strict';

///////////////////////////////
//MAGIC 8 BALL
///////////////////////////////
const holder = document.querySelector('.message-holder');
const message = document.querySelector('#message');
const ball = document.querySelector('.ball');

let randomNumber = Math.floor(Math.random() * 20) + 1;
console.log(randomNumber);

//Eight ball animation
fadeInAnimation = function () {
  setTimeout(function () {
    ball.classList.remove('shake');
    holder.style.opacity = 1;
    message.style.opacity = 1;
  }, 4000);
};

fadeOutAnimation = function (callback) {
  holder.style.opacity = 0;
  message.style.opacity = 0;
  callback();
};

ball.addEventListener('click', function () {
  ball.classList.add('shake');
  fadeOutAnimation(fadeInAnimation);
});

// create the 8 ball
let eightBall = ' ';

// Create 8 ball responses based on randomNumber
switch (randomNumber) {
  case 1:
    eightBall = `It is certain.`;
    break;
  case 2:
    eightBall = `As I see it, yes.`;
    break;
  case 3:
    eightBall = `Reply hazy, try again.`;
    break;
  case 4:
    eightBall = `Don't count on it.`;
    break;
  case 5:
    eightBall = `It is decidedly so.`;
    break;
  case 6:
    eightBall = `Most likely.`;
    break;
  case 7:
    eightBall = `Ask again later.`;
    break;
  case 8:
    eightBall = `My reply is no.`;
    break;
  case 9:
    eightBall = `My sources say no.`;
    break;
  case 10:
    eightBall = `Better not tell you now.`;
    break;
  case 11:
    eightBall = `Outlook good.`;
    break;
  case 12:
    eightBall = `Without a doubt.`;
    break;
  case 13:
    eightBall = `Yes definitely.`;
    break;
  case 14:
    eightBall = `Cannot predict now.`;
    break;
  case 15:
    eightBall = `Yes.`;
    break;
  case 16:
    eightBall = `Outlook not so good.`;
    break;
  case 17:
    eightBall = `Signs point to yes.`;
    break;
  case 18:
    eightBall = `Concentrate and ask again.`;
    break;
  case 19:
    eightBall = `Very doubtful.`;
    break;
  case 20:
    eightBall = `You may rely on it.`;
    break;
}
