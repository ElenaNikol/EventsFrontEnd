import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatDatepickerModule } from '@angular/material/datepicker'; 
import { MatNativeDateModule } from '@angular/material/core'; 
import { MatInputModule } from '@angular/material/input'; 
import { MatDialogModule } from '@angular/material/dialog'; 
import { MatButtonModule } from '@angular/material/button'; 
import { MatButtonToggleModule } from '@angular/material/button-toggle'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { AllEventsComponent } from './components/all-events/all-events.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    AllEventsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatFormFieldModule, 
    MatDatepickerModule, 
    MatNativeDateModule, 
    MatInputModule, 
    MatDialogModule, 
    MatButtonModule, 
    MatButtonToggleModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
