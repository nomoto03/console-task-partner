const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const tasks: string[] = [];

function showMainMenu() {
  console.log(
    `今日やることを1行ずつ入力してください（1行ずつ入力。"end"を入力すると入力完了）`
  );
  inputTasks();
}

function inputTasks() {
  rl.question("", (task: string) => {
    if (task == "end") {
      showTasks();
    } else {
      tasks.push(task);
      inputTasks();
    }
  });
}

function showTasks() {
  console.log("\n今日のタスクは以下です。\n");
  tasks.forEach((task: string, index) => {
    console.log(`${index + 1}: ${task}`);
  });
  showOptions();
}

function showOptions() {
  console.log("次の選択肢を選んでください");
  console.log(
    `1: 上からタスクを開始\n2: タスクの優先順位を変更\n3: タスクを更新する\n4: タスクを追加する\n0: 終了`
  );
  rl.question("選択してください: ", (option: string) => {
    switch (option) {
      case "1":
        startTask();
        break;
      case "2":
        changePriority();
        break;
      case "3":
        updateTask();
        break;
      case "4":
        addTask();
        break;
      case "0":
        rl.close();
        break;
      default:
        console.log("無効な選択肢です。");
        showOptions();
    }
  });
}

function startTask() {
  if (tasks.length > 0) {
    //TODO
  } else {
    console.log("タスクがありません。");
    showOptions();
  }
}

function changePriority() {
  console.log("タスクの優先順位を変更します。\n");
  showTasks();
  //TODO
  showOptions();
}

function updateTask() {
  console.log("タスクを更新します。");
  showTasks();
  //TODO
  showOptions();
}

function addTask() {
  console.log("タスクを追加します。");
  rl.question("タスクを入力してください: ", (newTask: string) => {
    tasks.push(newTask);
    showTasks();
  });
}

showMainMenu();

rl.on("close", () => {
  console.log("タスク管理ツールを終了します。");
});
