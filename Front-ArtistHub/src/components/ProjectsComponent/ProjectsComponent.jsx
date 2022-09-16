import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { API } from "../../services/API";

import { Link } from "react-router-dom";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

const ProjectComponent = ({ project }) => {
  const [allProjects, setallProjects] = useState([]);
  console.log(allProjects);
  const [byUsername, setbyUsername] = useState(undefined);

  const { username } = useParams();
  console.log(username);

  const getallProjects = async () => {
    API.get(`/users/projects/${username}`).then((res) => {
      console.log(res.data.data.projects);
      setallProjects(res.data.data.projects);
    });
  };
  const getByUsername = async () => {
    API.get(`/users/username/${username}`).then((res) => {
      console.log(res.data.data.user[0]);
      setbyUsername(res.data.data.user[0]);
    });
  };

  useEffect(() => {
    getallProjects();
    getByUsername();
  }, []);

  return (
    <section className="projects">
      <div className="generalinfo">
        <div className="generalinfo-image">
          <img
            src="https://cdn1.iconfinder.com/data/icons/literary-genres-flat/64/craft-art-diy-project-invent-512.png"
            alt="logo"
          />
          <h2>{byUsername && byUsername.username}</h2>
        </div>
        <div className="galeria">
          {allProjects.length ? (
            allProjects.map((project) => (
              <ProjectCard project={project} key={project._id} />
            ))
          ) : (
            <p>Loading Projects...</p>
          )}
        </div>
      </div>
      <div className="secondaryinfo">
        <div className="typeinfo">
          <h1>I am a {byUsername && byUsername.userType}</h1>
        </div>
        <div className="socialinfo">
          <h1>Here is info about my company, and social media</h1>
        </div>
      </div>
    </section>
  );
};

export default ProjectComponent;
