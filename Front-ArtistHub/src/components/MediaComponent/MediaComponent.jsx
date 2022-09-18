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
      <div class="main">
          <div className="generalinfo">
          <img src="https://cdn3.iconfinder.com/data/icons/rcons-user-profession/32/designer-512.png" class="user-pic">
          </img>
          <div class="user-main-details">
            <h1>{byUsername && byUsername.username}</h1>
            <p> I am a {byUsername && byUsername.userType}</p>
            <div class="user-stats">
              <a href="/" class="stat-link"> Proyects <b>3</b></a>
              <a href="/" class="stat-link"> Medias <b>2</b></a>
              <a href="/" class="stat-link"> Likes <b>360</b></a>
              
            </div>
        </div>
          </div>

      
      <div class="user-complete-details">
        <div class="user-meta-details">
          <div class="user-social">
            <p>Location : London, UK</p>
            <p> Joined on :  {byUsername && byUsername.createdAt}</p>
            <div class="user-sm-links">
              <a href="/" class="sm-link"><img src="/assets/twitter.png" alt="Twitter" /></a>
              <a href="/" class="sm-link"><img src="/assets/web.png" alt="Twitter" /></a>
              <a href="/" class="sm-link"><img src="/assets/linkedin.png" alt="Twitter" /></a>
              
            </div>
          </div>
          <div class="user-techstack">
            <p><b>ArtStack</b></p>
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
          {allMedias.length ? (
            allMedias.map((media) => (
              <MediaCard media={media} key={media._id} />
            ))
          ) : (
            <p>Loading Medias...</p>
          )}
        </div>
      </div>
      </div>
        

      
      
      
    </section>
  );
};

export default MediaComponent;
