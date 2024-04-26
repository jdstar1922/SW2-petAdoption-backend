import Images from "../img/Images";
import { useNavigate } from "react-router-dom";

function InnerAdopt (){
  const navigate = useNavigate();

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
              <img className="img-resize" src={Images.image1} alt="Dog"/>
            </div>
            <div className="img-In-btn">
              <button onClick={() => navigate("/cart")}>ADOPT NOW!</button>
            </div>
          </div>

          <div className="text-In">
            <h1>NAME</h1>
            <h2>ID:</h2>
            <br />
            <hr />
            <br />
            <ul>
              <li>City:</li>
              <li>State:</li>
              <li>Description:</li>
              <li>Medical conditions:</li>
              <li>Physical restrictions:</li>
              <li>Medications:</li>
              <li>Neutured or spayed:</li>
              <li>Clinic:</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default InnerAdopt;