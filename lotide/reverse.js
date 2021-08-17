const args = process.argv.slice(2);

const reverse = (args) => {
  let result = '';
  for (let x = 0; x < args.length; x++) {
    for (let y = args[x].length - 1; y >= 0; y--) {
      result += args[x][y];
    }

    if (x < args.length - 1) {
      result += "\n";
    }
  }
  console.log(result);
};

reverse(args);