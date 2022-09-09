import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { API } from "../../services/API";
import InputField from '../../components/Inputs/Input';
import Button from '../../components/Buttons/Button';


const Register = () => {
  const { register, handleSubmit } = useForm();

  let navigate = useNavigate();

  const formSubmitUser = (data) => {
    const formData = new formData();
    formData.append("username", data.username);
    formData.append("password", data.password);
    formData.append("email", data.email);
    formData.append("userType", data.userType);
    
    API.post("/register", formData).then((res) => {
      if (res) {
        navigate("/login");
      }
    })
  }

  return (
  <>
    <section>

      <form onSubmit={handleSubmit(formSubmitUser)}>
        <div className='register_container'>
          <h2>Please, register</h2>
          <label htmlFor="petName">Name</label>
            <input
              type="text"
              id="username"
              name="username"
              {...register("username")}
              placeholder="Username"
            />

            <label htmlFor="email">E-mail</label>
            <input
              type="text"
              id="email"
              name="email"
              {...register("email")}
              placeholder="example@email.com"
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              {...register("password")}
              placeholder="Example123!*$"
            />
          <h4>customer? musician? painter? designer?</h4>
          <label htmlFor="userType">Type of user:</label>
          <input type="text" name='userType' id='userType' placeholder='Type of User' {...register("userType")} />
          <button type="submit">Register</button>
        </div>
        
      </form>
    </section>
  </>
  )
}

export default Register