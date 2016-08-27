const moment = require('moment');

module.exports = (clock, $element) => {

 let formatTime = (ms) => {
   const millisecondsInAMinute = 60000;
   const minutes = Math.round(ms / millisecondsInAMinute);
   const seconds = Math.round(ms % millisecondsInAMinute / 1000);
   return `${minutes}:${seconds}`;
 };

 $element.html(`
   <p class='timer-display'>
   ${moment(clock.timeInBetween).format('mm:ss')}
   </p>
   `);
};
