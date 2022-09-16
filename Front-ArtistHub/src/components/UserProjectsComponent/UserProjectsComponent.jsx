import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { API } from "../../services/API";
import UserProjectCard from "../UserProjectCard/UserProjectCard";
import { useContext } from "react";
import { JwtContext } from "../../contexts/jwtContext";
import Button from "../Buttons/Button";

const UserProjectsComponent = ({ project }) => {
  const { user } = useContext(JwtContext);
  console.log(user);
  const [byUsername, setbyUsername] = useState("");

  const getProjectsByUsername = async () => {
    API.get(`/users/projects/${user.username}`).then((res) => {
      console.log(res.data.data.projects);
      setbyUsername(res.data.data.projects);
    });
  };
  //getProjectsByUsername es lo que tenemos que hacer aca,
  useEffect(() => {
    getProjectsByUsername();
  }, []);

  return (
    <section className="projects">
      <div className="generalinfo">
        <div className="generalinfo-image">
          <img
            src="https://cdn1.iconfinder.com/data/icons/literary-genres-flat/64/craft-art-diy-project-invent-512.png"
            alt="logo"
          />
          <h2>{user.username}</h2>
          {/*<Link to={"/profile/newproject"}>*/}
          <Button buttonStyle="new" buttonSize="small">
            New Project
          </Button>
          {/*</Link>*/}
        </div>
        <div className="galeria">
          {byUsername.length ? (
            byUsername.map((project) => (
              <UserProjectCard project={project} key={project._id} />
            ))
          ) : (
            <p>Loading Projects...</p>
          )}
        </div>
      </div>
      <div className="secondaryinfo">
        <div className="typeinfo">
          <h1>I am a {user.userType}</h1>
        </div>
        <div className="socialinfo">
          <h1>Here is info about my company, and social media</h1>
        </div>
      </div>
    </section>
  );
};

export default UserProjectsComponent;
