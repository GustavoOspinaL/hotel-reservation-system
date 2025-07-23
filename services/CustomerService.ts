import { Logger } from '../utils/Logger';

export class CustomerService {
  private static instance: CustomerService;

  private constructor() {}

  public static getInstance(): CustomerService {
    if (!CustomerService.instance) {
      CustomerService.instance = new CustomerService();
    }
    return CustomerService.instance;
  }

  public getCustomerDetails(customerId: number): object {
    Logger.getInstance().log(`Fetching customer ${customerId}`);
    return { id: customerId, name: 'Juan Pérez' };
  }
}