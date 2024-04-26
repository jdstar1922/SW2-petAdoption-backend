import { useNavigate, useParams } from "react-router-dom";
import { usePets } from "../context/PetContext";
function InnerAdopt (){
  const navigate = useNavigate();
  const params = useParams();
  const { pets } = usePets();
  const pet = pets.find(pet=> pet._id === params.id)
  return (
    <>
      <div>
        
        <div className="MDtitulo">
          <hr />
          <h2>Pet Information</h2>
          <hr />
        </div>

        <div className="frame-In">
          <div className="img-In">
            <div className="img-In-pic">
              <img className="img-resize" src={pet.images[0]} alt="Dog"/>
            </div>
            <div className="img-In-btn">
              <button onClick={() => navigate("/cart")}>ADOPT NOW!</button>
            </div>
          </div>

          <div className="text-In">
            <h1>NAME: {pet.name}</h1>
            <h2>ID: {pet._id}</h2>
            <br />
            <hr />
            <br />
            <ul>
              <li>City: {pet.name}</li>
              <li>State: {pet.state}</li>
              <li>Description: {pet.description}</li>
              <li>Medications: </li>
              <li>
                <ul>
                  {pet.medications.map(medication => (
                    <li key={medication}>{medication}</li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default InnerAdopt;