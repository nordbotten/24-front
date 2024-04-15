import { THotel } from "./Hotel";

export type TRoomType = {
  id: string;
  name: string;
  description: string;
  price: number;
  hotel?: THotel;
  hotelId?: string;
  image?: string;
  _count?: { rooms?: number; bookings?: number };
  // rooms?:       Room[]
  // bookings?:    Booking[]
};
