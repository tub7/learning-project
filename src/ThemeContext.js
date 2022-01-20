import React, { useState, useContext } from "react";

const Themecontext = React.createContext();
const Themecontextupdater = React.createContext();

export function useTheme() {
    return useContext(Themecontext);
}
export function useThemeUpdater() {
    return useContext(Themecontextupdater);
}

export default function ThemeProvider({ children }) {
    const [theme, settheme] = useState(false);

    function toggletheme() {
        settheme(!theme);
    }

    return (
        <Themecontext.Provider value={theme}>
            <Themecontextupdater.Provider value={toggletheme}>
                {children}
            </Themecontextupdater.Provider>
        </Themecontext.Provider>
    );
}
