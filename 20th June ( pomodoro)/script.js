let timer;
let totalSeconds;
let isRunning = false;
let currentSession = 'work';
let pomodoroCounter = 0;

function getInputValues() {
  return {
    work: parseInt(document.getElementById('workTime').value) * 60,
    shortBreak: parseInt(document.getElementById('shortBreakTime').value) * 60,
    longBreak: parseInt(document.getElementById('longBreakTime').value) * 60,
    cycles: parseInt(document.getElementById('pomodoroCount').value)
  };
}

function updateDisplay() {
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;
  document.getElementById('timeDisplay').textContent =
    `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function updateCycleIndicator() {
  const cycles = getInputValues().cycles;
  let display = '';
  for (let i = 0; i < cycles; i++) {
    display += i < pomodoroCounter ? '🔴 ' : '⚪ ';
  }
  document.getElementById('cycleIndicator').textContent = display.trim();
}

function setSession(session) {
  currentSession = session;
  const values = getInputValues();

  if (session === 'work') {
    totalSeconds = values.work;
    document.getElementById('sessionType').textContent = 'Work';
  } else if (session === 'shortBreak') {
    totalSeconds = values.shortBreak;
    document.getElementById('sessionType').textContent = 'Short Break';
  } else {
    totalSeconds = values.longBreak;
    document.getElementById('sessionType').textContent = 'Long Break';
  }

  updateDisplay();
}

function startTimer() {
  if (isRunning) return;

  isRunning = true;
  timer = setInterval(() => {
    if (totalSeconds > 0) {
      totalSeconds--;
      updateDisplay();
    } else {
      clearInterval(timer);
      isRunning = false;

      if (currentSession === 'work') {
        pomodoroCounter++;
        updateCycleIndicator();

        if (pomodoroCounter % getInputValues().cycles === 0) {
          setSession('longBreak');
        } else {
          setSession('shortBreak');
        }
      } else {
        setSession('work');
      }

      startTimer(); // Auto-start next session
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timer);
  isRunning = false;
}

function resetTimer() {
  clearInterval(timer);
  isRunning = false;
  pomodoroCounter = 0;
  updateCycleIndicator();
  setSession('work');
}

window.onload = () => {
  setSession('work');
  updateCycleIndicator();
};
