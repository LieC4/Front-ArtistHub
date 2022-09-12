import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { JwtContext } from "../contexts/jwtContext";
import { useState } from "react";
import "./ArtistCard.css"

const ArtistCard = ({ user }) => {
  const { user, setEditingUser } = useContext(JwtContext);
  const [Encuesta, setEncuesta] = useState("");
  let navigate = useNavigate();

  return (
    <figure className="artistcard">
      <h4 className="username">{user.username}</h4>
      <img src={user.avatar} alt={user.username} />
      <h5 className="rol">Rol: {user.userType}</h5>
      {user ? (
        <>
          <div className="buttonencuesta">
            <div>
              <button
                clasName="button-29"
                onClick={() => setEncuesta("+1")}
              >
                👍
              </button>

              <button
                clasName="button-29"
                onClick={() => setEncuesta("-1")}
              >
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