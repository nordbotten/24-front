import getHotelList from "@/actions/getHotelList";
import { use } from "react";
import HotelListItem from "./item";

const HotelList = () => {
  const hotels = use(getHotelList());

  if (hotels.status === "error") {
    return <p>Could not load hotels...</p>;
  }

  return (
    <>
      {hotels.data.map((hotel) => (
        <HotelListItem key={hotel.id} hotel={hotel} />
      ))}
    </>
  );
};

export default HotelList;
