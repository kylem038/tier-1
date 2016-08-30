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

var warning = new Audio('warning.mp3');
const callWarning = () => {
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


const warningNoise = (target = '.work-display') => {
  const [currentClock] = clocks;
  let number = parseInt($(target).text().split(':')[1]);
  if (number % 5 === 0 && number < 21) {
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

const callVisualWarning = (target) => {
    $(target).css('background-color', '#DC2F32');
};

//start button functionality
$workTimerButton.on('click', () => {
    // createNewClock($workInput.val()*60000); //production code
    createNewClock(5000);
    setTimeout(function tick() {
        const [currentClock] = clocks;
        if (currentClock && !currentClock.isExpired) {
            renderClock(currentClock, $workDisplay);
            enableWarning();
        } else {
          currentClock.typeCool();
            // $breakDisplay.text(`${$breakInput.val()}:00`);
            // $breakTimerButton.attr('disabled', false);
            // $workDisplay.addClass('hidden');
            // $breakDisplay.removeClass('hidden');
            clearTimeout(currentClock);
            currentClock(0);
        }
        setTimeout(tick, 0);
    }, 0);
    disableStartButton();

    // warning noise function
});

//start break button funationality
$breakTimerButton.on('click', () => {
    // createNewClock($breakInput.val()*60000); //production code
    createNewClock(25000, 'break');
    setTimeout(function tick() {
        const [currentClock] = clocks;
        if (currentClock && !currentClock.isExpired) {
            renderClock(currentClock, $breakDisplay);
            enableWarning(`.break-display`);
        } else {
          currentClock.typeCool();
            // $workDisplay.text(`${$workInput.val()}:00`);
            // $workTimerButton.attr('disabled', false);
            // $breakDisplay.addClass('hidden');
            // $workDisplay.removeClass('hidden');
            clearTimeout(currentClock);
            currentClock(0);
        }
        setTimeout(tick, 0);
    }, 0);
    disableBreakButton();

    // warnings
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
