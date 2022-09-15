import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { API } from "../../services/API";

import { Link } from "react-router-dom";
import MediaCard from "../MediaCard/MediaCard";

const MediaComponent = ({ media }) => {
  const [allMedias, setallMedias] = useState([]);
  const [byUsername, setbyUsername] = useState(undefined);

  const { username } = useParams();
  console.log(username);

  const getallMedias = async () => {
    API.get(`/users/medias/${username}`).then((res) => {
      console.log(res.data.data.medias);
      setallMedias(res.data.data.medias);
    });
  };
  const getByUsername = async () => {
    API.get(`/users/username/${username}`).then((res) => {
      console.log(res.data.data.user[0]);
      setbyUsername(res.data.data.user[0]);
    });
  };

  useEffect(() => {
    getallMedias();
    getByUsername();
  }, []);

  return (
    <section className="medias">
      <div className="generalinfo">
        <div className="generalinfo-image">
          <img
            src="https://cdn1.iconfinder.com/data/icons/literary-genres-flat/64/craft-art-diy-project-invent-512.png"
            alt="logo"
          />
          <h2>{byUsername && byUsername.username}</h2>
        </div>
        <div className="galeria">
          {allMedias.length ? (
            allMedias.map((media) => (
              <MediaCard media={media} key={media._id} />
            ))
          ) : (
            <p>Loading Medias...</p>
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

export default MediaComponent;
