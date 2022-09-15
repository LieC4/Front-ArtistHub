import { useNavigate } from "react-router-dom";
import "./MediaCard.css";

const MediaCard = ({ user, media }) => {
  let navigate = useNavigate();

  return (
    <figure className="mediacard">
      <h4 className="title">{media.mediaTitle}</h4>
      <div>
        {" "}
        {media.mediaImage != undefined ? (
          <div>
            <img src={media.mediaImage} alt={media.mediaTitle} />
          </div>
        ) : (
          <div>
            <img
              src="https://cdn3.iconfinder.com/data/icons/rcons-user-profession/32/designer-512.png"
              alt={media.mediaTitle}
            />
          </div>
        )}
      </div>
      <p className="description">Media: {media.mediaDescription}</p>
      <p className="description">Created at: {media.createdAt}</p>
      <p className="description">Last update: {media.updatedAt}</p>
      <div>
        <button
          type="button"
          onClick={() =>
            navigate(`/profile/${user.username}/medias/${media._id}`)
          }
        >
          See my media
        </button>
      </div>
    </figure>
  );
};

export default MediaCard;
