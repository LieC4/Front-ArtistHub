import React from 'react'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Buttons/Button';
import { API } from "../../services/API";
import Input from "../../components/Inputs/Input";
import "./Register.css";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const [datos, setDatos] = useState({
    username: "",
    password: "",
    email: "",
    userType: ""
  })

  const handleInputChange = (event) => {
    // console.log(event.target.name)
    // console.log(event.target.value)
    setDatos({
        ...datos,
        [event.target.name] : event.target.value
    })
  }

  let navigate = useNavigate();

  const formSubmitUser = (data) => {
    console.log(data)
    API.post("/users/register", data).then((res) => {
      if (res) {
        navigate("/login");
      }
    })
  }

  return (
  <section className="register">
    <form style={formStyle} onSubmit={handleSubmit(formSubmitUser)}>
      <div className="boxuno">
        <Input
          label={"Username"}
          type={"text"} 
          placeholder={"Username"} 
          name={"username"} 
          onChange={handleInputChange}
          {...register("username")}
        />
      </div>
      <div className="boxuno">
        <Input
          label={"Password"}
          type={"password"} 
          placeholder={"Example123!*$"} 
          name={"password"} 
          onChange={handleInputChange}
          {...register("password")}
        />
      </div>
      <div className="boxuno">
        <Input
          label={"E-mail"}
          type={"email"} 
          placeholder={"example@e-mail.com"} 
          name={"email"} 
          onChange={handleInputChange}
          {...register("email")}
        />
      </div>
   <div className="select_container">
      <label className="label_select" htmlFor="userType">User Type</label>
      <select style={selectStyle} className="select" {...register("userType")}>
        <option value="select...">Select...</option>
        <option value="customer">Customer</option>
        <option value="musician">Musician</option>
        <option value="painter">Painter</option>
        <option value="designer">Designer</option>
      </select>
    </div>
  <br />
    <Button type="submit" buttonStyle="formulary" buttonSize="medium" >
        Submit
    </Button>
    </form>
  </section>
    
    
  )
}

const selectStyle = {
  outlineStyle: "none",
  borderRadius: "4px",
  border: "solid 1px var(--text-primary)",
  borderBottomWidth: "2px",
  transition: "all 0.3s ease",
  padding: "5px",
  width: "116px",
}

const formStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

export default Register