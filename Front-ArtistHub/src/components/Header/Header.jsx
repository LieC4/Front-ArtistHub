import { useContext } from "react"
import { JwtContext } from "../../contexts/jwtContext"
import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import Button from "../Buttons/Button";
import "./Header.css"

const Header = ({switchTheme}) => {
    const {user, logout} = useContext(JwtContext);
    let navigate = useNavigate();


    return (
        <header>
            <nav>
                <div className="logo">
                    <img src="https://cdn.discordapp.com/attachments/997072273892724886/1017342131754516480/artisthub_logo.png" alt="logo" />
                </div>
                <div className="buscar">
                <div className="searchbar_salvaje">
                    <SearchBar/>
                </div>
                </div>
                <ul className="nav">
                    <li className="li-home">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="li-home">
                        <Link to="/artists">Artists</Link>
                    </li>
                    {user ? (
                    <li>
                        <Link to="/profile">Profile</Link>
                    </li>
                    ) : null}
                </ul>
                <div className="control">
                    {/*TODO: Revisar al hacer login y register*/}
                {user ? (
            <>
            <p>{user.username}</p>
            {user.avatar !== undefined ? (
                <img src={user?.avatar} alt="Artist Avatar" />
            ) : null}

            <Button btnFunction={logout() & navigate("/")} text="Logout"/>

            </>
            ) : (
            <ul className="control-ul">
            <li className="control-li">
                <Link to="/register">Register</Link>
            </li>
            <li className="control-li">
                <Link to="/login">Login</Link>
            </li>


            </ul>
        )}
                </div>
                <div className="toggle">
                <input className="input" type="checkbox" id="switch" /><label className="label" htmlFor="switch" onClick={switchTheme}>Toggle</label>
                </div>
            </nav>

        </header>
    )
}

export default Header;