"use client";

import React from "react";
import { TRoomType } from "@/types/RoomType";
import Image from "next/image";
import { Button } from "@/Components/ui/button";
import { useParams, useRouter, useSearchParams } from "next/navigation";

type Props = {
  room: TRoomType;
  disableButton?: boolean;
};

const AvailableRoomItem: React.FC<Props> = ({ room, disableButton }) => {
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();
  const selected = searchParams.get("roomType") || "";
  const handleSelect = () => {
    router.push(`/${params.hotelId}/${room.id}?${searchParams.toString()}`);
  };
  const disabled =
    !disableButton &&
    typeof room._count?.rooms === "number" &&
    room._count?.rooms < 1;
  return (
    <div
      className={`flex items-center py-6 border-b ${
        disabled ? "opacity-50" : "opacity-100"
      }`}
    >
      <div className="min-w-60 pr-2">
        <Image
          src={room.image || "https://placehold.co/600x400"}
          width={200}
          height={150}
          alt={room.name}
        />
      </div>
      <div className="">
        <h2 className="text-xl">{room.name}</h2>
        <p>{room.description}</p>
        <p>Price per day: {room.price}</p>
        {typeof room._count?.rooms !== undefined && (
          <p>Available rooms: {room._count?.rooms}</p>
        )}
      </div>
      {!disableButton && (
        <div className="min-w-24 text-right">
          <Button
            disabled={disabled}
            variant={selected === room.id ? "outline" : "default"}
            onClick={handleSelect}
          >
            Choose
          </Button>
        </div>
      )}
    </div>
  );
};

export default AvailableRoomItem;
