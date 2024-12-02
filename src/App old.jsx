import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import React, { useState, useEffect } from "react";
import HomePage from "./components/HomePage";
import SingleShowPage from "./components/SingleShowPage";
import { Routes, Route, Navigate } from "react-dom"


const URL = "https://api.tvmaze.com/shows";

const App = () => {
  const [selectedShow, setSelectedShow] = useState(null);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [data, selectedShow]);

//   return (
//     <>
//       <Header />
//       <div className="main">
//         {!selectedShow ? (
//           <HomePage data={data} setSelectedShow={setSelectedShow} />
//         ) : (
//           <SingleShowPage
//             selectedShow={selectedShow}
//             setSelectedShow={setSelectedShow}
//           />
//         )}
//       </div>
//       <Footer />
//     </>
//   );
// };

export default App;
