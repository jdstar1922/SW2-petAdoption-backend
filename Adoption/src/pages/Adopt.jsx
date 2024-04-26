import InnerAdopt from "./InnerAdopt";
import Images from "../img/Images";
import { usePets } from "../context/PetContext";
import { useEffect } from "react";
import PetCard from "../components/PetCard";
import { useNavigate } from "react-router-dom";

function Adopt (){
  const navigate = useNavigate();
  const { getPets, pets} = usePets();
  useEffect(() => {
    getPets();
  }, [])
  console.log(pets)
    return (
      <> 
        <div className="MDtitulo">
        <hr />
          <h2>Pets Available</h2>
          <h4>Here you will find your faithful companion!</h4>
          <hr />
        </div>
        

        <div>
          <div className="scroller snaps-inline">
            {
              pets.map(pet => (
                <PetCard pet={pet} key={pet._id}/>
              ))
            }
          </div>
        </div>
      </>
    );
}

export default Adopt;

/*
            <div className="media-elem">
              <img className="img-resize" src={Images.image1} alt="Dog"/>
              <p className="title">Max Rodriguez</p>
              <button>More information
              </button>
            </div>
            <div className="media-elem">
              <img className="img-resize" src={Images.image2} alt="Dog" />
              <p className="title">Rocky Balboa</p>
              <button>More information</button>
            </div>
            <div className="media-elem">
              <img className="img-resize" src={Images.image3} alt="Dog" />
              <p className="title">Toto y Barley</p>
              <button>More information</button>
            </div>
            <div className="media-elem">
              <img className="img-resize" src={Images.image4} alt="Cat" />
              <p className="title">Mr. Whiskers</p>
              <button>More information</button>
            </div>
            <div className="media-elem">
              <img className="img-resize" src={Images.image5} alt="Cat" />
              <p className="title">Olive</p>
              <button>More information</button>
            </div>
            <div className="media-elem">
              <img className="img-resize" src={Images.image6} alt="Cat" />
              <p className="title">Figaro</p>
              <button>More information</button>
            </div>
            <div className="media-elem">
              <img className="img-resize" src={Images.image7} alt="Bunny" />
              <p className="title">Canela</p>
              <button>More information</button>
            </div>
            <div className="media-elem">
              <img className="img-resize" src={Images.image8} alt="Bunny" />
              <p className="title">Chispas</p>
              <button>More information</button>
            </div>
            <div className="media-elem">
              <img className="img-resize" src={Images.image9} alt="Bunny" />
              <p className="title">Manchas</p>
              <button>More information</button>
            </div>

*/