




class Clock {
  constructor (duration) {
    this.duration = duration;
    this.startTime = null;
  }

  start (time = Date.now()) {
    this.startTime = time;
    return this;
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

} //end Clock object

// let convertInput = () => {
//   return 25 * 60000;
// };

// let setTimerValue = () => {
//   $timerDisplay.text($workInput.val());
// };


module.exports = Clock;
