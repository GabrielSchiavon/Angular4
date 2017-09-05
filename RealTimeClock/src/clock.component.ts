import { Component } from '@angular/core';
import { Clock } from './clock.model';
import { ClockService } from './clock.service';

@Component({
  selector: 'clock',
  template: '{{clock.hour}} : {{clock.minutes}} : {{clock.seconds}}'
})
export class ClockComponent {

  clock: Clock;

  constructor(clockService: ClockService) {
    clockService.getTime(1000, clock => this.clock = clock);
  }

}
