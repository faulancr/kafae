import chalk from 'chalk';
import message from './message';
import selfie from './selfie';
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
