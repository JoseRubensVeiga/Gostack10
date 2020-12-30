import { parseISO, startOfHour } from 'date-fns';
import { v4 as uuid } from 'uuid';

export default class Appointment {
  id: string;

  provider: string;

  date: Date;

  constructor(provider: string, date: Date | string) {
    this.provider = provider;
    this.date = this.parseDate(date);
    this.id = uuid();
  }

  private parseDate(date: Date | string): Date {
    if (typeof date === 'string') {
      return startOfHour(parseISO(date));
    }

    return startOfHour(date);
  }
}
