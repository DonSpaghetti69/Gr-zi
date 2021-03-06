import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WindowComponent } from './window/window.component';
import { LeftIllustrationComponent } from './left-illustration/left-illustration.component';
import { MiddleTextComponent } from './middle-text/middle-text.component';
import { RightIllustrationComponent } from './right-illustration/right-illustration.component';
import { LoginComponent } from './login/login.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WindowComponent,
    LeftIllustrationComponent,
    MiddleTextComponent,
    RightIllustrationComponent,
    LoginComponent,
    ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
