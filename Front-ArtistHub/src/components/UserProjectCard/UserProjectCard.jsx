import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./UserProjectCard.css";
import { Link } from "react-router-dom";
import Button from "../Buttons/Button";

const UserProjectCard = ({ project }) => {
  //console.log("este es el usuario", byUsername);
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
          <Button type="button" buttonStyle="primary" buttonSize="small">
            See my project
          </Button>
        </Link>
      </div>
    </figure>
  );
};

export default UserProjectCard;
