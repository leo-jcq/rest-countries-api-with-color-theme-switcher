import { useThemeContext } from '@/contexts/ThemeContext/ThemeContext';
import themeIconDark from '@imgs/theme-icon-dark.png';
import themeIconLight from '@imgs/theme-icon-light.png';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

/**
 * The header of the application
 * 
 * @type {FC}
 */
const Header: FC = () => {
    const { theme, isLightTeme, toggleTheme } = useThemeContext();

    return (
        <header className="header">
            <Link to="/" className="header__title">
                Where in the world?
            </Link>

            <button className="header__theme" title="Toggle theme" onClick={toggleTheme}>
                <img
                    src={isLightTeme ? themeIconLight : themeIconDark}
                    alt={theme}
                    className="header__theme__img"
                />
                Dark mode
            </button>
        </header>
    );
};

export default Header;
