import { Clock } from './clock.model';

export class ClockService {

  private clock: Clock;

  public checkTime(value: number) : string {
    if (value < 10) {
      let returnValue: string = "0";
      returnValue = returnValue.concat(value.toString());
      return returnValue;
    } else {
      return value.toString();
    }
  }

  private getRealTime(): Clock {
    let time = new Date();
    this.clock = {
      "hour" : this.checkTime(time.getHours()),
      "minutes" : this.checkTime(time.getMinutes()),
      "seconds" : this.checkTime(time.getSeconds())
    }
    return this.clock;
  }

  getTime(delay: number, callback: (clock: Clock) => void) {
    callback(this.getRealTime());
    setInterval(() => callback(this.getRealTime()), delay);
  }

}
