const $ = require('jquery');

let $startTimerButton = $('.start-timer');
let $timerDisplay = $('.timer-display');
let $workInput = $('.work-input');

class Clock {
  constructor (seconds) {
    this.seconds = seconds;
  }

  countDown (seconds) {
    console.log(seconds);
    seconds--;
    if (seconds >= 0) {
      setTimeout(this.countDown, 1000, seconds) ;
    }
  }

  // start
  // pause
  // reset

}



let setTimerValue = () => {
  $timerDisplay.text($workInput.val());
};

$startTimerButton.on('click', () => {
  // debugger;
  let clock = new Clock();
  clock.countDown(10);
  setTimerValue();
});

module.exports = Clock;
