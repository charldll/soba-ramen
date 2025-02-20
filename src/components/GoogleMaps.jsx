import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 53.13345442757529, // Szerokość geograficzna
  lng: 17.968241976977655, // Długość geograficzna
};

export default function Map() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDyqnxhKYenuX_gBTOSsATI_HABDCrMmFE", // klucz API
  });

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={18}
    ></GoogleMap>
  ) : (
    <p>Ładowanie mapy...</p>
  );
}
