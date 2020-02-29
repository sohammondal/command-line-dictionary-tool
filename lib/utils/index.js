const chalk = require('chalk');
const CLI = require('clui');
const Spinner = CLI.Spinner;
const status = new Spinner('Please wait....');

module.exports = {
    error: chalk.bold.red,
    warn: chalk.yellow,
    success: chalk.greenBright,
    info: chalk.blueBright,
    status
}