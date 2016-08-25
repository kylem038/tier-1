const $ = require('jquery');

let $startTimerButton = $('.start-timer');
let $timerDisplay = $('.timer-display');
let $workInput = $('.work-input');
let interval = 1000; //ms
let expected = Date.now() + interval;

class Clock {
  constructor (seconds) {
    this.seconds = seconds;
  }

  // countDown (seconds) {
  //   console.log(seconds);
  //   seconds--;
  //   if (seconds >= 0) {
  //     setTimeout(this.countDown.bind(this), 1000, seconds) ;
  //   }
  // }

countDown (){
  let start = Date.now(), elapsed = '0.0';

  window.setInterval(function() {
    var time = Date.now() - start;
    elapsed = Math.floor(time/100) / 10;
    if(Math.round(elapsed) === elapsed) { elapsed += '.0';}
    $timerDisplay.text(elapsed);
  }, 100);

  // step();
}

  // start
  // pause
  // reset

}


// let step = () => {
//     var drift = Date.now() - expected; // the drift (positive for overshooting)
//     if (drift > interval) {
//         console.error(error);
//     }
//     expected += interval;
//     setTimeout(this.step.bind(this), Math.max(0, interval - drift)); // take into account drift
// };


let setTimerValue = () => {
  $timerDisplay.text($workInput.val());
};

$startTimerButton.on('click', () => {
  let clock = new Clock();
  clock.countDown(10);
  setTimerValue();
});

module.exports = Clock;
