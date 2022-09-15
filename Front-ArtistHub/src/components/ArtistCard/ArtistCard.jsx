import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./ArtistCard.css";

const ArtistCard = ({ user }) => {
  const [Encuesta, setEncuesta] = useState("");
  let navigate = useNavigate();

  return (
    <figure className="artistcard">
      <h4 className="username">{user.username}</h4>
      <div>
        {" "}
        {user.avatar != undefined ? (
          <div>
            <img src={user.avatar} alt={user.username} />
          </div>
        ) : (
          <div>
            <img
              src="https://cdn3.iconfinder.com/data/icons/rcons-user-profession/32/designer-512.png"
              alt={user.username}
            />
          </div>
        )}
      </div>
      <h5 className="rol">Rol: {user.userType}</h5>
      <div>
        <button
          type="button"
          onClick={() => navigate(`/artists/${user.username}`)}
        >
          See my profile
        </button>
      </div>
      {user ? (
        <>
          <div className="buttonencuesta">
            <div>
              <button className="button-29" onClick={() => setEncuesta("+1")}>
                👍
              </button>

              <button className="button-29" onClick={() => setEncuesta("-1")}>
                👎
              </button>
            </div>
            <div>
              <p>{Encuesta} </p>
            </div>
          </div>
        </>
      ) : null}
    </figure>
  );
};

export default ArtistCard;
