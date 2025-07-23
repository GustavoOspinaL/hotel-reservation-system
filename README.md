# Hotel Reservation System

Este proyecto implementa una solución simplificada para la gestión de reservas de un hotel, siguiendo una **arquitectura en capas** y aplicando el patrón de diseño **Facade (GoF)** para abstraer la complejidad del sistema de reservas y ofrecer una interfaz simple a los usuarios del sistema.

## Estructura del Proyecto

- `services/`
  - `ReservationService.ts`: Contiene la lógica de negocio para manejar reservas, precios, disponibilidad y validaciones.
- `facades/`
  - `HotelReservationFacade.ts`: Implementa el patrón *Facade*, exponiendo métodos simples para crear, confirmar o cancelar reservas sin necesidad de interactuar directamente con los servicios internos.
- `utils/`
  - `Logger.ts`: Este archivo define una clase utilitaria Logger encargada de centralizar y estandarizar los mensajes de log del sistema.

## Ejemplo de uso del Facade 

import { HotelBookingFacade } from './services/HotelBookingFacade';

const facade = new HotelBookingFacade();
facade.bookRoom(101, 12);