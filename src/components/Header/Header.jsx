import React, { memo } from 'react';
import { useTheme, useThemeUpdate, isLightTeme } from '../../contexts/ThemeContext';
import './Header.css';
import darkModeBlack from '../../assets/imgs/dark-mode-black.png';
import darkModeWhite from '../../assets/imgs/dark-mode-white.png';

const Header = memo(() => {
    const theme = useTheme();
    const toggleTheme = useThemeUpdate();

    return (
        <header style={{ color: theme.text, backgroundColor: theme.elements }}>
            <h1>Where in the world?</h1>

            <span className="theme" onClick={toggleTheme}>
                <img
                    src={
                        isLightTeme(theme)
                            ? darkModeBlack
                            : darkModeWhite
                    }
                    alt="Dark mode"
                />
                Dark mode
            </span>
        </header>
    );
});

export default Header;
