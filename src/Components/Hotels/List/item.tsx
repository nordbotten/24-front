import { Button } from "@/Components/ui/button";
import { THotel } from "@/types/Hotel";
import Image from "next/image";

type Props = {
  hotel: THotel;
};

const HotelListItem: React.FC<Props> = ({ hotel }) => {
  return (
    <a className="flex hover:bg-slate-300 p-3" href={`/${hotel.id}`}>
      <div className="flex-shrink min-w-60">
        <Image
          src={hotel.image || "https://placehold.co/600x400"}
          alt={hotel.name}
          width={200}
          height={100}
          className="max-w-full"
        />
      </div>
      <div className="">
        <h2 className="text-xl">{hotel.name}</h2>
        <p>{hotel.description}</p>
        <Button>Book now</Button>
      </div>
    </a>
  );
};

export default HotelListItem;
