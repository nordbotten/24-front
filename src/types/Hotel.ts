import { TRoomType } from "./RoomType";

export type THotel = {
  id: string;
  name: string;
  description?: string;
  address?: string;
  postCode?: string;
  city?: string;
  latitude?: number;
  longitude?: number;
  image?: string;
  // users?:       User[]
  roomTypes?: TRoomType[];
  // rooms?:       Room[]
};
