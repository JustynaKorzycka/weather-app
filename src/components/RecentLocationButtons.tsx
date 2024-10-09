import { useEffect, useState } from "react";
import { useCurrentLocationContext } from "../context/currentLocationContext";

import { useQueryClient } from "@tanstack/react-query";
import LocationButton from "./LocationButton";
import { reorderArray } from "../utils/helpers/reorderArrayHelper";

const RecentLocationButtons = () => {
  const { location } = useCurrentLocationContext();
  const [cacheLocations, setCacheLocations] = useState<string[] | []>([]);

  const queryClient = useQueryClient();
  const queryCache = queryClient.getQueryCache();

  useEffect(() => {
    const queryKeys = queryCache.getAll().map((cache) => cache.queryKey);

    let keys: string[] = queryKeys
      .filter((item) => item[1] !== "" && item[0] === "weather")
      .slice(-5)
      .map((item) => item[1] as string);

    if (keys.length > 0) keys = reorderArray(keys, location);

    setCacheLocations(keys);
  }, [location, queryCache]);

  return (
    <div className="flex max-w-100 flex-wrap justify-center gap-3">
      {cacheLocations.map((item) => (
        <LocationButton selectedLocation={item} key={item} />
      ))}
    </div>
  );
};

export default RecentLocationButtons;
