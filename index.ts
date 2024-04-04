#! /usr/bin/env node
import inquirer from "inquirer"
import chalk from "chalk";

let myBalance: number = 25000;
let myPin: number = 1234;

let pinAnswer = await inquirer .prompt(
    [
        {
            name: "pin",
            type:"number",
            message:"slect pin number",
        }
    ]
);
if (pinAnswer.pin === myPin ){
    console.log(chalk.green.bold("correct pin number"));
console.log(chalk.yellow.bold("welcome to our ATM services"));

let operationAns = await inquirer.prompt(
    [
        {
            name: "operations",
            message:"please slect option",
            type:"list",
            choices:["withdraw","fast cash","chack balance"],
        }
    ]
);
if (operationAns.operations === "withdraw"){
    let amountAns = await inquirer.prompt(
        [
            {
                name:"amount",
                message:"Enter your amount",
                type:"number",
            }
        ]
    );
    if(amountAns.amount <= myBalance){
        let balance = myBalance - amountAns.amount;
        console.log(`the remaining balance is ${balance}`);
    }else {
        console.log(`you have insufficient balance `);
    }
}
if(operationAns.operations === "fast cash"){
    let fastcashAns =await inquirer.prompt(
        [
            {
                name:"amount",
                type:"list",
                choices:["1000","3000","5000","15000",]
            }
        ]
    );
    if(fastcashAns.amount<= myBalance){
        let balance2 = myBalance -fastcashAns.amount;
        console.log(`your balance is ${balance2}`);
        
    }else{
        console.log(`you have insufficient amount`);
        
    }
}
else if (operationAns.operations === "chack balance"){
    console.log(myBalance);
    
}

}
else{
    console.log(chalk.red.bold("Incorrect pin number"))
}