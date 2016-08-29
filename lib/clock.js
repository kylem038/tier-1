class Clock {
  constructor (duration) {
    this.duration = duration;
    this.startTime = null;
    // this.type = type;
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
