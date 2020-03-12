import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatDatepickerModule, MatNativeDateModule, MatDialogModule, MatFormFieldModule } from '@angular/material';
import { CalendarComponent } from './calendar/calendar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FullCalendarComponent } from './full-calendar/full-calendar.component';
import { NgxFullCalendarModule } from 'ngx-fullcalendar';
import { DialogComponentComponent } from './dialog-component/dialog-component.component';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    CalendarComponent,
    FullCalendarComponent,
    DialogComponentComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatMomentDateModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxFullCalendarModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule ,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ])
  ],
  entryComponents: [DialogComponentComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
