import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { TeachersComponent } from './teachers/teachers.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Cmp1Component } from './cmp1/cmp1.component';
import { Cmp2Component } from './cmp2/cmp2.component';
import { Cmp3Component } from './cmp3/cmp3.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    TeachersComponent,
    HomeComponent,
    NavbarComponent,
    Cmp1Component,
    Cmp2Component,
    Cmp3Component,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
