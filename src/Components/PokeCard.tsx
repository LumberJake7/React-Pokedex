import "bootstrap/dist/css/bootstrap.min.css";

function PokeCard({ id, name, type, base_experience }) {
  const imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <div className="card m-2" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <img src={imgSrc} className="card-img-top" alt={name} />
        <p className="card-text">Type: {type}</p>
        <p className="card-text">EXP: {base_experience}</p>
      </div>
    </div>
  );
}

export default PokeCard;
