import React, { useState } from "react";
import { useEffect } from "react";
import ShowListHomePage from "./ShowListHomePage";
import SingleShowCard from "./SingleShowCard";

const URL = "https://api.tvmaze.com/shows";

const Main = () => {
  const [selectedShow, setSelectedShow] = useState(null);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [data, selectedShow]);

  return (
    <div className="main">
      {!selectedShow ? (
        <ShowListHomePage data={data} setSelectedShow={setSelectedShow} />
      ) : (
        <SingleShowCard
          selectedShow={selectedShow}
          setSelectedShow={setSelectedShow}
        />
      )}
    </div>
  );
};

export default Main;
