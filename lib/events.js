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

const clocks = [];
const createNewClock = (duration) => {
    const clock = new Clock(duration);
    clocks.unshift(clock);
    clock.start();
};

const callWarning = () => {
    var warning = new Audio('warning.mp3');
    warning.play();
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

// const stop = () => {
//     const [currentClock] = clocks;
//     if (currentClock) {
//         clearTimeout(currentClock);
//         currentClock = 0;
//     }
// };

const showVisualWarning = () => {
  setTimeout(function tick() {
      const [currentClock] = clocks;
      if (currentClock.timeInBetween <= 21000) {
          callVisualWarning();
      }
      if (currentClock.timeInBetween <= 1000) {
          clearTimeout(currentClock);
          currentClock(0);
      }
      setTimeout(tick, 100);
  }, 100);
};

const warningNoise = () => {
  const [currentClock] = clocks;
  // if (currentClock.timeInBetween < 21000 && currentClock.timeInBetween > 19500) {
  //   callWarning();
  // }
  setTimeout(function tick() {
      const [currentClock] = clocks;
      if (currentClock.timeInBetween <= 22000) {
          console.log(currentClock.timeInBetween);
          callWarning();
      }
      if (currentClock.timeInBetween <= 1000) {
          clearTimeout(currentClock);
          currentClock(0);
      }
      setTimeout(tick, 5000);
  }, 5000);
};

const callVisualWarning = () => {
    var randomColor = 'rgb(' + Math.floor(Math.random() * 255) + ',' +
        Math.floor(Math.random() * 255) + ',' +
        Math.floor(Math.random() * 255) + ')';
    $('body').css('background-color', randomColor);
};

//start button functionality
$workTimerButton.on('click', () => {
    // createNewClock($workInput.val()*60000); //production code
    createNewClock(25000);
    setTimeout(function tick() {
        const [currentClock] = clocks;
        if (currentClock && !currentClock.isExpired) {
            renderClock(currentClock, $workDisplay);
        } else {
            $breakDisplay.text(`${$breakInput.val()}:00`);
            $breakTimerButton.attr('disabled', false);
            $workDisplay.addClass('hidden');
            $breakDisplay.removeClass('hidden');
            clearTimeout(currentClock);
            currentClock(0);
        }
        setTimeout(tick, 0);
    }, 0);
    disableStartButton();

    // warning noise function
    warningNoise();
    showVisualWarning();
});

//start break button funationality
$breakTimerButton.on('click', () => {
    // createNewClock($breakInput.val()*60000); //production code
    createNewClock(25000);
    setTimeout(function tick() {
        const [currentClock] = clocks;
        if (currentClock && !currentClock.isExpired) {
            renderClock(currentClock, $breakDisplay);
        } else {
            $workDisplay.text(`${$workInput.val()}:00`);
            $workTimerButton.attr('disabled', false);
            $breakDisplay.addClass('hidden');
            $workDisplay.removeClass('hidden');
            clearTimeout(currentClock);
            currentClock(0);
        }
        setTimeout(tick, 0);
    }, 0);
    disableBreakButton();

    // warnings
    warningNoise();
    showVisualWarning();
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
