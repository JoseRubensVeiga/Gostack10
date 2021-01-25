import Appointment from '../models/Appointment';

import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Appointment)
export default class AppointmentsRepository extends Repository<Appointment> {
  async findByDate(date: Date): Promise<Appointment | null> {
    const findAppoitment = await this.findOne({
      where: { date },
    });

    return findAppoitment || null;
  }
}
