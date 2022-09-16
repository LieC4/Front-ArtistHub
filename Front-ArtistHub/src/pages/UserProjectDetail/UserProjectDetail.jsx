import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { API } from "../../services/API";
import "./UserProjectDetail.css";
import { Link } from "react-router-dom";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { useForm } from "react-hook-form";
import Input from "../../components/Inputs/Input";
import Button from "../../components/Buttons/Button";

//TODO: PREGUNTAR SOBRE EL DAFAULTVALUES, QUE NO NOS ESTA FUNCIONANDO :/

const UserProjectDetail = () => {
  const { id } = useParams();
  console.log(id);
  const [projecto, setProjecto] = useState("");
  const getProjectoById = async () => {
    API.get(`/projects/${id}`).then((res) => {
      setProjecto(res.data.project);
      console.log(res.data.project);
    });
  };

  const { register, handleSubmit } = useForm();
  const [datos, setDatos] = useState({
    projectTitle: "",
    projectDescription: "",
    projectImage: "",
    projectVideo: "",
  });

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  let navigate = useNavigate();

  const defaultValue = {
    projectTitle: projecto.projectTitle,
    projectDescription: projecto.projectDescription,
    projectVideo: projecto.projectVideo,
  };

  const formSubmit = (data) => {
    const formData = new FormData();
    formData.append("projectTitle", data.projectTitle);
    formData.append("projectDescription", data.projectDescription);
    formData.append("projectImage", data.projectImage[0]);
    formData.append("projectVideo", data.projectVideo);

    API.patch(`/projects/${projecto._id}`, formData).then((res) => {
      if (res) {
        navigate("/profile");
      }
    });
  };

  const deleteProject = () => {
    API.delete(`/projects/${projecto._id}`).then((res) => {
      if (res) {
        navigate("/profile");
      }
    });
  };

  useEffect(() => {
    getProjectoById();
  }, []);

  return (
    <section className="edit_project">
      <div className="project_info_container">
        <h2>{projecto.projectTitle}</h2>
        <div>
          <img src={projecto.projectImage} alt={projecto.projectTitle} />
        </div>
        <p>Videos: {projecto.projectVideo}</p>
        <p>Description: {projecto.projectDescription}</p>
      </div>

      <div className="project_form_container">
        <form
          className="profile_form"
          style={formStyle}
          onSubmit={handleSubmit(formSubmit)}
        >
          <h2>Edit Project</h2>
          <div className="boxuno_boxdos">
            <div className="boxuno">
              <Input
                label={"Title"}
                type={"text"}
                placeholder={"projectTitle"}
                name={"projectTitle"}
                onChange={handleInputChange}
                {...register("projectTitle")}
                defaultValue={defaultValue.projectTitle}
              />
              <Input
                label={"Description"}
                type={"textarea"}
                placeholder={"projectDescription"}
                name={"projectDescription"}
                onChange={handleInputChange}
                {...register("projectDescription")}
                defaultValue={defaultValue.projectDescription}
              />
              <Input
                label={"Image"}
                type={"file"}
                placeholder={"projectImage"}
                name={"projectImage"}
                onChange={handleInputChange}
                {...register("projectImage")}
              />
              <Input
                label={"Video"}
                type={"text"}
                placeholder={"projectVideo"}
                name={"projectVideo"}
                onChange={handleInputChange}
                {...register("projectVideo")}
                defaultValue={defaultValue.projectImage}
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
            onClick={() => deleteProject()}
          >
            Delete Project
          </Button>
        </form>
      </div>
    </section>
  );
};

export default UserProjectDetail;

const formStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

//UserProjectDetail
