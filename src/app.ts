const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let tasks: string[] = [];

function promptUser() {
  console.log('\napp:\n\n今日やることを1行ずつ入力してね(1行ずつ入力。endと入力すると入力完了)');
  inputTasks();
}

function inputTasks() {
  rl.question('', (task: string) => {
    if (task.toLowerCase() === 'end') {
      displayTasks();
    } else {
      tasks.push(task);
      inputTasks();
    }
  });
}

function displayTasks() {
  console.log('\n今日のタスクは以下です。\n');
  tasks.forEach((task, index) => {
    console.log(`${index + 1}: ${task}`);
  });
  mainMenu();
}

function mainMenu() {
  console.log(`
1: 上からタスクを開始
2: タスクの優先度を変更
3: タスクを更新する
4: タスクを追加する
0: 終了
`);
  rl.question('選択してください: ', (option: string) => {
    switch(option) {
      case '1':
        startTask();
        break;
      case '2':
        changePriority();
        break;
      case '3':
        updateTask();
        break;
      case '4':
        addTask();
        break;
      case '0':
        rl.close();
        break;
      default:
        console.log('無効な選択です。もう一度選んでください。');
        mainMenu();
    }
  });
}

function startTask() {
  if (tasks.length === 0) {
    console.log('タスクがありません。');
    mainMenu();
    return;
  }

  console.log(`了解。「${tasks[0]}」を始めましょう。`);
  taskTimer(25, () => {
    console.log('お疲れ様でした。5分休憩してから、次の作業を指定してください。');
    postTaskMenu();
  });
}

function taskTimer(minutes: number, callback: () => void) {
  let remaining = minutes;
  console.log(`タイマー起動中。残り${remaining}分`);

  const timer = setInterval(() => {
    remaining--;
    console.log(`残り${remaining}分`);
    if (remaining <= 0) {
      clearInterval(timer);
      callback();
    }
  }, 60000); // 1分ごとに更新

  rl.question('1: タイマー停止<-->再開, 2: タイマーリセット, 0: 戻る\n', (option: string) => {
    switch (option) {
      case '1':
        clearInterval(timer);
        pauseMenu(remaining, callback);
        break;
      case '2':
        clearInterval(timer);
        startTask();
        break;
      case '0':
        clearInterval(timer);
        mainMenu();
        break;
      default:
        console.log('無効な選択です。');
    }
  });
}

function pauseMenu(remaining: number, callback: () => void) {
  console.log(`タイマー停止中。残り${remaining}分`);
  rl.question('1: 再開, 0: 戻る\n', (option: string) => {
    switch (option) {
      case '1':
        taskTimer(remaining, callback);
        break;
      case '0':
        mainMenu();
        break;
      default:
        console.log('無効な選択です。');
        pauseMenu(remaining, callback);
    }
  });
}

function postTaskMenu() {
  console.log(`
1: 次のタスクを開始する
2: 元のタスクをもう一度
0: 戻る
  `);
  rl.question('選択してください: ', (option: string) => {
    switch(option) {
      case '1':
        tasks.shift(); // 最初のタスクをリストから削除
        startTask();
        break;
      case '2':
        startTask(); // 同じタスクを再開
        break;
      case '0':
        mainMenu();
        break;
      default:
        console.log('無効な選択です。');
        postTaskMenu();
    }
  });
}

function changePriority() {
  // 優先度変更のロジックをここに追加
  console.log('優先度変更のロジックを実装してください。');
  mainMenu(); // 一時的にメインメニューに戻ります。
}

function updateTask() {
  // タスク更新のロジックをここに追加
  console.log('タスク更新のロジックを実装してください。');
  mainMenu(); // 一時的にメインメニューに戻ります。
}

function addTask() {
  // タスク追加のロジックをここに追加
  console.log('タスク追加のロジックを実装してください。');
  mainMenu(); // 一時的にメインメニューに戻ります。
}

// アプリケーションを開始
promptUser();
