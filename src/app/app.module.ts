import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CvComponent } from './components/cv/cv.component';
import { ListeComponent } from './components/liste/liste.component';
import { ItemComponent } from './components/item/item.component';
import { DetailComponent } from './components/detail/detail.component';
import { SetbackgroundDirective } from './setbackground.directive';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    ListeComponent,
    ItemComponent,
    DetailComponent,
    SetbackgroundDirective,
    LoginComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
