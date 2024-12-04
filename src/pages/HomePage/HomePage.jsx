import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useNavigate } from "react-router";

export const HomePage = ({ showsData }) => {
  const navigate = useNavigate();

  const sortedData = showsData.sort(
    (a, b) => b.rating.average - a.rating.average
  );

  return (
    <>
      <Header />
      <div className="shows-wrapper">
        {sortedData.slice(0, 50).map((show) => (
          <div
            className="card"
            key={show.id}
            onClick={() => {
              navigate(`/show/${show.id}`);
            }}>
            <img src={show.image.medium} />
            <h3>{show.name}</h3>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};
