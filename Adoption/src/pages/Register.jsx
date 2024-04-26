import { useForm } from "react-hook-form";
import { registerRequest } from "../API/authR";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Register (){
    const {register, handleSubmit, formState:{errors}} = useForm();

    const { signup, isAuthenticated, errors: RegisterErrors } = useAuth();

    const navigate = useNavigate();
    useEffect(() => {
      if (isAuthenticated) navigate("/menu");
    }, [isAuthenticated]);

    const onSubmit = handleSubmit(async (values)=> {
        signup(values);
    })

    const handlePhoneChange = (event) => {
      // Extract only numeric characters from the input
      const numbers = event.target.value.replace(/\D/g, '');

      // Enforce maximum of 8 digits
      const limitedNumbers = numbers.slice(0, 8);

      // Update the form state with the limited number
      event.target.value = limitedNumbers;
  };


    return (
      <div className="CT-center">
        <div className="reg-frame">
          {
          RegisterErrors.map((error, i) => (
            <div className="reg-error" key={i}>
              {error}
            </div>
          ))}

          <h1> WELCOME TO OUR FAMILY! </h1>

          <form className="reg-form" onSubmit={onSubmit}>
            <div>
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="Name"
              ></input>
              {errors.name && <p>Name is required</p>}

              <input
                {...register("lastname1", { required: true })}
                type="text"
                placeholder="Lastname"
              ></input>
              {errors.lastname1 && <p>Lastname is required</p>}

              <input
                {...register("lastname2", { required: true })}
                type="text"
                placeholder="Second Lastname"
              ></input>
               {errors.lastname2 && <p>Lastname is required</p>}
              <input
                {...register("direction", { required: true })}
                type="text"
                placeholder="Direction"
              ></input>

              <input
                {...register("phone", { required: true })}
                type="text"
                placeholder="Phone"
                onChange={handlePhoneChange}
              ></input>
              {errors.phone && <p>Phone is required</p>}
            </div>

            <div className="reg-cred">
              <input
                {...register("mail", { required: true })}
                type="email"
                placeholder="Email"
              ></input>
              {errors.mail && <p>Email is required</p>}

              <input
                {...register("password", { required: true })}
                type="password"
                placeholder="Password"
              ></input>
              {errors.password && <p>Password is required</p>}

              <div className="r-l-submit">
                <button type="submit">Register</button>
              </div>
            </div>

            <p className="r-l-sign">
                Already have an account? 
                <Link to="/login" className="text-[#6e4d3d]">Login</Link>
            </p>

          </form>
        </div>
      </div>
    );
}

export default Register;