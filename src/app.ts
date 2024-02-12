const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const tasks: string[] = [];

const askForTask = () => {
  rl.question('タスクを入力してください（終了するにはexitと入力）: ', (input: string) => {
    if (input === 'exit') {
      console.log('タスクの一覧:');
      tasks.forEach((task, index) => {
        console.log(`${index + 1}: ${task}`);
      });
      rl.close();
    } else {
      tasks.push(input);
      askForTask(); // 再帰的にタスクを尋ねる
    }
  });
};

console.log('タスク入力アプリケーションを開始します。');
askForTask();
