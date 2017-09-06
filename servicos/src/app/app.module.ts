import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { RankingComponent } from './ranking.component';
import { RankingService } from './ranking.service';

@NgModule({
  declarations: [
    AppComponent,
    RankingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [RankingService],
  bootstrap: [RankingComponent]
})
export class AppModule { }
