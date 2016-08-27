const $ = require('jquery');
const renderClock = require('./renderClock.js');
const Clock = require('./clock.js');

let $startTimerButton = $('.start-timer');
let $timerDisplay = $('.timer-display');
let $workInput = $('.work-input');
const clocks = [];
const createNewClock = (duration) => {
  const clock = new Clock(duration);
  clocks.unshift(clock);
  clock.start();
};

$startTimerButton.on('click', () => {
  createNewClock($workInput.val()*60000);
  setTimeout(function tick () {
    const [currentClock] = clocks;
    if(currentClock && !currentClock.isExpired){
    renderClock(currentClock, $timerDisplay);
}
  setTimeout(tick, 0);
}, 0);
});
