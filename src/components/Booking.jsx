import { useEffect, useState } from "react";
import SlideHeadline from "./SlideHeadline";
import { useLoaderData, useLocation } from "react-router";
import BookApplyCard from "./BookApplyCard";
const Booking = () => {
  const places = useLoaderData();
  const { pathname } = useLocation();
  const placeId = pathname.split("/")[2];
  const [placeData, setPlaceData] = useState();
  useEffect(() => {
    const filteredPlace = Object.values(places).find(
      (place) => place.id === placeId
    );
    setPlaceData(filteredPlace);
  }, [places, placeId]);

  return (
    <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-7 justify-between items-center gap-5 mt-20">
      <div className="col-span-2 col-start-2">
        <SlideHeadline
          title={placeData?.title}
          description={placeData?.description}
        />
      </div>
      <div className="flex flex-col gap-5 col-span-2 col-start-5">
        <BookApplyCard place={placeData} title={placeData ? placeData?.title : ''}/>
      </div>
    </div>
  );
};

export default Booking;
