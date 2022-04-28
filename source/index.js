import chalk from 'chalk';
import message from './message.js';
import selfie from './selfie.js';
import help from './help.js';
export default function cli(args){
    switch(args[2]) {
        case "help":
            help();
            break
        case "selfie":
            selfie();
            break
        default:
            message(args[2]);
    }
    
}
