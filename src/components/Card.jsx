export const Card = ({ selectedShow, setSelectedShow }) => {
  return (
    <div
      className="card"
      onClick={() => {
        setSelectedShow(selectedShow);
      }}
    >
      <img src={selectedShow.image.medium} alt="selectedShow" />
      <h3>{selectedShow.name}</h3>
    </div>
  );
};
