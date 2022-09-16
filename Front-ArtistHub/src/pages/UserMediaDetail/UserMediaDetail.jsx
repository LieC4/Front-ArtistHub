import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { API } from "../../services/API";
import "./UserMediaDetail.css";
import { Link } from "react-router-dom";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

const UserMediaDetail = () => {
  const { id } = useParams();
  console.log(id);
  const [medio, setMedio] = useState("");
  const getMedioById = async () => {
    API.get(`/medias/${id}`).then((res) => {
      setMedio(res.data.media);
      console.log(res.data.media);
    });
  };
  useEffect(() => {
    getMedioById();
  }, []);
  return (
    <section>
      <h1>elias es un crack!</h1>
      <h2>{medio.mediaTitle}</h2>
      <img src={medio.mediaImage} alt={medio.mediaTitle} />
      <h3>{medio.mediaDescription}</h3>
    </section>
  );
};

export default UserMediaDetail;

//UserMediaDetail
