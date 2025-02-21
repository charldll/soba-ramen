import {
  APIProvider,
  Map,
  AdvancedMarker,
  InfoWindow,
  useMap,
} from "@vis.gl/react-google-maps";
import { useState } from "react";
import Icon from "../Layout/imgs/favicon.svg";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 53.13324, // Szerokość geograficzna
  lng: 17.96802, // Długość geograficzna
};

const zoom = 20;

export default function MyGoogleMap() {
  return (
    <APIProvider apiKey={"AIzaSyDyqnxhKYenuX_gBTOSsATI_HABDCrMmFE"}>
      <Map
        id="map"
        mapId="bfa617ee01033f6c"
        style={containerStyle}
        defaultCenter={center}
        defaultZoom={zoom}
        gestureHandling={"greedy"}
        disableDefaultUI={false}
      >
        <MyGoogleMapContent />
      </Map>
    </APIProvider>
  );
}

export function MyGoogleMapContent() {
  const map = useMap("map");
  const [infoWindowOpen, setInfoWindowOpen] = useState(false);

  const handleMarkerClick = () => {
    setInfoWindowOpen(true);
    map.setZoom(zoom);
    map.setCenter(center);
  };

  return (
    <>
      <AdvancedMarker position={center} onClick={handleMarkerClick}>
        <img src={Icon} width={"40px"} />
      </AdvancedMarker>
      {infoWindowOpen && (
        <InfoWindow
          headerContent={<h3 className="text-xl font-bold">Soba Ramen</h3>}
          position={center}
          onCloseClick={() => setInfoWindowOpen(false)}
        >
          <p>
            Szukasz najlepszego ramenu w mieście? <br></br> Wpadnij do nas w
            godzinach otwarcia!
          </p>
        </InfoWindow>
      )}
    </>
  );
}
