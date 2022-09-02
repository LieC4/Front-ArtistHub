import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { JwtContextProvider } from "./contexts/jwtContext";
import useLocalStorage from "use-local-storage";



function App() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage("theme", defaultDark ? "🌚" : "☀️");

  const switchTheme = () => {
    const newTheme = theme === "☀️" ? "🌚" : "☀️";
    setTheme(newTheme);
  };

  return (
    <JwtContextProvider>
    <div className="App">
    <Router>
          <button className="mode" onClick={switchTheme}>
            Mode {theme === "☀️" ? "🌚" : "☀️"}{" "}
          </button>

          <Home />


      
    </Router>
    </div>
    </JwtContextProvider>
  )
}

export default App
