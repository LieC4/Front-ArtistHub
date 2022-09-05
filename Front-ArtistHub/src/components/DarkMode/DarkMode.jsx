import React from "react";

const DarkMode = () => {

    const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const [theme, setTheme] = useLocalStorage("theme", defaultDark ? "🌚" : "☀️");
  
    const switchTheme = () => {
      const newTheme = theme === "☀️" ? "🌚" : "☀️";
      setTheme(newTheme);
    };
 return 
 <button className="mode" onClick={switchTheme}>
 Mode {theme === "☀️" ? "🌚" : "☀️"}{" "}
</button>
};

export default DarkMode;