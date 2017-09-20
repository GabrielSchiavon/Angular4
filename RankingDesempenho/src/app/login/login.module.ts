import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelModule, InputTextModule, PasswordModule, ButtonModule } from 'primeng/primeng';

import { LoginService } from './login.service';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    PanelModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    LoginRoutingModule
  ],
  declarations: [LoginComponent],
  providers: [LoginService]
})
export class LoginModule { }
