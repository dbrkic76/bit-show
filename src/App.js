import { useCallback, useEffect, useState } from "react";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [show, setShow] = useState(null);

  const fetchSelectedShow = useCallback(async () => {
    if (selectedOption) {
      const url = `https://api.tvmaze.com/shows/${selectedOption}`;
      const response = await fetch(url);
      const data = await response.json();
      setShow(data);
    }
  }, [selectedOption]);

  const fetchSearchedShows = async (query) => {
    const response = await fetch(
      `https://api.tvmaze.com/search/shows?q=${query}`
    );
    const data = await response.json();
    setOptions(data);
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchQuery(value);
    if (value) {
      fetchSearchedShows(value);
    } else {
      setOptions([]);
    }
  };

  const handleSelectChange = (event) => {
    const selectedID = event.target.value;

    setSelectedOption(selectedID);
    fetchSelectedShow(selectedOption);
    console.log(selectedID);
  };

  useEffect(() => {
    if (selectedOption) {
      fetchSelectedShow(selectedOption);
    }
  }, [selectedOption]);

  return (
    <>
      <input
        type="text"
        onInput={(event) => handleInputChange(event)}
        value={searchQuery}
      />

      {options.length > 0 && (
        <select onChange={handleSelectChange}>
          {options?.map((show) => {
            return (
              <option key={show.show.id} value={show.show.id}>
                {show.show.name}
              </option>
            );
          })}
        </select>
      )}
      {show && (
        <div>
          <p>{show.name}</p>
        </div>
      )}
    </>
  );
};

export default App;
