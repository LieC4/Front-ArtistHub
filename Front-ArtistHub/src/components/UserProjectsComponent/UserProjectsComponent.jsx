import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { API } from "../../services/API";
import UserProjectCard from "../UserProjectCard/UserProjectCard";
import { useContext } from "react";
import { JwtContext } from "../../contexts/jwtContext";
import Button from "../Buttons/Button";

const UserProjectsComponent = ({ project }) => {
  const { user } = useContext(JwtContext);
  console.log(user);
  const [reload, setReload] = useState(false);
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
  }, [reload]);

  return (
    <section className="projects">
      <div className="main">
        <div className="generalinfo">
          <img
            src="https://cdn3.iconfinder.com/data/icons/rcons-user-profession/32/designer-512.png"
            alt="logo"
            class="user-pic"
          />
          <div class="user-main-details">
            <h1>{user.username}</h1>
            <p> I am a {user.userType}</p>
            <div class="user-stats">
              <a href="/" class="stat-link">
                {" "}
                Proyects <b>3</b>
              </a>
              <a href="/" class="stat-link">
                {" "}
                Medias <b>2</b>
              </a>
              <a href="/" class="stat-link">
                {" "}
                Likes <b>360</b>
              </a>
            </div>
            <div className="about">
              <h3>Projects</h3>
            </div>
          </div>
        </div>
        <div class="user-complete-details">
          <div class="user-meta-details">
            <div class="user-social">
              <p>Location : London, UK</p>
              <p> Joined on : {user.createdAt}</p>
              <div class="user-sm-links">
                <a href="/" class="sm-link">
                  <img src="/assets/web.png" alt="Twitter" />
                </a>
                <a href="/" class="sm-link">
                  <img src="/assets/twitter.png" alt="Twitter" />
                </a>
                <a href="/" class="sm-link">
                  <img src="/assets/linkedin.png" alt="Twitter" />
                </a>
              </div>
            </div>
            <div class="user-techstack">
              <p>
                <b>ArtStack</b>
              </p>
              <ul class="tech-list">
                <li class="tech">Noveau</li>
                <li class="tech">Plastic</li>
                <li class="tech">Techno</li>
                <li class="tech">Saxo</li>
                <li class="tech">Classic</li>
              </ul>
            </div>
          </div>
          <div className="user-all-data">
            <div className="new_button_container">
              <div>
                <Link
                  to={"/profile/newproject"}
                  onClick={() => setReload(true)}
                >
                  <Button buttonStyle="new" buttonSize="small">
                    New Project
                  </Button>
                </Link>
              </div>
            </div>
            {byUsername.length ? (
              byUsername.map((project) => (
                <UserProjectCard project={project} key={project._id} />
              ))
            ) : (
              <p>Loading Projects...</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserProjectsComponent;
