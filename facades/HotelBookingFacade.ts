import { RoomService } from '../services/RoomService';
import { CustomerService } from '../services/CustomerService';
import { ReservationService } from '../services/ReservationService';
import { Logger } from '../utils/Logger';

export class HotelBookingFacade {
  public bookRoom(customerId: number, roomId: number): void {
    const logger = Logger.getInstance();
    const roomService = RoomService.getInstance();
    const customerService = CustomerService.getInstance();
    const reservationService = ReservationService.getInstance();

    logger.log('Iniciando proceso de reserva...');

    if (!roomService.isRoomAvailable(roomId)) {
      logger.log(`La habitación ${roomId} no está disponible.`);
      return;
    }

    const customer = customerService.getCustomerDetails(customerId);
    const reservationId = reservationService.createReservation(roomId, customerId);

    logger.log(`Reserva completada: ${reservationId} para cliente ${customerId}`);
  }
}
