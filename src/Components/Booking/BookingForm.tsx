"use client";

import { useSearchParams } from "next/navigation";
import React from "react";
import { calculateNights, formatDate } from "@/lib/utils";
import submitBooking from "@/actions/submitBooking";
import { Button } from "@/Components/ui/button";
import { THotel } from "@/types/Hotel";
import { TRoomType } from "@/types/RoomType";
import { useFormState, useFormStatus } from "react-dom";

type Props = {
  hotel: THotel;
  room: TRoomType;
};

const BookingForm: React.FC<Props> = ({ hotel, room }) => {
  const [state, formAction] = useFormState(submitBooking, { status: "idle" });
  const searchParams = useSearchParams();

  const fromDate = new Date(searchParams.get("fromDate") || "");
  const toDate = new Date(searchParams.get("toDate") || "");
  const roomType = room.id;
  const roomNumber = searchParams.get("roomNumber") || "";

  // const roomTypes = use(getAvailableRoomTypes(hotel.id, fromDate, toDate));

  if (state.status === "success") {
    window.location.href = `/${hotel.id}/thank-you`;
  }

  const nights = calculateNights(fromDate, toDate);

  return (
    <form action={formAction} method="POST">
      <h2 className="text-xl">Book your stay now!</h2>
      {state.status === "error" && (
        <p className="bg-red-200 border border-red-400 p-3">{state.message}</p>
      )}
      <p>Room type: {room?.name}</p>
      <p>Check-in: {formatDate(fromDate)}</p>
      <p>Check-out: {formatDate(toDate)}</p>
      <p>Nights: {nights}</p>
      <p>Price per night: {room?.price},-</p>
      <p>Total: {(room?.price || 0) * nights},-</p>
      <input type="hidden" name="hotelId" value={hotel.id} />
      <input type="hidden" name="fromDate" value={formatDate(fromDate)} />
      <input type="hidden" name="toDate" value={formatDate(toDate)} />
      <input type="hidden" name="roomType" value={roomType} />
      <input type="hidden" name="roomNumber" value={roomNumber} />
      <div className="">
        <label htmlFor="name" className="block">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          className="p-2 border block w-full"
        />
      </div>
      <div className="">
        <label htmlFor="email" className="block">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          className="p-2 border block w-full"
        />
      </div>
      <div className="">
        <label htmlFor="phone" className="block">
          Phone
        </label>
        <input
          type="tel"
          name="phone"
          id="phone"
          placeholder="Phone"
          className="p-2 border block w-full"
        />
      </div>
      <SubmitButton />
    </form>
  );
};

const SubmitButton = () => {
  const status = useFormStatus();
  return (
    <Button disabled={status.pending} type="submit" className="mt-2">
      Book Now
    </Button>
  );
};

export default BookingForm;
