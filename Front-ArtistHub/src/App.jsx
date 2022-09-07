import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { JwtContextProvider } from "./contexts/jwtContext";
import useLocalStorage from "use-local-storage";
import Button from "./components/Buttons/Button";
import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import Profile from "./pages/Profile/Profile"
import Register from "./pages/Register/Register"
import ArtistCards from "./pages/ArtistCards/ArtistCards"
import Projects from "./pages/Projects/Projects"
import ProjectDetail from "./pages/ProjectDetail/ProjectDetail"
import Media from "./pages/Media/Media"
import MediaDetail from "./pages/MediaDetail/MediaDetail"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer";



function App() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage("theme", defaultDark ? "🌚" : "☀️");

  const switchTheme = () => {
    const newTheme = theme === "☀️" ? "🌚" : "☀️";
    setTheme(newTheme);
  };

  const next = () => {
    console.log("Next")
  }
  
  const sayHello = () => {
    console.log("Hello")
  }
  

  return (
    <JwtContextProvider>
    <div className="App">
    <Router>
          <button className="mode" onClick={switchTheme}>
            Mode {theme === "☀️" ? "🌚" : "☀️"}{" "}
          </button>
          <Button btnFunction={next} text="Next"/>
          <Button btnFunction={sayHello} text="Hello"/>
          <Header />
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/*TODO: - by Username en el controlador */} 
          <Route path="/profile/:id" element={<Profile />} />
          {/*TODO: - Auth en Profile */} 
          <Route path="/profile/:id/projects" element={<Projects />} />
          <Route path="/profile/:id/projects/:id" element={<ProjectDetail />} />
          <Route path="/profile/:id/medias" element={<Media />} />
          <Route path="/profile/:id/medias/:id" element={<MediaDetail />} />
          <Route path="/artists" element={<ArtistCards />} />
          </Routes>
          <Footer />


      
    </Router>
    </div>
    </JwtContextProvider>
  )
}

export default App
