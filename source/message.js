import chalk from 'chalk';
export default function(key) {
    const messages = {
        "sindi": "You have always given the best sprint names!",
        "dirk": "Lieber bester Pairing Partner :) Danke für die tollen Momente und Erinnerungen. Es war immer eine Freude mit dir zu arbeiten und ich hab viel gelernt.",
        "andi": "We will miss you and your daily motivation shirts",
        "beri": "Thanks Flo for the great mood you brought to the team!",
        "lorela": "Wherever you go may you find people as positive as you!",
        "kathi": "Lieber Flo, vielen lieben Dank für Alles und für die schönen Erinnerungen sowie lustigen Momente in einem oftmals doch etwas stressigen Arbeitsalltag. Ich wünsche dir alles erdenklich Gute sowie viel Glück - sowohl privat als auch beruflich - und ganz viel Erfolg bei deiner nächsten Herausforderung!",
        "kathrin": "Hallo Flo,leider kann ich mich nicht persönlich bei dir verabschieden. Ich wünsche dir alles Beste, viel Freude und Erfüllung auf deinen weiteren Weg!Schade, dass du gehst! Bleib gesund und munter! LG Kathrin",
        "tschela": "Always keep your balance!",
    };
    console.log(chalk.cyanBright(messages[key]));
}
