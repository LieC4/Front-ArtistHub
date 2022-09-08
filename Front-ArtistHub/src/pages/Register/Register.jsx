import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import InputField from '../../components/Inputs/Input';


const Register = () => {
  const { register, handleSubmit } = useForm();
  let navigate = useNavigate();

  const formSubmitUser = (data) => {
    const formData = new formData();
    formData.append("username", data.username);
    formData.append("password", data.password);
    formData.append("email", data.email);
    formData.append("avatar", data.avatar[0]);
    formData.append("userType", data.userType);
    formData.append("userIntro", data.userIntro);
  }
  const formSubmitSocialMedia = (data) => {
    const formData = new formData();
    formData.append("company", data.company);
    formData.append("location", data.location);
    formData.append("website", data.website);
    formData.append("twitter", data.twitter);
    formData.append("linkedin", data.linkedin);
  }

  //TODO: PETICIONES SIMULTANEAS:
  //API.post()

  return (
  <>
    <section>
      <div className='register_container'>
        <h2>Please, register</h2>
      </div>
      <form onSubmit={handleSubmit(formSubmitUser, formSubmitSocialMedia)}>
        <div className='general_info_container'>
          <h3>General Info</h3>
          <InputField type="text" placeholder="Username:" label="Username" {...register("username")} />
          <InputField type="password" placeholder="Example123!*$" label="Password:" {...register("password")} />
          <InputField type="text" placeholder="example@email.com" label="E-mail:" {...register("email")} />
          <InputField type="file" placeholder="Avatar" label="Avatar:" {...register("avatar")} />
        </div>

        <div className='user_type_container'>
          <h3>What are you? 🎶? 🎨? 🖊? or 💰?</h3>
          <InputField type="radio" label="Musician" {...register("userType")} />
          <InputField type="radio" label="Painter" {...register("userType")} />
          <InputField type="radio" label="Designer" {...register("userType")} />
          <InputField type="radio" label="Customer" {...register("userType")} />
          <InputField type="text" placeholder="User intro" label="Tell us a bit about you:" {...register("userIntro")} />
        </div>

        <div className='social_media_container'>
          <h3>Where else can we find you?</h3>
          <InputField type="text" placeholder="Company" label="Company:" {...register("company")} />
          <InputField type="text" placeholder="Location" label="Location:" {...register("location")} />
          <InputField type="text" placeholder="Website" label="Website:" {...register("website")} />
          <InputField type="text" placeholder="Twitter" label="Twitter:" {...register("twitter")} />
          <InputField type="text" placeholder="LinkedIn" label="LinkedIn:" {...register("linkedin")} />
        </div>
      </form>

      <form action=""></form>
    </section>
  </>
  )
}

export default Register