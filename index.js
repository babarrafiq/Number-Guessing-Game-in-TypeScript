import inquirer from "inquirer";
const systemGenNum = Math.floor(Math.random() * 10);
const answer = await inquirer.prompt([
    {
        type: "number",
        name: "userGuess",
        message: "What is your guess"
    }
]);
console.log(`The System generated number is ${systemGenNum}`);
console.log(`The User guess is ${answer.userGuess}`);
if (answer.userGuess === systemGenNum) {
    console.log("You Win this game");
}
else {
    console.log("You loose this game!");
}
