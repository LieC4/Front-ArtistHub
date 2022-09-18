import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { API } from "../../services/API";
import "./Mediadetail.css";
import { Link } from "react-router-dom";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

const MediaDetail = () => {
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
    <section className="edit_project">
      <div className="project_infodetail_container">
        <div className="project_title_container">
          <h2>{medio.mediaTitle}</h2>
        </div>
        <div className="project_content_container">
          <h4>Description: {medio.mediaDescription}</h4>
        </div>
        <div className="project_info_container">
          <div className="project_img_container">
            <img src={medio.mediaImage} alt={medio.mediaTitle} />
          </div>
        </div>
        <div className="project_content_container">
          <h4>Videos: {medio.mediaSpotify}</h4>
          <h4>Videos: {medio.mediaVideo}</h4>
        </div>
      </div>
    </section>
  );
};

export default MediaDetail;
