import React, { useMemo } from "react";
import { GoogleMap, Marker, Circle } from "@react-google-maps/api";
import { useRef,useEffect,useState } from "react";
import { useCallback } from "react";
import { landLordApi } from "../axiosConfig";

const Map = ({rad}) => {
  const center = useMemo(() => ({ lat: 13.7299, lng: 100.7782 }), []);
  const mapRef = useRef();
  const options = useMemo(
    () => ({
      disableDefaultUI: true,
      clickalbeIcons: false,
    }),
    []
  );
  const [lodges, setLodges] = useState([])

  const onLoad = useCallback((map) => (mapRef.current = map), []);

  
  const getLodge = () => {
    landLordApi.get("/lodge/list")
        .then((response) => setLodges(response.data))
        .catch(error => console.log(error))
  }

  function handleOnclick(e){
    console.log("lat:" + e.latLng.lat() + ", lng:" + e.latLng.lng())
  }

useEffect(() => {
    getLodge()
}, [])

  return (
    <GoogleMap
      zoom={17}
      center={{ lat: 13.7299, lng: 100.7782 }}
      mapContainerClassName="w-3/4 h-screen"
      options={options}
      onLoad={onLoad}
      onClick={handleOnclick}
    >
      <>
        <Marker position={center} />
		<Circle center={center} radius={rad}/>
      </>
      {lodges.map((lodge)=>{
        return <Marker key={lodge.lodgeId}
        position={{lat:lodge.information.lat,lng:lodge.information.lng}}
        label={lodge.information.name}
        />
      })}
    </GoogleMap>
  );
};

export default Map;
