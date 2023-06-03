import { CSSProperties, FC, ReactNode, createContext, useContext, useState } from 'react';

export const THEMES: ThemesInterface = {
    light: 'light',
    dark: 'dark'
};

const USER_PREFER_DARK = window.matchMedia('(prefers-color-scheme: dark)').matches;

const ThemeContext = createContext<ThemeType>(USER_PREFER_DARK ? THEMES.dark : THEMES.light);
const ThemeUpdateContext = createContext(() => {});

export function useTheme(): ThemeType {
    return useContext(ThemeContext);
}

export function useThemeUpdate(): () => void {
    return useContext(ThemeUpdateContext);
}

export function isLightTeme(theme: ThemeType): boolean {
    return theme === THEMES.light;
}

interface ThemeProviderProps {
    children: ReactNode;
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<ThemeType>(USER_PREFER_DARK ? THEMES.dark : THEMES.light);

    const toggleTheme = () => {
        setTheme(isLightTeme(theme) ? THEMES.dark : THEMES.light);
    };

    return (
        <ThemeContext.Provider value={theme}>
            <ThemeUpdateContext.Provider value={toggleTheme}>
                <div className={'app ' + theme} style={COLORS[theme] as CSSProperties}>
                    {children}
                </div>
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;

const COLORS = {
    light: {
        '--name': 'light',
        '--elements': '#ffffff',
        '--bg': '#f9f9f9',
        '--text': '#111517',
        '--input': '#848484'
    },
    dark: {
        '--name': 'dark',
        '--elements': '#2b3845',
        '--bg': '#202c36',
        '--text': '#ffffff',
        '--input': '#ffffff'
    }
};
