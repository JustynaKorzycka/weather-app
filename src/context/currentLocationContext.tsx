import { useContext, useState, createContext, ReactNode } from "react";

export interface ICurrentLocationContext {
  location: string;
  updateLocation: (location: string) => void;
}

export interface ICurrentLocationProps {
  children: ReactNode;
}

export const CurrentLocationContext =
  createContext<ICurrentLocationContext | null>(null);

export const CurrentLocationContextProvider = ({
  children,
}: ICurrentLocationProps) => {
  const [currentLocation, setCurrentLocation] = useState("");

  const updateCurrentLocation = (location: string) =>
    setCurrentLocation(location);

  return (
    <CurrentLocationContext.Provider
      value={{
        location: currentLocation,
        updateLocation: updateCurrentLocation,
      }}
    >
      {children}
    </CurrentLocationContext.Provider>
  );
};

export const useCurrentLocationContext = () => {
  const ctx = useContext(CurrentLocationContext);
  if (!ctx) {
    throw new Error(
      "Missing currentLocationContext, it's not wrapped in provider"
    );
  }
  return ctx;
};
