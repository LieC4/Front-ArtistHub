import React from 'react'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Buttons/Button';
import Input from '../../components/Inputs/Input';
import { API } from "../../services/API";
import "./Register.css"

const Register = () => {
  const { register, handleSubmit } = useForm();
  const [signupInput, setSignUpInput] = useState({
    username: "",
    password: "",
    email: "",
    userType: "",
  });
  let navigate = useNavigate();

  const formSubmitUser = (data) => {
    const formData = new FormData();
    formData.append("username", data.username);
    formData.append("password", data.password);
    formData.append("email", data.email);
    formData.append("userType", data.userType);
    
    API.post("/users/register", formData).then((res) => {
      if (res) {
        navigate("/login");
      }
    })
  }
  return (
    <section className="register">
      <h2>Please register:</h2>
      <form onSubmit={handleSubmit(formSubmitUser)}>
        <div className='boxuno'>
          <Input
            nameLabel="Username"
            type="username"
            id="username"
            placeholder=""
            defaultValues={signupInput.username}
            setter={setSignUpInput}
            {...register("username")}
          />
          <Input
            nameLabel="Password"
            type="password"
            id="password"
            placeholder=""
            defaultValues={signupInput.password}
            setter={setSignUpInput}
            {...register("password")}
          />
          <Input
            nameLabel="E-mail"
            type="email"
            id="email"
            placeholder=""
            defaultValues={signupInput.email}
            setter={setSignUpInput}
            {...register("email")}
          />
          <div className="select_container">
            <label className="label_select" htmlFor="userType">User Type</label>
            <select style={selectStyle} className="select" {...register("userType")}>
              <option value="customer">Customer</option>
              <option value="musician">Musician</option>
              <option value="painter">Painter</option>
              <option value="designer">Designer</option>
            </select>
          </div>
          <div className='button_container'>
            <Button type="submit" buttonStyle="formulary"     buttonSize="medium" >
              Submit
            </Button>
          </div>
        </div>
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
  width: "100px",
  
}

export default Register