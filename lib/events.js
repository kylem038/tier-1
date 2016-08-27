const $ = require('jquery');
const renderClock = require('./renderClock.js');
const Clock = require('./clock.js');

let $startTimerButton = $('.start-timer');
let $breakTimerButton = $('.break-timer');
let $timerDisplay = $('.timer-display');
let $workInput = $('.work-input');
let $breakInput = $('.break-input');

const clocks = [];
const createNewClock = (duration) => {
  const clock = new Clock(duration);
  clocks.unshift(clock);
  clock.start();
};

const disableStartButton = () => {
  const [currentClock] = clocks;
  if(currentClock && !currentClock.isExpired) {
    $startTimerButton.attr('disabled', true);
  }
};

$startTimerButton.on('click', () => {
  // createNewClock($workInput.val()*60000); //production code
  createNewClock(10000);
  setTimeout(function tick () {
    const [currentClock] = clocks;
    if(currentClock && !currentClock.isExpired){
    renderClock(currentClock, $timerDisplay);
  } else {
    $timerDisplay.text(`${$breakInput.val()}:00`);
    $breakTimerButton.attr('disabled', false);
  }
  setTimeout(tick, 0);
}, 0);
  disableStartButton();
});

$workInput.on('click', function(){
  $timerDisplay.text(`${$workInput.val()}:00`);
});

$breakInput.on('click', function(){
  $timerDisplay.text(`${$breakInput.val()}:00`);
});

//if currentclock.timeInBetween === 0
//create new Clock(*60000);
//start that clock
