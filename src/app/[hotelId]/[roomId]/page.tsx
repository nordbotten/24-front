import BookingForm from "@/Components/Booking/BookingForm";
import AvailableRoomItem from "@/Components/Hotels/Single/AvailableRoomItem";
import HotelHeader from "@/Components/Hotels/Single/HotelHeader";
import getHotel from "@/actions/getHotel";
import getRoom from "@/actions/getRoom";
import React from "react";

type Props = {
  params: {
    hotelId: string;
    roomId: string;
  };
  searchParams: {
    fromDate?: string;
    toDate?: string;
  };
};

const BookingPage: React.FC<Props> = async ({ params, searchParams }) => {
  const hotel = await getHotel(params.hotelId);
  if (hotel.status === "error") {
    return <p>Could not load hotel...</p>;
  }
  if (!searchParams.fromDate || !searchParams.toDate) {
    return <p>Dates not set...</p>;
  }
  const fromDate = searchParams?.fromDate
    ? new Date(searchParams.fromDate)
    : undefined;
  const toDate = searchParams?.toDate
    ? new Date(searchParams.toDate)
    : undefined;
  const room = await getRoom(params.hotelId, params.roomId, fromDate, toDate);
  if (room.status === "error") {
    return <p>Could not load room...</p>;
  }

  return (
    <>
      <HotelHeader hotel={hotel.data} />
      <div className="p-4">
        <AvailableRoomItem room={room.data} disableButton />
        <BookingForm hotel={hotel.data} room={room.data} />
      </div>
    </>
  );
};

export default BookingPage;
