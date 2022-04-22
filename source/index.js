import chalk from 'chalk';

export default function cli(args){
    const messages = {
        "sindi": "Flo has always given the best sprint names!",
        "Dirk": "Message from Dirk!"
    };
    console.log(chalk.blue(messages[args[2]]));
}
