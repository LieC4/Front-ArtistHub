import { useContext } from "react"
import { JwtContext } from "../../contexts/jwtContext"
import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import Button from "../Buttons/Button";

const Header = () => {
    const {user, logout} = useContext(JwtContext);
    let navigate = useNavigate();


    return (
        <header>
            <nav>
                <div>
                    <img src="" alt="logo" />
                </div>
                <SearchBar/>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/artists">Artists</Link>
                    </li>
                    {user ? (
                    <li>
                        <Link to="/profile">Profile</Link>
                    </li>
                    ) : null}
                </ul>
                <div>
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
                <Link to="/login">Login</Link>
            </li>

            <li className="control-li">
                <Link to="/register">Register</Link>
            </li>
            </ul>
        )}
                </div>
            </nav>

        </header>
    )
}

export default Header;