import { useCurrentLocationContext } from "../context/currentLocationContext";

const LocationButton = ({ selectedLocation }: { selectedLocation: string }) => {
  const { location, updateLocation } = useCurrentLocationContext();

  const isActiveLocation = location === selectedLocation;
  return (
    <button
      className={`btn ${
        isActiveLocation ? "bg-red-500" : "bg-blue-500"
      } hover:bg-blue-700 text-white font-bold py-2 px-4 rounded `}
      onClick={() => updateLocation(selectedLocation)}
    >
      {selectedLocation}
    </button>
  );
};

export default LocationButton;
