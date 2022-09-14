import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Buttons/Button'
import Input from '../../components/Inputs/Input'
import { JwtContext } from '../../contexts/jwtContext'
import "./ProfileEdit.css"


const ProfileEdit = () => {
    const { user, logout } = useContext(JwtContext);
    const { register, handleSubmit } = useForm();
    const [datos, setDatos] = useState({
        username: "",
        password: "",
        email: "",
        avatar: "",
        userType: "",
        projects: [""],
        favProjects: [""],
        medias: [""],
        userIntro: "",
        company: "",
        location: "",
        website: "",
        twitter: "",
        linkedin: "",
      })
    
      const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
      }

    let navigate = useNavigate();

    const defaultValues = {
        username: user.username,
    };

    const formSubmit = (data) => {
        const formData = new FormData();
        formData.append("username", data.username);
        formData.append("password", data.password);
        formData.append("email", data.email);
        formData.append("avatar", data.avatar[0]);
        formData.append("userType", data.userType);
        formData.append("projects", data.projects);
        formData.append("favProjects", data.favProjects);
        formData.append("medias", data.medias);
        formData.append("userIntro", data.userIntro);
        formData.append("company", data.company);
        formData.append("location", data.location);
        formData.append("website", data.website);
        formData.append("twitter", data.twitter);
        formData.append("linkedin", data.linkedin);

        API.patch(`/users/${user._id}`, formData).then((res) => {
            if (res) {
                logout();
                navigate("/login")
            };
        });
    };

    const deleteUser = () => {
        API.delete(`/users/${user._id}`).then((res) => {
            if (res) {
                logout();
                navigate("/")
            }
        })
    }

  return (
    <section className="edit_profile">
      <form style={formStyle} onSubmit={handleSubmit(formSubmit)}>
        <div className="boxuno">
          <Input
            label={"Username"}
            type={"text"} 
            placeholder={"username"} 
            name={"username"} 
            onChange={handleInputChange}
            {...register("username")}
            defaultValue={defaultValues.username}
          />
        </div>

        <div className="boxuno">
          <Input
            label={"Password"}
            type={"password"} 
            placeholder={"password"} 
            name={"password"} 
            onChange={handleInputChange}
            {...register("password")}
          />
        </div>

        <div className="boxuno">
          <Input
            label={"E-mail"}
            type={"email"} 
            placeholder={"email"} 
            name={"email"} 
            onChange={handleInputChange}
            {...register("email")}
          />
        </div>

        <div className="boxuno">
          <Input
            label={"Avatar"}
            type={"file"} 
            placeholder={"Avatar"} 
            name={"avatar"} 
            onChange={handleInputChange}
            {...register("avatar")}
          />
        </div>

        <div className="select_container">
            <label className="label_select" htmlFor="userType">Change your type?</label>
            <select style={selectStyle} className="select" {...register("userType")}>
                <option value="select...">Select...</option>
                <option value="customer">Customer</option>
                <option value="musician">Musician</option>
                <option value="painter">Painter</option>
            <option value="designer">Designer</option>
            </select>
        </div>

        <div className="boxuno">
          <Input
            label={"About me..."}
            type={"textarea"} 
            placeholder={"About me..."} 
            name={"userIntro"} 
            onChange={handleInputChange}
            {...register("userIntro")}
          />
        </div>

        <div className="boxuno">
          <Input
            label={"Company"}
            type={"text"} 
            placeholder={"Company"} 
            name={"company"} 
            onChange={handleInputChange}
            {...register("company")}
          />
        </div>

        <div className="boxuno">
          <Input
            label={"Location"}
            type={"text"} 
            placeholder={"Location"} 
            name={"location"} 
            onChange={handleInputChange}
            {...register("location")}
          />
        </div>

        <div className="boxuno">
          <Input
            label={"Website"}
            type={"text"} 
            placeholder={"Website"} 
            name={"website"} 
            onChange={handleInputChange}
            {...register("website")}
          />
        </div>

        <div className="boxuno">
          <Input
            label={"Twitter"}
            type={"text"} 
            placeholder={"Twitter"} 
            name={"twitter"} 
            onChange={handleInputChange}
            {...register("twitter")}
          />
        </div>

        <div className="boxuno">
          <Input
            label={"LinkedIn"}
            type={"text"} 
            placeholder={"LinkedIn"} 
            name={"linkedin"} 
            onChange={handleInputChange}
            {...register("linkedin")}
          />
        </div>

        {/*TODO: Como mostrar Projects aca: a manera de galeria xD*/}
        {/*<div className="boxuno">
          <Input
            label={"Projects"}
            type={"text"} 
            placeholder={"Username"} 
            name={"username"} 
            onChange={handleInputChange}
            {...register("username")}
          />
        </div>

        <div className="boxuno">
          <Input
            label={"Favorite Projects"}
            type={"text"} 
            placeholder={"Favorite Projects"} 
            name={"favProjects"} 
            onChange={handleInputChange}
            {...register("favProjects")}
          />
        </div>

        <div className="boxuno">
          <Input
            label={"Medias"}
            type={"text"} 
            placeholder={"Medias"} 
            name={"medias"} 
            onChange={handleInputChange}
            {...register("medias")}
          />
        </div>*/}

        <Button type="submit" buttonStyle="formulary" buttonSize="medium" >
          Edit Profile
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

export default ProfileEdit