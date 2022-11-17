import React, { useMemo } from "react";
import { GoogleMap, Marker, Circle } from "@react-google-maps/api";
import { useRef, useEffect, useState } from "react";
import { useCallback } from "react";

const Map = ({ rad, lodgeData }) => {
  const center = useMemo(() => ({ lat: 13.7299, lng: 100.7782 }), []);
  const mapRef = useRef();
  const options = useMemo(
    () => ({
      disableDefaultUI: true,
      clickalbeIcons: false,
      mapId: "9cc8b6e30219f4b2",
    }),
    []
  );
  const [lodgess, setLodgess] = useState([]);

  const onLoad = useCallback((map) => (mapRef.current = map), []);

  function handleOnclick(e) {
    console.log("lat:" + e.latLng.lat() + ", lng:" + e.latLng.lng());
  }

  useEffect(() => {
    setLodgess(lodgeData);
  }, [lodgeData]);

  return (
      <GoogleMap
        zoom={15}
        center={{ lat: 13.7299, lng: 100.7782 }}
        mapContainerClassName="w-auto h-[32rem]"
        options={options}
        onLoad={onLoad}
        onClick={handleOnclick}
      >
        <>
          <Marker position={center} />
          <Circle
            center={center}
            options={{ fillColor: "green", strokeColor: "green" }}
            radius={rad}
          />
        </>
        {lodgess.map((lodge) => {
          return (
            <Marker
              key={lodge.lodgeId}
              position={{
                lat: lodge.information.lat,
                lng: lodge.information.lng,
              }}
              label={lodge.information.name}
            />
          );
        })}
      </GoogleMap>
  );
};

export default Map;
