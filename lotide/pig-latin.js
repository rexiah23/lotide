const args = process.argv.slice(2);

const pigLatin = (args) => args.reduce((acc, word) => acc + word.slice(1) + word[0] + 'ay' + ' ', '').slice(0,-1);

pigLatin(args);