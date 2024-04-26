import React from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const { signin, errors: LoginErrors, isAuthenticated } = useAuth();
  const {register,handleSubmit,formState: { errors },} = useForm();
  
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated) navigate("/menu");
    }, [isAuthenticated]);

  const onSubmit = handleSubmit((values) => {
    signin(values);
  });

  return (
    <div className="CT-center">
      <div className="reg-frame">
        <h1> WE ARE HAPPY TO SEE YOU! </h1>

        {
          LoginErrors.map((error, i) => (
            <div className="reg-error" key={i}>
              {error}
            </div>
          ))}


        <form className="log-form" onSubmit={onSubmit}>

            <input
                {...register("email", { required: true })}
                type="email"
                placeholder="Email"
            ></input>
            {errors.email && <p>Email is required</p>}

          <input
            {...register("password", { required: true })}
            type="password"
            placeholder="Password"
          ></input>
          {errors.password && <p>Password is required</p>}

          <div className="r-l-submit">
            <button type="submit">Login</button>
          </div>

        </form>
            <p className="r-l-sign">
                Don't have an account? 
                <Link to="/register" className="text-[#6e4d3d]">Sign Up</Link>
            </p>
        
      </div>
    </div>
  );
}

export default Login;
