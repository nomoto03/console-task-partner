import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Hello world');

rl.question('入力してください: ', (input: string) => {
  console.log(`${input}ということですね`);
  rl.close();
});
