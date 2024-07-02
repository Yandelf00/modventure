import { useEffect, useRef, useMemo } from "react";
import { Loader } from "@googlemaps/js-api-loader";

// Import the type definitions for Google Maps
/// <reference types="@types/google.maps" />

interface MapProps {
  address: string;
}

const Map: React.FC<MapProps> = ({ address }) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
      version: "weekly",
    });

    const initializeMap = async () => {
      await loader.load();

      if (!window.google) {
        console.error("Google Maps JavaScript API failed to load.");
        return;
      }

      const geocoder = new google.maps.Geocoder();
      geocoder.geocode({ address }, (results, status) => {
        if (status === "OK" && results) {
          const map = new google.maps.Map(mapRef.current!, {
            center: results[0].geometry.location,
            zoom: 8,
          });

          new google.maps.Marker({
            map: map,
            position: results[0].geometry.location,
          });
        } else {
          console.error(`Geocode was not successful for the following reason: ${status}`);
        }
      });
    };

    initializeMap();
  }, [address]);

  return <div style={{ height: "400px" }} ref={mapRef} />;
};

export default Map;
