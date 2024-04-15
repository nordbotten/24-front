import AvailableRooms from "@/Components/Hotels/Single/AvailableRooms";
import DateRangePicker from "@/Components/Hotels/Single/DateRangePicker";
import HotelHeader from "@/Components/Hotels/Single/HotelHeader";
import getAvailableRoomTypes from "@/actions/getAvailableRoomTypes";
import getHotel from "@/actions/getHotel";
import { paramsToDate } from "@/lib/utils";

type Props = {
  params: {
    hotelId: string;
  };
  searchParams: {
    fromDate?: string;
    toDate?: string;
  };
};

const HotelPage: React.FC<Props> = async ({ params, searchParams }) => {
  const hotel = await getHotel(params.hotelId);

  const fromDate = searchParams?.fromDate
    ? new Date(searchParams.fromDate)
    : undefined;
  const toDate = searchParams?.toDate
    ? new Date(searchParams.toDate)
    : undefined;
  const rooms = await getAvailableRoomTypes(params.hotelId, fromDate, toDate);

  if (hotel.status === "error") {
    return <p>Could not load hotels...</p>;
  }
  const date = searchParams ? paramsToDate(searchParams) : undefined;

  return (
    <>
      <HotelHeader hotel={hotel.data} />
      <div className="py-6 flex items-center justify-between">
        <div></div>
        <div className="text-center">
          Select dates
          <br />
          <DateRangePicker />
        </div>
        <div></div>
      </div>
      <div className="px-4 py-6">
        <AvailableRooms hotel={hotel.data} date={date} />
      </div>
    </>
  );
};

export default HotelPage;
