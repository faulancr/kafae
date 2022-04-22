import chalk from 'chalk';

export default function cli(args){
    const messages = {
        "sindi": "Flo has always given the best sprint names!",
        "dirk": "Message from Dirk!",
        "andi": "Message from andi!",
        "tschela": "Message from tschela!",
        "beri": "Message from beri!",
        "lorela": "Message from lorela!",
        "kathi": "Message from kathi!",
        "kathrin": "Message from kathrin!",
    };
    console.log(chalk.blue(messages[args[2]]));
}
