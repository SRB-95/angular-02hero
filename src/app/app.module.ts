import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';
import { AuthLoginComponent } from './shared/auth-login/auth-login.component';
import { ParentComponentComponent } from './dataBinding/parent-component/parent-component.component';
import { ChildComponentComponent } from './dataBinding/parent-component/child-component/child-component.component';
import { SiblingsComponentComponent } from './dataBinding/siblings-component/siblings-component.component';
import { BackToTopComponent } from './shared/back-to-top/back-to-top.component';
import { MovieComponent } from './jsonDataHandeling/movie/movie.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthLoginComponent,
    ParentComponentComponent,
    ChildComponentComponent,
    SiblingsComponentComponent,
    BackToTopComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
