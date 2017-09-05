import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ClockService } from './clock.service';
import { ClockComponent } from './clock.component';
import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, ClockComponent],
  providers: [ClockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
