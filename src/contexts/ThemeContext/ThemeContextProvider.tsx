import useLocalStorage from '@/hooks/useLocalStorage';
import { FC, PropsWithChildren, useCallback, useMemo } from 'react';
import ThemeCotext, { THEMES, ThemeType, USER_PREFER_DARK } from './ThemeContext';

/**
 * The theme context provider
 *
 * @type {FC<PropsWithChildren>}
 */
const ThemeContextProvider: FC<PropsWithChildren> = ({ children }) => {
    const [theme, setTheme] = useLocalStorage<ThemeType>(
        'theme',
        USER_PREFER_DARK ? THEMES.dark : THEMES.light
    );

    const isLightTeme = useMemo(() => theme === THEMES.light, [theme]);

    const toggleTheme = useCallback(() => {
        setTheme(isLightTeme ? THEMES.dark : THEMES.light);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLightTeme]);

    return (
        <ThemeCotext.Provider value={{ theme, isLightTeme, toggleTheme }}>
            <div className={`theme theme--${theme}`}>{children}</div>
        </ThemeCotext.Provider>
    );
};

export default ThemeContextProvider;
