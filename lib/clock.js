const $ = require('jquery');

let $workTimerButton = $('.work-timer');
let $breakTimerButton = $('.break-timer');
let $workDisplay = $('.work-display');
let $breakDisplay = $('.break-display');
let $workInput = $('.work-input');
let $breakInput = $('.break-input');

class Clock {
  constructor (duration) {
    this.duration = duration;
    this.startTime = null;
  }

  start (time = Date.now()) {
    this.startTime = time;
    return this;
  }

  typeOfClock(target) {
    if(target === 'work') {
      $breakDisplay.text(`${$breakInput.val()}:00`);
      $breakTimerButton.attr('disabled', false);
      $workDisplay.addClass('hidden');
      $breakDisplay.removeClass('hidden');
    } else {
      $workDisplay.text(`${$workInput.val()}:00`);
      $workTimerButton.attr('disabled', false);
      $breakDisplay.addClass('hidden');
      $workDisplay.removeClass('hidden');
    }

  }

  get endTime() {
    if(!this.startTime) {return null;}
    return this.startTime + this.duration;
  }

  get timeInBetween () {
    return this.endTime - Date.now();
  }

  get timeElapsed() {
    return Date.now() - this.startTime;
  }

  get isExpired() {
    if (Date.now() >= this.endTime)
    {return true;}
  }
}


module.exports = Clock;
