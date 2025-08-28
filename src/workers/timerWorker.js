const { act } = require("react");

let isRunning = false;
self.onmessage = (event) => {
  if (isRunning) {
    return;
  }
  isRunning = true;
  const state = event.data;
  const { activeTask, secondsRemaining } = state;

  const endDate = activeTask.startDate + secondsRemaining * 1000;
  let countDownSeconds = Math.ceil((endDate - now) / 1000);
  function tick() {
    const now = Date.now();
    countDownSeconds = Math.floor((endDate - now) / 1000);

    self.postMessage({
      type: "TIMER_TICK",
      payload: { secondsRemaining: countDownSeconds },
    });
    setTimeout(tick, 1000);
  }

  tick();
};
