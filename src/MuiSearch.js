import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const ComboBox = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [options, setOptions] = useState([]);

  const fetchShows = async (query) => {
    try {
      fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
        .then((res) => res.json())
        .then((data) => {
          const shows = data.map((item) => ({
            id: item.show.id,
            label: item.show.name,
          }));
          setOptions(shows);
        });
    } catch (error) {
      console.error("Error fetching shows:", error);
      setOptions([]);
    }
  };

  const handleInputChange = (event, value) => {
    setSearchQuery(value);

    if (value.trim()) {
      fetchShows(value);
    } else {
      setOptions([]);
    }
  };

  const handleOptionSelect = (event, value) => {
    if (value) {
      console.log("Selected Show:", value);
    }
  };

  return (
    <Autocomplete
      options={options}
      onInputChange={handleInputChange}
      onChange={handleOptionSelect}
      inputValue={searchQuery}
      renderInput={(params) => <TextField {...params} label="Search Shows" />}
    />
  );
};

export default ComboBox;
