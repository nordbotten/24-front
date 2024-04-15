import HotelList from "@/Components/Hotels/List";
import Loader from "@/Components/Utils/Loader";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl bg-white my-10 shadow-lg rounded-lg p-4">
      <h1 className="text-2xl">Please choose your hotel</h1>
      <Suspense fallback={<Loader />}>
        <HotelList />
      </Suspense>
    </div>
  );
}
