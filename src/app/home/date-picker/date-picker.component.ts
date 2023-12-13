import {
  Component,
  ViewChild,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';
import { IonDatetime } from '@ionic/angular';
import { format, parseISO } from 'date-fns';
import { ISepratedDate } from './time-model';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
})
export class DatePickerComponent {
  @ViewChild('datePicker') dateTime: IonDatetime | undefined;
  @Input() selectedDateCallback: Function | undefined;
  @Output() pickedDate = new EventEmitter<ISepratedDate>;
  dateValue = format(new Date(), 'yyyy-MM-dd') + 'T09:00:00.000Z';
  formateString = '';
  sepratedDate: ISepratedDate | undefined; 
  constructor() {
    this.setToday();
  }

  setToday() {
    this.formateString = format(new Date(), 'MMM/d/yyyy , HH:mm');
  }
  changeDate(value: any) {
    this.dateValue = value;
    this.formateString = format(parseISO(value), 'hh:mm a, EEE, MMM, d, yyyy');
    const dateString: string[] = this.formateString.split(',');
    const seprateDateString: ISepratedDate = {
      hourAndMinutes: dateString[0],
      dayOfTheWeek: dateString[1],
      dayOfTheMonth: dateString[3],
      month: dateString[2],
      Year: dateString[4],
    };
    this.sepratedDate = seprateDateString;
    this.pickedDate.emit(this.sepratedDate)
  }

  close() {
    this.dateTime?.cancel(true);
  }

  select() {
    this.dateTime?.confirm(true);
  }
}
