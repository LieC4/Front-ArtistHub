import { useContext } from "react";
import { JwtContext } from "../../contexts/jwtContext";
import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import Button from "../Buttons/Button";
import "./Header.css";
import { Title } from "../Text/Text";

const Header = ({ switchTheme }) => {
  const { user, logout } = useContext(JwtContext);
  let navigate = useNavigate();

 

  return (
    <header>
      <nav>
        <div className="upperside">
          <div className="logo_container">

            
          </div>
          <div className="upperside_title">
            <Link to="/">
              <h1>ArtistHub</h1>
            </Link>
          </div>
        </div>
        <ul>
          <li>
            <Link to="/">
              <Button buttonStyle="headerbutton" buttonSize="small">
                Home
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/artists">
              <Button buttonStyle="headerbutton" buttonSize="small">
                Artists
              </Button>
            </Link>
          </li>
          {user ? (
            <>
              <li>
                <Link to="/profile">
                  <Button buttonStyle="headerbutton" buttonSize="small">
                    Profile
                  </Button>
                </Link>
              </li>
              <li>
                <Button
                  buttonStyle="headerbutton"
                  buttonSize="small"
                  onClick={() => logout() & navigate("/login")}
                >
                  Logout
                </Button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">
                  <Button buttonStyle="headerbutton" buttonSize="small">
                    Log in
                  </Button>
                </Link>
              </li>
              <li>
                <Link to="/register">
                  <Button buttonStyle="headerbutton" buttonSize="small">
                    Register
                  </Button>
                </Link>
              </li>
            </>
          )}
          <li>
            <div className="upperside_toggle">
              <div className="toggle">
                <input className="input" type="checkbox" id="switch" />
                <label className="label" htmlFor="switch" onClick={switchTheme}>
                  Toggle
                </label>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
