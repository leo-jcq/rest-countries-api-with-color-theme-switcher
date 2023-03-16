import React, { useContext, useState } from 'react';

export const THEMES = {
    LIGHT: {
        name: 'light',
        elements: '#ffffff',
        bg: '#f9f9f9',
        text: '#111517',
        input: '#848484'
    },
    DARK: {
        name: 'dark',
        elements: '#2b3845',
        bg: '#202c36',
        text: '#ffffff',
        input: '#ffffff'
    }
};

const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();

/**
 * Access to the theme context
 *
 * @return {any} The theme context
 */
export function useTheme() {
    return useContext(ThemeContext);
}

/**
 * Access to the theme context updater
 *
 * @return {React.Context<any>} The theme context updater
 */
export function useThemeUpdate() {
    return useContext(ThemeUpdateContext);
}

/**
 * Check if a theme is light
 *
 * @param {any} theme The theme
 * @return {boolean} True if the theme is light, false otherwise
 */
export function isLightTeme(theme) {
    return theme.name === THEMES.LIGHT.name;
}

export default function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(THEMES.LIGHT);

    const toggleTheme = () => {
        setTheme(isLightTeme(theme) ? THEMES.DARK : THEMES.LIGHT);
    };

    return (
        <>
            <ThemeContext.Provider value={theme}>
                <ThemeUpdateContext.Provider value={toggleTheme}>
                    {children}
                </ThemeUpdateContext.Provider>
            </ThemeContext.Provider>
        </>
    );
}
