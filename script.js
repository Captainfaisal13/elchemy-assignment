let timer;

const startTimer = () => {
  const minutes = parseInt(document.getElementById("minutes").value || 0);
  const seconds = parseInt(document.getElementById("seconds").value || 0);

  // input validation
  if (
    isNaN(seconds) ||
    isNaN(minutes) ||
    seconds > 59 ||
    seconds < 0 ||
    minutes > 59 ||
    minutes < 0
  ) {
    clearInterval(timer);
    alert("Seconds and Minutes cannot be more than 59 and less than 0");
    return;
  }

  let totalSeconds = minutes * 60 + seconds;

  // clearing the previous interval
  clearInterval(timer);

  // create a new time interval
  timer = setInterval(() => {
    let currentMinutes = Math.floor(totalSeconds / 60);
    let currentSeconds = totalSeconds % 60;
    document.getElementById("timer").innerHTML = `${String(
      currentMinutes
    ).padStart(2, "0")}m ${String(currentSeconds).padStart(2, "0")}s`;

    if (totalSeconds === 0) {
      clearInterval(timer);
      alert("Timer finished!");
    } else {
      totalSeconds--;
    }
  }, 1000);
};

const resetTimer = () => {
  clearInterval(timer);
  document.getElementById("timer").innerHTML = `00m 00s`;
  document.getElementById("minutes").value = "";
  document.getElementById("seconds").value = "";
};
