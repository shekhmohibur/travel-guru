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
    <div className="flex w-full flex-col lg:flex-row justify-around items-center gap-10 lg:mt-20">
      <div className="lg:max-w-[600px]">
        <SlideHeadline
          title={placeData?.title}
          description={placeData?.description}
        />
      </div>
      <div className="flex flex-col gap-5 w-full lg:w-[600px]">
        <BookApplyCard place={placeData} title={placeData ? placeData?.title : ''}/>
      </div>
    </div>
  );
};

export default Booking;
