import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';
import { AuthLoginComponent } from './shared/auth-login/auth-login.component';
import { ParentComponentComponent } from './dataBinding/parent-component/parent.component';
import { ChildComponentComponent } from './dataBinding/parent-component/child-component/child.component';
import { SiblingsComponentComponent } from './dataBinding/siblings-component/siblings-component.component';
import { BackToTopComponent } from './shared/back-to-top/back-to-top.component';
import { MovieComponent } from './jsonDataHandeling/movie/movie.component';

// Custom Directive
import { TitleCaseDirective } from './directive/title-case.directive';
import { ValidateMaxlengthDirective } from './directive/validate-maxlength.directive';

@NgModule({
  declarations: [
    AppComponent,
    AuthLoginComponent,
    ParentComponentComponent,
    ChildComponentComponent,
    SiblingsComponentComponent,
    BackToTopComponent,
    MovieComponent,
    TitleCaseDirective,
    ValidateMaxlengthDirective
  ],
  exports: [TitleCaseDirective, ValidateMaxlengthDirective],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
