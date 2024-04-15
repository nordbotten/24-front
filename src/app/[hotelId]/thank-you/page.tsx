import HotelHeader from "@/Components/Hotels/Single/HotelHeader";
import getHotel from "@/actions/getHotel";
import React, { use } from "react";

type Props = {
  params: {
    hotelId: string;
  };
};

const ThankYouPage: React.FC<Props> = ({ params }) => {
  const hotel = use(getHotel(params.hotelId));

  // TODO: Add booking confirmation details

  return (
    <>
      {hotel.status === "success" && <HotelHeader hotel={hotel.data} />}
      <div className="p-3">
        <h1>Thank you for your booking!</h1>
      </div>
    </>
  );
};

export default ThankYouPage;
