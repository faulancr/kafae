import chalk from 'chalk';
export default function(key) {
    const messages = {
        "sindi": "Flo has always given the best sprint names!",
        "dirk": "Message from Dirk!",
        "andi": "Message from andi!",
        "tschela": "Message from tschela!",
        "beri": "Thanks Flo for the great mood you brought to the team!",
        "lorela": "Message from lorela!",
        "kathi": "Message from kathi!",
        "kathrin": "Message from kathrin!",
    };
    console.log(chalk.blue(messages[key]));
}
