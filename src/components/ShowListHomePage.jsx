import React from "react";
import { Card } from "./Card";

const ShowListHomePage = ({ data, setSelectedShow }) => {
  const topFifty = data
    .sort((a, b) => b.rating.average - a.rating.average)
    .slice(0, 50);

  return (
    <div className="cards-wrapper">
      {topFifty.map((item) => {
        return (
          <Card
            key={item.id}
            selectedShow={item}
            setSelectedShow={setSelectedShow}
          />
        );
      })}
    </div>
  );
};

export default ShowListHomePage;
