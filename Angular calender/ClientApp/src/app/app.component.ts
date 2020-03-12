import { Component, ViewChild ,Output, Input} from '@angular/core';
import { CalendarComponent } from './calendar/calendar.component';
import { Moment } from 'moment';
import * as moment from 'moment';
import { FullCalendarOptions, EventObject } from 'ngx-fullcalendar';
import { DialogComponentComponent } from './dialog-component/dialog-component.component';
import { filter } from 'rxjs/operators';
import { MatDialogRef, MatDialog } from '@angular/material';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //@ViewChild('calendar')
  //myCalendar: CalendarComponent;
  fileNameDialogRef: MatDialogRef<DialogComponentComponent>;
  options: FullCalendarOptions;
  events: EventObject[];
  files = [];
  @Input()
  selectedDate = moment();
  
  dateSelected(value: Moment) {
    // alert(value);
    this.selectedDate = value;
  }
 
  constructor(private dialog: MatDialog) {
   
  }

  ngOnInit() {
    this.options = {
      defaultDate: new Date(),
      editable: true,
    };
    this.events = [
      { id: 'a', title: 'My Birthday', allDay: true },
      { id: 'b', title: 'Friends coming round', url: 'images/pendingtask.png', start: '2020-01-11T18:00:00', end: '2020-01-11T23:00:00' }
    ]
  }
  openAddFileDialog() {
    this.fileNameDialogRef = this.dialog.open(DialogComponentComponent, {
      hasBackdrop: false
    });

    this.fileNameDialogRef
      .afterClosed()
      .pipe(filter(name => name))
      .subscribe(name => this.files.push({ name, content: '' }));
  }
  
}

