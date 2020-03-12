import { Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-full-calendar',
  templateUrl: './full-calendar.component.html',
  styleUrls: ['./full-calendar.component.css']
})
export class FullCalendarComponent implements OnInit {
  // references the #calendar in the template
  @ViewChild('fullcalendar') calendarComponent: FullCalendarComponent;

 // calendarPlugins = [dayGridPlugin]; // important!
  //calendarEvents = [
  //  { title: 'event 1', date: '2019-04-01' }
  //];
  
  constructor() { }

  ngOnInit() {
    var calendarDiv: HTMLElement = document.getElementById('calendar');

  }
 

 
}

