import React, { memo } from 'react';
import './Header.css';
import darkModeBlack from '../../assets/imgs/dark-mode-black.png';
import darkModeWhite from '../../assets/imgs/dark-mode-white.png';

const Header = memo(({ currentTheme, theme, switchTheme }) => {
    return (
        <header style={{ color: currentTheme.text, backgroundColor: currentTheme.elements }}>
            <h1>Where in the world?</h1>

            <span className="theme" onClick={switchTheme}>
                <img
                    src={
                        currentTheme.elements === theme.light.elements
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
