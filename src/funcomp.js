import React from "react";
import { useTheme, useThemeUpdater } from "./ThemeContext.js";

function Funcomp() {
    const theme = useTheme();
    const toggletheme = useThemeUpdater();
    const styles = {
        backgroundColor: theme ? "#ccc" : "#fff",
        color: theme ? "#fff" : "#ccc",
        padding: "2rem",
        margin: "2rem",
    };
    return (
        <>
            <button onClick={toggletheme}>click</button>
            <div style={styles}>im div</div>
        </>
    );
}

export default Funcomp;
