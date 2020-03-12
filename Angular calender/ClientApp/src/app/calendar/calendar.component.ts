import { Component, OnInit, ViewChild,Output, EventEmitter, Renderer2, AfterViewInit } from '@angular/core';
import { Moment } from 'moment';
import * as moment from 'moment';
import { unitOfTime } from 'moment';
import { MatCalendar, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})

export class CalendarComponent implements OnInit {
  @ViewChild('calendar') calendar: MatCalendar<Moment>;
 
  //selectedDate = new Date('2019/09/26');
  //@Output()
  //dateSelected: EventEmitter<Moment> = new EventEmitter();

  //@Output()
  //selectedDate = moment();

  selectedDate = new Date('2019/09/26');
  startAt = new Date('2019/09/11');
  minDate = new Date('2019/09/14');
  maxDate = new Date(new Date().setMonth(new Date().getMonth() + 1));
  year: any;
  DayAndDate: string;
  constructor(private renderer: Renderer2) {
   // this.dateChanged(this.selectedDate);
  }

  ngOnInit() {
  }
  onSelect(event) {
    this.selectedDate = event;

    const dateString = event.toDateString();
    const dateValue = dateString.split(' ');
    this.year = dateValue[3];
    this.DayAndDate = dateValue[0] + ',' + ' ' + dateValue[1] + ' ' + dateValue[2];
  }

  myDateFilter = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }
  //ngAfterViewInit() {
  //  const button = document.querySelectorAll('.mat-calendar-previous-button,.mat-calendar-next-button');
  //  if (button) {
  //    Array.from(button).forEach(c => {
  //      this.renderer.listen(c, 'click', () => {
  //        console.log('Arrow click');
  //      });
  //    });
  //  }
  //}

  //monthSelected(date: Moment) {
  //  console.log('month changed');
  //}
  //dateChanged(event) {
  // // this.selectedDate = event;
  //  this.calendar.activeDate = this.selectedDate;
  //  this.dateSelected.emit(this.selectedDate);
  //}

  //preDay(event) {
  //  const units = 'Days';
  //  const prevMoment = moment(this.selectedDate).add(-1, <unitOfTime.DurationConstructor>units);
  //  this.selectedDate = prevMoment;
  //  this.dateChanged(event);
  //}
  //today(event) {
  //  this.selectedDate = moment();
  //  this.dateChanged(event);
  //}
  //nextDay(event) {
  //  const nextMoment = moment(this.selectedDate).add(1, <unitOfTime.DurationConstructor>'Days');
  //  this.selectedDate = nextMoment;
  //  this.dateChanged(event);
  //}
}
