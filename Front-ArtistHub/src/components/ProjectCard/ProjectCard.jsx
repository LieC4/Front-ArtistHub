import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./ProjectCard.css";
import { Link } from "react-router-dom";

const ProjectCard = ({ byUsername, project }) => {
  console.log("este es el usuario", byUsername);
  let navigate = useNavigate();

  return (
    <figure className="projectcard">
      <h4 className="title">{project.projectTitle}</h4>
      <div>
        {" "}
        {project.projectImage != undefined ? (
          <div>
            <img src={project.projectImage} alt={project.projectTitle} />
          </div>
        ) : (
          <div>
            <img
              src="https://cdn3.iconfinder.com/data/icons/rcons-user-profession/32/designer-512.png"
              alt={project.projectTitle}
            />
          </div>
        )}
      </div>
      <p className="description">Project: {project.projectDescription}</p>
      <p className="description">Created at: {project.createdAt}</p>
      <p className="description">Last update: {project.updatedAt}</p>
      <div>
        <Link to={`/profile/projects/${project._id}`}>
          {" "}
          <button type="button">See my project</button>
        </Link>
      </div>
    </figure>
  );
};

export default ProjectCard;
