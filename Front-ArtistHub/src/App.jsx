import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { JwtContextProvider } from "./contexts/jwtContext";
import useLocalStorage from "use-local-storage";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import Register from "./pages/Register/Register";
import ArtistCards from "./pages/ArtistCards/ArtistCards";
import Projects from "./pages/Projects/Projects";
import ProjectDetail from "./pages/ProjectDetail/ProjectDetail";
import Media from "./pages/Media/Media";
import MediaDetail from "./pages/MediaDetail/MediaDetail";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import RequireAuth from "./components/RequiredAuth";

function App() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage("theme", defaultDark ? "🌚" : "☀️");

  const switchTheme = () => {
    const newTheme = theme === "☀️" ? "🌚" : "☀️";
    setTheme(newTheme);
  };

  return (
    <JwtContextProvider>
      <div className="App" data-theme={theme}>
        <Router>
          <Header switchTheme={switchTheme} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/profile"
              element={
                <RequireAuth>
                  <Profile />
                </RequireAuth>
              }
            />
            <Route path="/profile/:username/projects" element={<Projects />} />
            <Route
              path="/profile/:username/projects/:id"
              element={<ProjectDetail />}
            />
            <Route path="/profile/:username/medias" element={<Media />} />
            <Route
              path="/profile/:username/medias/:id"
              element={<MediaDetail />}
            />
            <Route path="/artists" element={<ArtistCards />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </JwtContextProvider>
  );
}

export default App;
