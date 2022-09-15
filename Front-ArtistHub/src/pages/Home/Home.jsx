import "./Home.css";
import { Title, Subtitle, Paragraph } from "../../components/Text/Text";
import { ThemeProvider } from "styled-components";
import theme from "../../components/theme";
import Button from "../../components/Buttons/Button";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate;

  return (
    <section className="home">
      <div className="background_div">
        <div className="artisthub_title">
          <div>
            <h1>Welcome to ArtistHub!</h1>
            <h2>Where you can share great projects with other artists!</h2>
          </div>
        </div>
      </div>

      <div className="all_wrapper">
        <div className="user_figure_wrapper">
          <figure className="user_figure customer_figure">
            <div className="user_img_containter">
              <img src="/assets/customer-feedback.png" alt="Customer" />
            </div>
            <h2>Customer</h2>
            <p>Lorem ipsum lorem ipsum</p>
          </figure>

          <figure className="user_figure">
            <div className="user_img_containter">
              <img src="/assets/songwriter.png" alt="Musician" />
            </div>
            <h2>Musician</h2>
            <p>Lorem ipsum lorem ipsum</p>
          </figure>

          <figure className="user_figure">
            <div className="user_img_containter">
              <img src="/assets/hand.png" alt="Plastic Artist" />
            </div>
            <h2>Plastic Artist</h2>
            <p>Lorem ipsum lorem ipsum</p>
          </figure>

          <figure className="user_figure">
            <div className="user_img_containter">
              <img src="/assets/graphic-designer.png" alt="Designer" />
            </div>
            <h2>Designer</h2>
            <p>Lorem ipsum lorem ipsum</p>
          </figure>
        </div>

        <div className="login_register_container">
          <div className="register_container">
            <Link to="/register">
              <Button buttonStyle="primary" buttonSize="medium">
                Register
              </Button>
            </Link>
          </div>

          <div className="register_container">
            <Link to="/login">
              <Button buttonStyle="primary" buttonSize="medium">
                Log in
              </Button>
            </Link>
          </div>
        </div>
        <div className="canvas_div">
          <div>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

{
  /*<h2>Register here!</h2>
          <Button buttonStyle="primary" buttonSize="medium">
            Register
          </Button>
          <p>
            Produce marvelous works of arts or music, and let us build a
            fantastic community together!
          </p>*/
}
