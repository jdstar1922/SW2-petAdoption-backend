import { useNavigate } from "react-router-dom";
import { useQuery } from '@tanstack/react-query';
import fetchUser from "../API/fetchUser";
import { useAuth } from "../context/AuthContext";

function Profile (){
    const navigate = useNavigate();
    const { user } = useAuth();
    const id = user.id;
    const result = useQuery({queryKey: ["userDetails", id], queryFn: fetchUser});
    if (result.isLoading) {
      return (
        <div className="loading-pane">
          <h2 className="loader">🌀</h2>
        </div>
      );
    }
    return(
        <div className="antialiased bg-[#F6F4F3]">
          
    
          <div className="contact-general">

            <div className="form-general">
                <div className="form">
                  <h1 className="contact-title">Profile</h1>
                  <p className="contact-description">Here you will find your personal information!</p>
                  <hr />
                  <br/>
                  <ul>
                    <li>
                        Name: {result.data.name}
                    </li>
                    <li>
                        Lastname: {result.data.lastname1}
                    </li>
                    <li>
                        Second lastname: {result.data.lastname2}
                    </li>
                    <li>
                        Direction: {result.data.direction}
                    </li>
                    <li>
                        Phone: {result.data.phone}
                    </li>
                  </ul>

                  <div className="display-left">
                    <button className="rounded-md w-32 h-10 bg-[#F6F4F3]"
                    onClick={() => navigate("/insertpet")}>Insert Pet</button>
                    </div>
                </div>
              </div>
            </div>
          </div>
    )
}

export default Profile;