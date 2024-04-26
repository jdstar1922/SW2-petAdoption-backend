import { Link } from "react-router-dom";

function PetCard ({ pet }) {

    return (
      <div className="media-elem">
        <img className="img-resize" src={pet.images} />
        <p className="title">{pet.name}</p>
        <p className="title">{pet._id}</p>
        <Link to={`/adopt/inneradopt/${pet._id}`}> More information
        </Link>
      </div>
    );
}

export default PetCard;
//<p className="title">{pet.id}</p>