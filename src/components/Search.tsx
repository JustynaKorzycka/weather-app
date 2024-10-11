import { useState } from "react";
import { useCurrentLocationContext } from "../context/currentLocationContext";

import { AsyncPaginate } from "react-select-async-paginate";
import { ISearchData } from "../types/searchData";
import { loadOptions } from "../services/loadLocationOptions";

interface IProps {
  onRecentSearchChange: (value: string) => void;
}

const Search = ({ onRecentSearchChange }: IProps) => {
  const [searchValue, setSearchValue] = useState<ISearchData | null>(null);
  const { updateLocation } = useCurrentLocationContext();

  const handleOnChange = (e: ISearchData | null) => {
    setSearchValue(e);
    if (e) {
      updateLocation(e.value);
      onRecentSearchChange(e.value);
    }
  };

  return (
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={600}
      value={searchValue}
      onChange={handleOnChange}
      loadOptions={loadOptions}
      className="w-[100%] sm:w-80"
    />
  );
};

export default Search;
