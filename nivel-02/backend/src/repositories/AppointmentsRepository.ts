import { isEqual } from 'date-fns';
import Appointment from '../models/Appointment';

interface CreateAppointmentDTO {
  provider: string;
  date: Date;
}

export default class AppointmentsRepository {
  private appointments: Appointment[];

  constructor() {
    this.appointments = [];
  }

  all(): Appointment[] {
    return this.appointments;
  }

  findByDate(date: Date): Appointment | null {
    const appointment = this.appointments.find(appointment => {
      return isEqual(date, appointment.date);
    });

    return appointment || null;
  }

  create({ provider, date }: CreateAppointmentDTO): Appointment {
    const appointment = new Appointment({
      provider,
      date,
    });

    this.appointments.push(appointment);

    return appointment;
  }
}
