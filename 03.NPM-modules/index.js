const chalk = require('chalk');

// console.log(chalk.blue('Hello world!'));
// console.log(chalk.blue.underline.inverse('Hello world!'));
// console.log(chalk.green.inverse('success'));
// console.log(chalk.red.inverse('danger'));

const v=require('validator')
const email=v.isEmail('sumit@galgotias.in')
console.log(chalk.green.inverse(email));
