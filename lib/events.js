const $ = require('jquery');
const renderClock = require('./renderClock.js');
const Clock = require('./clock.js');

let $startTimerButton = $('.start-timer');
let $breakTimerButton = $('.break-timer');
let $workDisplay = $('.work-display');
let $breakDisplay = $('.break-display');
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

const disableBreakButton = () => {
  const [currentClock] = clocks;
  if(currentClock && !currentClock.isExpired) {
    $breakTimerButton.attr('disabled', true);
  }
};

//start button functionality
$startTimerButton.on('click', () => {
  // createNewClock($workInput.val()*60000); //production code
  createNewClock(5000);
  setTimeout(function tick () {
    const [currentClock] = clocks;
    if(currentClock && !currentClock.isExpired){
    renderClock(currentClock, $workDisplay);
  } else {
    $breakDisplay.text(`${$breakInput.val()}:00`);
    $breakTimerButton.attr('disabled', false);
    $workDisplay.addClass('hidden');
    $breakDisplay.removeClass('hidden');
  }
  setTimeout(tick, 0);
}, 0);
  disableStartButton();
});

//start break button funationality
$breakTimerButton.on('click', () => {
  // createNewClock($breakInput.val()*60000); //production code
  createNewClock(4000);
  setTimeout(function tick () {
    const [currentClock] = clocks;
    if(currentClock && !currentClock.isExpired){
    renderClock(currentClock, $breakDisplay);
  } else {
    $workDisplay.text(`${$workInput.val()}:00`);
    $startTimerButton.attr('disabled', false);
    $breakDisplay.addClass('hidden');
    $workDisplay.removeClass('hidden');
  }
  setTimeout(tick, 0);
}, 0);
  disableBreakButton();
});

$workInput.on('click focusout', function(){
  $workDisplay.text(`${$workInput.val()}:00`);
});

$breakInput.on('click focusout', function(){
  $breakDisplay.text(`${$breakInput.val()}:00`);
});
