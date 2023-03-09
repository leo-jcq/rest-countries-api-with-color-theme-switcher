import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

const App = () => {
    const theme = {
        light: {
            elements: '#ffffff',
            bg: '#f9f9f9',
            text: '#111517',
            input: '#848484'
        },
        dark: {
            elements: '#2b3845',
            bg: '#202c36',
            text: '#ffffff',
            input: '#ffffff'
        }
    };

    const [currentTheme, setCurrentTheme] = useState(theme.light);
    
    /**
     * Switches the theme between light and dark
     *
     */
    const handleThemeSwitch = () => {
        setCurrentTheme(currentTheme.elements === theme.light.elements ? theme.dark : theme.light);
    };

    return (
        <>
            <Header currentTheme={currentTheme} theme={theme} switchTheme={handleThemeSwitch} />
            <Main currentTheme={currentTheme} theme={theme} />
        </>
    );
};

createRoot(document.querySelector('#root')).render(<App />);
