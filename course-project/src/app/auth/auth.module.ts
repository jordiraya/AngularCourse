import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AuthRoputingModule } from './auth-routing.module';


 @NgModule({
   declarations: [
     SigninComponent,
     SignupComponent
   ],
   imports: [
     FormsModule,
     AuthRoputingModule
   ]
 })
export class AuthModule {}
