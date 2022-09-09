import { useContext, useState, useEffect } from "react";
import { JwtContext } from "../../contexts/jwtContext";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { API } from "../../services/API";
import Swal from "sweetalert2";
import "./Login.css"

const Login = () => {
  const { register, handleSubmit } = useForm();
  let navigate = useNavigate();
  const { setJwt, setUser } = useContext(JwtContext);
  const formSubmit = (formData) => {
    API.post("/users/login", formData)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.userInDb));
        setJwt(res.data.token);
        setUser(res.data.userInDb);

        if (res.data.token) {
          navigate("/");
          Swal.fire("Wellcome to the Web!");
        }
      })
      .catch((res) => {
        if (res.response.data === "User not found") {
          Swal.fire("User not found!😔");
        } else {
          Swal.fire("Incorrect Password! ❌");
        }
        return res;
      });
  };
  return (
    <section className="login">
    <h2>Please log in:</h2>

<form onSubmit={handleSubmit(formSubmit)}>
  <div className="boxuno">
    <label htmlFor="username">Username</label>
    <input
      type="text"
      id="username"
      name="username"
      {...register("username")}
    />
  </div>
  <div className="boxuno">
    <label htmlFor="password">Password</label>
    <input
      type="password"
      id="password"
      name="password"
      {...register("password")}
    />
  </div>
  <button className="Boton" type="submit">
    Login
  </button>
</form>

    </section>
  );
};

export default Login;

