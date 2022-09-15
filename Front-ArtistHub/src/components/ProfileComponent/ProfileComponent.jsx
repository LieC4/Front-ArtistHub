import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { API } from "../../services/API";

const ProfileComponent = () => {
  const [byUsername, setbyUsername] = useState("");
  const { username } = useParams();

  const getByUsername = async () => {
    API.get(`/users/username/${username}`).then((res) => {
      console.log(res.data.data.user[0]);

      setbyUsername(res.data.data.user[0]);
    });
  };
  useEffect(() => {
    getByUsername();
  }, []);

  return (
    <section className="artistdetail">
      <div className="generalinfo">
        <div className="generalinfo-image">
          <img
            src="https://cdn3.iconfinder.com/data/icons/rcons-user-profession/32/designer-512.png"
            alt="logo"
          />
          <h2>{byUsername && byUsername.username}</h2>
        </div>
        <div className="generalinfo-info">
          <h1>My information</h1>
          <h2>
            Habia una vez un barquito chiquitito que no podia navegar que no
            podia navegar jajajaja.{" "}
          </h2>
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

      <div></div>
    </section>
  );
};

export default ProfileComponent;
