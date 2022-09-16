import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { API } from "../../services/API";
import UserMediaCard from "../UserMediaCard/UserMediaCard";
import { useContext } from "react";
import { JwtContext } from "../../contexts/jwtContext";
import Button from "../Buttons/Button";

const UserMediasComponent = ({ media }) => {
  const { user } = useContext(JwtContext);
  console.log(user);
  const [byUsername, setbyUsername] = useState("");

  const getMediasByUsername = async () => {
    API.get(`/users/medias/${user.username}`).then((res) => {
      console.log(res.data.data.medias);
      setbyUsername(res.data.data.medias);
    });
  };
  //UserMediasComponent es lo que tenemos que hacer aca,
  useEffect(() => {
    getMediasByUsername();
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
          <Link to={"/profile/newmedia"}>
            <Button buttonStyle="new" buttonSize="small">
              New Media
            </Button>
          </Link>
        </div>
        <div className="galeria">
          {byUsername.length ? (
            byUsername.map((media) => (
              <UserMediaCard media={media} key={media._id} />
            ))
          ) : (
            <p>Loading Medias...</p>
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

export default UserMediasComponent;

//UserMediasComponent
