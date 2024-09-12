import { createContext, useContext } from 'react';

export type ThemeType = 'light' | 'dark';

export const THEMES: { light: 'light'; dark: 'dark' } = {
    light: 'light',
    dark: 'dark'
};

export const USER_PREFER_DARK = window.matchMedia('(prefers-color-scheme: dark)').matches;

type ThemeContextType = {
    theme: ThemeType;
    isLightTeme: boolean;
    toggleTheme: VoidFunction;
};

const ThemeCotext = createContext<ThemeContextType>({
    theme: USER_PREFER_DARK ? THEMES.dark : THEMES.light,
    isLightTeme: !USER_PREFER_DARK,
    toggleTheme: () => {}
});

export default ThemeCotext;

export function useThemeContext(): ThemeContextType {
    return useContext(ThemeCotext);
}
