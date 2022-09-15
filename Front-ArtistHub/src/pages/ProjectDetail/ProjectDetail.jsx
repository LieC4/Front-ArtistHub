import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { API } from "../../services/API";
import "./Projectdetail.css";
import { Link } from "react-router-dom";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

const ProjectDetail = () => {
  const { id } = useParams();
  console.log(id);
  const [projecto, setProjecto] = useState("");
  const getProjectoById = async () => {
    API.get(`/projects/${id}`).then((res) => {
      setProjecto(res.data.project);
      console.log(res.data.project);
    });
  };
  useEffect(() => {
    getProjectoById();
  }, []);
  return (
    <section>
      <h1>elias es un crack!</h1>
      <h2>{projecto.projectTitle}</h2>
      <img src={projecto.projectImage} alt={projecto.projectTitle} />
      <h3>{projecto.projectDescription}</h3>
    </section>
  );
};

export default ProjectDetail;
