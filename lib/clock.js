class Clock {
  constructor (duration, id) {
    this.duration = duration;
    this.startTime = null;
    this.id = id || Date.now();
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

  get isExpired() {
    if (Date.now() >= this.endTime)
    {return true;}
  }

}


module.exports = Clock;
