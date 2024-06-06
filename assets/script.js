let timer;
let timeLeft;
let isRunning = false;
let defaultTime = 25;

function startTimer(duration = defaultTime) {
  if (!isRunning) {
      clearInterval(timer); 
      timeLeft = duration * 60; 
      isRunning = true;
      timer = setInterval(updateTimer, 1000);
      updateTimer();
  }
}


function updateTimer() {
    const minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    document.getElementById('time').textContent = minutes + ':' + seconds;

    if (timeLeft === 0) {
        clearInterval(timer);
        isRunning = false;
        showNotification(); 
        drawLineThroughTasks(); 
    } else {
        timeLeft--;
    }
}

function stopTimer() {
    clearInterval(timer);
    isRunning = false;
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    document.getElementById('time').textContent = defaultTime + ':00';
    clearLineThroughTasks();
}

function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value === "") {
        alert("Please,add a task.");
        return;
    }

    var taskItem = document.createElement("li");
    taskItem.textContent = taskInput.value;
    taskList.appendChild(taskItem);

    taskInput.value = "";
}

function showNotification() {
    alert("Time is up! The alarm has been reset.");
}

function drawLineThroughTasks() {
    var tasks = document.querySelectorAll('.tasks li');
    tasks.forEach(function(task) {
        task.style.textDecoration = "line-through";
    });
}

function clearLineThroughTasks() {
    var tasks = document.querySelectorAll('.tasks li');
    tasks.forEach(function(task) {
        task.style.textDecoration = "none";
    });
}
