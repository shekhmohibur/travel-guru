import { use } from "react";
import OriginSelector from "./OriginSelector";
import BookingTime from "./BookingTime";
const originPromise = fetch("/origin.json").then((res) => res.json());
const BookApplyCard = ({ title }) => {
  const origin = use(originPromise);
  return (
    <div className="bg-white p-5 flex flex-col gap-4 font-montserrat rounded-md">
      <div className="flex flex-col gap-1">
        <label className="text-black/50 font-semibold font-montserrat text-lg">
          Orgin
        </label>
        <OriginSelector origin={origin} />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-black/50 font-semibold font-montserrat text-lg">
          Destination
        </label>
        <input
          type="text"
          value={title}
          className="bg-base-300 placeholder:font-medium w-full rounded-sm py-4 px-3 font-extrabold outline-none text-lg"
          readOnly
        />
      </div>
      <div>
        <BookingTime/>
      </div>
      <button className="bg-primary py-4 text-lg font-semibold rounded-md cursor-pointer">Start Booking</button>
    </div>
  );
};

export default BookApplyCard;
