import chalk from 'chalk';
import message from './message.js';
import selfie from './selfie.js';
export default function cli(args){
    switch(args[2]) {
        case "help":
            console.log(chalk.blue("HELP: "));
            break
        case "selfie":
            selfie();
            break
        default:
            message(args[2]);
    }
    
}
