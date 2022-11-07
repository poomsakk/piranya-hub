import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const FilterPage = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API,
  });
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className="w-full bg-white max-w-screen-xl">
      <GoogleMap
        zoom={17}
        center={{ lat: 13.7299, lng: 100.7782 }}
        mapContainerClassName="w-full h-screen"
      >
        <Marker position={{ lat: 13.7299, lng: 100.7782 }} />
      </GoogleMap>
    </div>
  );
};

export default FilterPage;
