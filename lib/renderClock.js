const moment = require('moment');

module.exports = (clock, $element) => {

 $element.html(`
   <p class='timer-display'>
   ${moment(clock.timeInBetween).format('mm:ss')}
   </p>
   `);
};
