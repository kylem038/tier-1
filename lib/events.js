const $ = require('jquery');
const renderClock = require('./renderClock.js');
const Clock = require('./clock.js');

let $workTimerButton = $('.work-timer');
let $breakTimerButton = $('.break-timer');
let $workDisplay = $('.work-display');
let $breakDisplay = $('.break-display');
let $workInput = $('.work-input');
let $breakInput = $('.break-input');
let $dropDown = $('.drop-down-icon');
let $h2 = $('h2');
let warning = new Audio('warning.mp3');

const clocks = [];
const createNewClock = (duration) => {
    const clock = new Clock(duration);
    clocks.unshift(clock);
    clock.start();
};

const callWarning = () => {
    warning.play();
};

const resetTimerColor = (target = '.work-display') => {
  $(target).css('background', 'rgba(8, 38, 64, .9)');
};

const disableButton = (buttonType) => {
  const [currentClock] = clocks;
  if (currentClock && !currentClock.isExpired) {
      buttonType.attr('disabled', true);
  }
};

const disableStartButton = () => {
    disableButton($workTimerButton);
};

const disableBreakButton = () => {
    disableButton($breakTimerButton);
};

const callVisualWarning = (target) => {
    $(target).css('background-color', '#DC2F32');
};

const warningNoise = (target = '.work-display') => {
  let minutes = parseInt($(target).text().split(':')[0]);
  let seconds = parseInt($(target).text().split(':')[1]);
  if (minutes === 0 && ßseconds % 5 === 0 && seconds < 21) {
    return callWarning();
  }
};

const showVisualWarning = (target = '.work-display') => {
  const [currentClock] = clocks;
  if (currentClock.timeInBetween <= 21000) {
    callVisualWarning(target);
  }
};

  const enableWarning = (target) => {
    warningNoise(target);
    showVisualWarning(target);
  };

const startNewClock = (displayField, target = 'work') => {
  if (target === 'work') {
    createNewClock($workInput.val() * 60000, target);
  } else {
    createNewClock($breakInput.val() * 60000, target);
  }

  setTimeout(function tick() {
      const [currentClock] = clocks;
      if (currentClock && !currentClock.isExpired) {
          renderClock(currentClock, displayField);
          enableWarning(`.${target}-display`);
      } else {
        currentClock.typeOfClock(target);
          resetTimerColor(`.${target}-display`);
          clearTimeout(currentClock);
          currentClock(0);
      }
      setTimeout(tick, 0);
  }, 0);
};

//start button functionality
$workTimerButton.on('click', () => {
    startNewClock($workDisplay, 'work');
    disableStartButton();
});

//start break button funationality
$breakTimerButton.on('click', () => {
    startNewClock($breakDisplay, 'break');
    disableBreakButton();
});

$workInput.on('click focusout', function() {
    $workDisplay.text(`${$workInput.val()}:00`);
});

$breakInput.on('click focusout', function() {
    $breakDisplay.text(`${$breakInput.val()}:00`);
});

$dropDown.on('click', function() {
  $workInput.toggleClass('show-dropdown');
  $breakInput.toggleClass('show-dropdown');
  $h2.toggleClass('show-dropdown');
});
