import { FC } from 'react';
import darkModeBlack from '../../assets/dark-mode-black.png';
import darkModeWhite from '../../assets/dark-mode-white.png';
import { isLightTeme, useTheme, useThemeUpdate } from '../../contexts/ThemeContext';
import './Header.scss';

const Header: FC = () => {
    const theme = useTheme();
    const toggleTheme = useThemeUpdate();

    return (
        <header className="header">
            <h1 className="title">Where in the world?</h1>

            <span className="theme" onClick={toggleTheme}>
                <img src={isLightTeme(theme) ? darkModeBlack : darkModeWhite} alt="Theme" />
                Dark mode
            </span>
        </header>
    );
};

export default Header;
