import React, { useMemo } from "react";
import { GoogleMap, Marker, Circle } from "@react-google-maps/api";
import { useRef } from "react";
import { useCallback } from "react";
import Logo from "../image/logo.png";

const Map = () => {
  const center = useMemo(() => ({ lat: 13.7299, lng: 100.7782 }), []);
  const mapRef = useRef();
  const options = useMemo(
    () => ({
      disableDefaultUI: true,
      clickalbeIcons: false,
    }),
    []
  );
  const onLoad = useCallback((map) => (mapRef.current = map), []);

  return (
    <GoogleMap
      zoom={17}
      center={{ lat: 13.7299, lng: 100.7782 }}
      mapContainerClassName="w-3/4 h-screen"
      options={options}
      onLoad={onLoad}
    >
      <>
        <Marker position={center} />
		<Circle center={center} radius={150}/>
      </>
    </GoogleMap>
  );
};

export default Map;
