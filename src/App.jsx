import { useEffect, useState } from "react";
import "./App.css";
import { HomePage } from "./pages/HomePage/HomePage";
import { SinglePage } from "./pages/SinglePage/SinglePage";
import { SHOW_URL } from "./constants";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [data, setData] = useState([]);
  // const [clickedShow, setClickedShow] = useState(null)

  useEffect(() => {
    fetch(SHOW_URL)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage showsData={data} />} />
        <Route path="/show/:id" element={<SinglePage data={data} />} />
      </Routes>
    </div>
  );
}

export default App;
