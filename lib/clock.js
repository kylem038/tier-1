const $ = require('jquery');

let $startTimerButton = $('.start-timer');
let $timerDisplay = $('.timer-display');
let $workInput = $('.work-input');

let start = Date.now();
let end = start + convertInput();
// let remainingTime
// let newEndTime


class Clock {
  constructor (seconds) {
    this.seconds = seconds;
  }

calcFinishTime (){
  // if (timeInBetween < end) {
  //   setTimeout(calcFinishTime, 1000, timeInBetween);
  // }
  // 

  // window.setInterval(function() {
  //   var time = Date.now() - start;
  //   elapsed = Math.floor(time/100) / 10;
  //   if(Math.round(elapsed) === elapsed) { elapsed += '.0';}
  //   $timerDisplay.text(elapsed);
  // }, 100);

  // step();
}

} //end Clock object

let timeInBetween = () => {
  return end - Date.now();
};


let convertInput = () => {
  return 25 * 60000;
};

// let convertInput = () => {
//   return $workInput.val() * 60000;
// };

// let setTimerValue = () => {
//   $timerDisplay.text($workInput.val());
// };

$startTimerButton.on('click', () => {
  let clock = new Clock();
  clock.calcFinishTime();
  // setTimerValue();
});

module.exports = Clock;
