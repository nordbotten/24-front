import { THotel } from "@/types/Hotel";
import Image from "next/image";
import React from "react";

type Props = {
  hotel: THotel;
};

const HotelHeader: React.FC<Props> = ({ hotel }) => {
  return (
    <div>
      <div className="h-40 relative">
        <Image
          src={hotel.image || "https://placehold.co/600x400"}
          alt={hotel.name}
          priority={true}
          fill={true}
          style={{
            objectFit: "cover", // cover, contain, none
          }}
          className="rounded-t-lg"
        />
      </div>
      <div className="p-4">
        <div className="">
          <h1 className="text-xl">{hotel.name}</h1>
          <p>{hotel.description}</p>
        </div>
      </div>
    </div>
  );
};

export default HotelHeader;
