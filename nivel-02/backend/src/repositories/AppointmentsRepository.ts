import { isEqual } from 'date-fns';
import Appointment from '../models/Appointment';

export default class AppointmentsRepository {
  private appointments: Appointment[];

  constructor() {
    this.appointments = [];
  }

  findByDate(date: Date): Appointment | null {
    const appointment = this.appointments.find(appointment => {
      return isEqual(date, appointment.date);
    });

    return appointment || null;
  }

  create(provider: string, date: Date | string): Appointment {
    const appointment = new Appointment(provider, date);

    this.appointments.push(appointment);

    return appointment;
  }
}
