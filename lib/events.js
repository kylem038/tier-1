const $ = require('jquery');
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
  createNewClock(10000);
  setTimeout(function tick () {
    const [currentClock] = clocks;
    if(currentClock && !currentClock.isExpired){
    console.log(currentClock.timeInBetween);
}
  setTimeout(tick, 0);
}, 0);
});
