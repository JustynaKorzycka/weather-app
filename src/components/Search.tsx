import { useEffect, useState } from "react";
import { useCurrentLocationContext } from "../context/currentLocationContext";

import { AsyncPaginate } from "react-select-async-paginate";
import { ISearchData } from "../types/searchData";
import { loadOptions } from "../services/loadLocationOptions";

const Search = () => {
  const [searchValue, setSearchValue] = useState<ISearchData | null>(null);
  const { updateLocation } = useCurrentLocationContext();

  useEffect(() => {
    if (searchValue) updateLocation(searchValue.value);
  }, [searchValue]);

  return (
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={600}
      value={searchValue}
      onChange={setSearchValue}
      loadOptions={loadOptions}
      className="w-[100%] sm:w-80"
    />
  );
};

export default Search;
