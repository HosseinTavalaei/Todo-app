import { Component, ViewChild, Output, EventEmitter, Input} from '@angular/core';
import { IonDatetime } from '@ionic/angular';
import { format, parseISO } from 'date-fns';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
})
export class DatePickerComponent {
  @ViewChild('datePicker') dateTime: IonDatetime | undefined;
  @Input() selectedDateCallback: Function | undefined;
  dateValue = format(new Date(), 'yyyy-MM-dd')+'T09:00:00.000Z';
  formateString = '';
  
  constructor() {
    this.setToday()
  }

  setToday(){
    this.formateString = format(new Date(), 'MMM/d/yyyy , HH:mm')
  }
  changeDate(value: any){
    this.dateValue = value;
    this.formateString = format(parseISO(value), 'HH:mm, MMM d, yyyy')
 
  }

  close(){
    this.dateTime?.cancel(true)
  }

  select(){
    this.dateTime?.confirm(true)
  }


}
