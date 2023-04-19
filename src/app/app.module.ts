
import { ExcelService } from './services/excelExport/excel.service';

import {BrowserModule} from '@angular/platform-browser'
import { NgModule } from '@angular/core';
import { DatePipe, formatNumber, DecimalPipe} from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatSelectModule } from '@angular/material/select';
// import { MyDatePickerModule } from 'my';
import { RecaptchaModule } from 'ng-recaptcha';
import {MatDialogModule, MatDialogRef, MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';


import { PagerService } from './services/pager.service';
import { MomentModule } from 'ngx-moment';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import {NgxMaskModule, IConfig} from 'ngx-mask'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import {MatRadioModule} from '@angular/material/radio';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';

import {MatExpansionModule} from '@angular/material/expansion';

import {MatTabsModule} from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { CookieService } from 'ngx-cookie-service';

import {MatTooltipModule} from '@angular/material/tooltip';

import { BlockCopyPasteDirective } from './directives/block-copy-paste.directive';

import { NgxLoadingModule } from 'ngx-loading';
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';


import { FormatCurrencyPipe } from './pipes/format-currency.pipe';

import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';

import { FormatNumberPipe } from './pipes/format-number.pipe';



import { QRCodeModule } from 'angularx-qrcode';
import { MatSortModule } from '@angular/material/sort';
import { LoginComponent } from './components/login/login.component';





const MY_DATE_FORMAT = {

  display: {
    dateInput: 'DD.MM.YYYY', // this is how your date will get displayed on the Input
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  }
};
export var options: Partial<IConfig> | (() => Partial<IConfig>);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
   
  ],
  imports: [
    //MINE
    

    //BEFORE
    AppRoutingModule,
    NgxDaterangepickerMd.forRoot(
      {customRangeLabel: 'Прилагоден опсег'}
    ),
    NgxMaskModule.forRoot(options),
    ToastrModule.forRoot({
      timeOut: 4000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    BrowserAnimationsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatExpansionModule,
    MatTabsModule,
    MatListModule,
    MatTooltipModule,
    MatDialogModule,
    MatSortModule,
    MatFormFieldModule,
    MatSortModule,
    NgxLoadingModule.forRoot({
      position:"fixed"
    })

  ],
  providers: [
              PagerService,
             
              ExcelService,
              FormatCurrencyPipe,
              CookieService,
              DatePipe,
              FormatNumberPipe,
              DecimalPipe,
              { provide: MatDialogRef, useValue: {} },
              { provide: MAT_DIALOG_DATA, useValue: [] },
              {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}},
              { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
              { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMAT }
            ],
  bootstrap: [AppComponent],
})
export class AppModule { }
