import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Buttons/Button";
import Input from "../../components/Inputs/Input";
import { JwtContext } from "../../contexts/jwtContext";
import "./ProfileForm.css";

const ProfileForm = () => {
  const { user, logout } = useContext(JwtContext);
  const { register, handleSubmit } = useForm();
  const [datos, setDatos] = useState({
    username: "",
    password: "",
    email: "",
    avatar: "",
    userType: "",
    userIntro: "",
    company: "",
    location: "",
    website: "",
    twitter: "",
    linkedin: "",
  });

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  let navigate = useNavigate();

  const defaultValue = {
    username: user.username,
    password: user.password,
    email: user.email,
    avatar: user.avatar,
    userType: user.userType,
    projects: user.projects,
    favProjects: user.favProjects,
    medias: user.medias,
    userIntro: user.userIntro,
    company: user.company,
    location: user.location,
    website: user.website,
    twitter: user.twitter,
    linkedin: user.linkedin,
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
        navigate("/login");
      }
    });
  };

  const deleteUser = () => {
    API.delete(`/users/${user._id}`).then((res) => {
      if (res) {
        logout();
        navigate("/");
      }
    });
  };

  return (
    <section className="edit_profile">
      <h2 className="profile_title">Profile</h2>
      <form
        className="profile_form"
        style={formStyle}
        onSubmit={handleSubmit(formSubmit)}
      >
        <h2>Edit Profile</h2>
        <div className="boxuno_boxdos">
          <div className="boxuno">
            <Input
              label={"Username"}
              type={"text"}
              placeholder={"username"}
              name={"username"}
              onChange={handleInputChange}
              {...register("username")}
              defaultValue={defaultValue.username}
            />
            <Input
              label={"Password"}
              type={"password"}
              placeholder={"password"}
              name={"password"}
              onChange={handleInputChange}
              {...register("password")}
              defaultValue={defaultValue.password}
            />
            <Input
              label={"E-mail"}
              type={"email"}
              placeholder={"email"}
              name={"email"}
              onChange={handleInputChange}
              {...register("email")}
              defaultValue={defaultValue.email}
            />
            <Input
              label={"Avatar"}
              type={"file"}
              placeholder={"Avatar"}
              name={"avatar"}
              onChange={handleInputChange}
              {...register("avatar")}
            />
            <div className="select_container">
              <label className="label_select_profile" htmlFor="userType">
                Change your type?
              </label>
              <select
                style={selectStyle}
                className="select"
                {...register("userType")}
                defaultValue={defaultValue.userType}
              >
                <option value="select...">Select...</option>
                <option value="customer">Customer</option>
                <option value="musician">Musician</option>
                <option value="painter">Painter</option>
                <option value="designer">Designer</option>
              </select>
            </div>
            <Input
              label={"About me..."}
              type={"textarea"}
              placeholder={"About me..."}
              name={"userIntro"}
              onChange={handleInputChange}
              {...register("userIntro")}
              defaultValue={defaultValue.userIntro}
            />
          </div>

          <div className="boxdos">
            <Input
              label={"Company"}
              type={"text"}
              placeholder={"Company"}
              name={"company"}
              onChange={handleInputChange}
              {...register("company")}
              defaultValue={defaultValue.company}
            />
            <Input
              label={"Location"}
              type={"text"}
              placeholder={"Location"}
              name={"location"}
              onChange={handleInputChange}
              {...register("location")}
              defaultValue={defaultValue.location}
            />
            <Input
              label={"Website"}
              type={"text"}
              placeholder={"Website"}
              name={"website"}
              onChange={handleInputChange}
              {...register("website")}
              defaultValue={defaultValue.website}
            />
            <Input
              label={"Twitter"}
              type={"text"}
              placeholder={"Twitter"}
              name={"twitter"}
              onChange={handleInputChange}
              {...register("twitter")}
              defaultValue={defaultValue.twitter}
            />
            <Input
              label={"LinkedIn"}
              type={"text"}
              placeholder={"LinkedIn"}
              name={"linkedin"}
              onChange={handleInputChange}
              {...register("linkedin")}
              defaultValue={defaultValue.linkedin}
            />
          </div>
        </div>

        <Button type="submit" buttonStyle="formulary" buttonSize="medium">
          Save Changes
        </Button>
        <Button
          type="submit"
          buttonStyle="formulary"
          buttonSize="medium"
          onClick={() => deleteUser()}
        >
          Delete Profile
        </Button>
      </form>
    </section>
  );
};

const selectStyle = {
  outlineStyle: "none",
  borderRadius: "4px",
  border: "solid 1px var(--background)",
  borderBottomWidth: "2px",
  transition: "all 0.3s ease",
  padding: "5px",
  width: "116px",
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

export default ProfileForm;
