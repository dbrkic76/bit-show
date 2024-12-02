import "../App.css";
import React, { useState, useEffect } from "react";
import { Card } from "./Card";

const URL = "https://api.tvmaze.com/search/shows/"

const HomePage = () => {
  const [selectedShow, setSelectedShow] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [data, selectedShow]);
  return (
    <>
      <div className="wrapper">

      </div>
    </>
  )
}







// const HomePage = ({ data, setSelectedShow }) => {
//   const topFifty = data
//     .sort((a, b) => b.rating.average - a.rating.average)
//     .slice(0, 50);

//   return (
//     <div className="cards-wrapper">
//       {topFifty.map((item) => {
//         return (
//           <Card
//             key={item.id}
//             selectedShow={item}
//             setSelectedShow={setSelectedShow}
//           />
//         );
//       })}
//     </div>
//   );
// };

export default HomePage;
