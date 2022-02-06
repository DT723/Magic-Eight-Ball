'use strict';

///////////////////////////////
//MAGIC 8 BALL
///////////////////////////////

//ask for username with prompt
let userName = prompt(`What is your name?`);
// console.log(userName);

//Check if username exists - display a message
if (userName) {
  console.log(`Hello ${userName}, ready to play magic eight ball?`);
} else {
  prompt(`Please enter a name`);
}

//create variable and store the value of the question
let userQuestion = prompt(`Please ask a question, no question mark needed`);
//letting the user know what question they asked
console.log(`${userName}, You have asked; ${userQuestion}?`);

//generate random number
let randomNumber = Math.floor(Math.random() * 20) + 1;
console.log(randomNumber);

//create the 8 ball
let eightBall = ' ';

//Create 8 ball responses based on randomNumber
switch (randomNumber) {
  case 1:
    alert(`It is certain.`);
    break;
  case 2:
    alert(`As I see it, yes.`);
    break;
  case 3:
    alert(`Reply hazy, try again.`);
    break;
  case 4:
    alert(`Don't count on it.`);
    break;
  case 5:
    alert(`It is decidedly so.`);
    break;
  case 6:
    alert(`Most likely.`);
    break;
  case 7:
    alert(`Ask again later.`);
    break;
  case 8:
    alert(`My reply is no.`);
    break;
  case 9:
    alert(`My sources say no.`);
    break;
  case 10:
    alert(`Better not tell you now.`);
    break;
  case 11:
    alert(`Outlook good.`);
    break;
  case 12:
    alert(`Without a doubt.`);
    break;
  case 13:
    alert(`Yes definitely.`);
    break;
  case 14:
    alert(`Cannot predict now.`);
    break;
  case 15:
    alert(`Yes.`);
    break;
  case 16:
    alert(`Outlook not so good.`);
    break;
  case 17:
    alert(`Signs point to yes.`);
    break;
  case 18:
    alert(`Concentrate and ask again.`);
    break;
  case 19:
    alert(`Very doubtful.`);
    break;
  case 20:
    alert(`You may rely on it.`);
    break;
}
//print magic eight ball's answer
console.log(`The eightball answer is: ${eightBall}`);
