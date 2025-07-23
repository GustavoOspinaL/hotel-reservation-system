import { Logger } from '../utils/Logger';

export class RoomService {
  private static instance: RoomService;

  private constructor() {}

  public static getInstance(): RoomService {
    if (!RoomService.instance) {
      RoomService.instance = new RoomService();
    }
    return RoomService.instance;
  }

  public isRoomAvailable(roomId: number): boolean {
    Logger.getInstance().log(`Checking availability for room ${roomId}`);
    return true; // Simulación
  }
}