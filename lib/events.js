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
const createNewClock = (duration, id) => {
    const clock = new Clock(duration, id);
    clocks.unshift(clock);
    clock.start();
};

const disableStartButton = () => {
    const [currentClock] = clocks;
    if (currentClock && !currentClock.isExpired) {
        $startTimerButton.attr('disabled', true);
    }
};

const disableBreakButton = () => {
    const [currentClock] = clocks;
    if (currentClock && !currentClock.isExpired) {
        $breakTimerButton.attr('disabled', true);
    }
};

const stop = () => {
    const [currentClock] = clocks;
    if (currentClock) {
        clearTimeout(currentClock);
        currentClock = 0;
    }
};

const callWarning = () => {
    var warning = new Audio('warning.mp3');
    warning.play();
};

const showWarning = () => {
    var randomColor = 'rgb(' + Math.floor(Math.random() * 255) + ',' +
        Math.floor(Math.random() * 255) + ',' +
        Math.floor(Math.random() * 255) + ')';
    $('body').css('background-color', randomColor);
};

//start button functionality
$startTimerButton.on('click', () => {
    // createNewClock($workInput.val()*60000); //production code
    $('body').css('background-color', 'black');
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

    // warning noise function

    setTimeout(function tick() {
        const [currentClock] = clocks;
        if (currentClock.timeInBetween <= 21000) {
            callWarning();
        }
        if (currentClock.timeInBetween <= 1000) {
            clearTimeout(currentClock);
            currentClock(0);
        }
        setTimeout(tick, 5000);
    }, 5000);


    setTimeout(function tick() {
        const [currentClock] = clocks;
        if (currentClock.timeInBetween <= 21000) {
            showWarning();
        }
        if (currentClock.timeInBetween <= 1000) {
            clearTimeout(currentClock);
            currentClock(0);
        }
        setTimeout(tick, 100);
    }, 100);

    disableStartButton();
});

//start break button funationality
$breakTimerButton.on('click', () => {
    // createNewClock($breakInput.val()*60000); //production code
    $('body').css('background-color', 'black');
    createNewClock(24000);
    setTimeout(function tick() {
        const [currentClock] = clocks;
        if (currentClock && !currentClock.isExpired) {
            renderClock(currentClock, $breakDisplay);
        } else {
            $workDisplay.text(`${$workInput.val()}:00`);
            $startTimerButton.attr('disabled', false);
            $breakDisplay.addClass('hidden');
            $workDisplay.removeClass('hidden');
            clearTimeout(currentClock);
            currentClock(0);
        }
        setTimeout(tick, 0);
    }, 0);

    // warning function

    setTimeout(function tick() {
        const [currentClock] = clocks;
        if (currentClock.timeInBetween <= 21000) {
            callWarning();
        }
        if (currentClock.timeInBetween <= 1000) {
            clearTimeout(currentClock);
            currentClock(0);
        }
        setTimeout(tick, 5000);
    }, 5000);


    setTimeout(function tick() {
        const [currentClock] = clocks;
        if (currentClock.timeInBetween <= 21000) {
            showWarning();
        }
        if (currentClock.timeInBetween <= 1000) {
            clearTimeout(currentClock);
            currentClock(0);
        }
        setTimeout(tick, 100);
    }, 100);

    disableBreakButton();
});

$workInput.on('click focusout', function() {
    $workDisplay.text(`${$workInput.val()}:00`);
});

$breakInput.on('click focusout', function() {
    $breakDisplay.text(`${$breakInput.val()}:00`);
});
