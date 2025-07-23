import { Logger } from '../utils/Logger';

export class ReservationService {
  private static instance: ReservationService;

  private constructor() {}

  public static getInstance(): ReservationService {
    if (!ReservationService.instance) {
      ReservationService.instance = new ReservationService();
    }
    return ReservationService.instance;
  }

  public createReservation(roomId: number, customerId: number): string {
    Logger.getInstance().log(`Creating reservation: room ${roomId}, customer ${customerId}`);
    return `R-${Math.floor(Math.random() * 10000)}`;
  }
}
