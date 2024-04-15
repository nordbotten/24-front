import { THotel } from "@/types/Hotel";
import React from "react";
import getAvailableRoomTypes from "@/actions/getAvailableRoomTypes";
import AvailableRoomItem from "./AvailableRoomItem";

type Props = {
  hotel: THotel;
  date?: { from?: Date; to?: Date };
};

const AvailableRooms: React.FC<Props> = async ({ hotel, date }) => {
  if (!date || !date.from || !date.to) return null;
  const roomTypes = await getAvailableRoomTypes(hotel.id, date.from, date.to);

  if (!roomTypes || roomTypes.status === "error") {
    return <p>No rooms found</p>;
  }

  return (
    <>
      <h2>Available rooms</h2>
      {roomTypes.data.map((roomType) => (
        <AvailableRoomItem key={roomType.id} room={roomType} />
      ))}
    </>
  );
};

export default AvailableRooms;
