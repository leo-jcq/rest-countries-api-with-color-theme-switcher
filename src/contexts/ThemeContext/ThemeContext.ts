import { createContext, useContext } from 'react';

/**
 * The type of the theme
 */
export type ThemeType = 'light' | 'dark';

type ThemesType = {
    readonly light: 'light';
    readonly dark: 'dark';
};

export const THEMES: ThemesType = {
    light: 'light',
    dark: 'dark'
};

/**
 * The user's prefered theme
 */
export const USER_PREFER_DARK = window.matchMedia('(prefers-color-scheme: dark)').matches;

/**
 * The theme context
 */
type ThemeContextType = {
    /**
     * The theme
     *
     * @type {ThemeType}
     */
    theme: ThemeType;

    /**
     * Indicates if the theme is light
     *
     * @type {boolean}
     */
    isLightTeme: boolean;

    /**
     * A function to toggle the theme
     *
     * @type {VoidFunction}
     */
    toggleTheme: VoidFunction;
};

const ThemeCotext = createContext<ThemeContextType>({
    theme: USER_PREFER_DARK ? THEMES.dark : THEMES.light,
    isLightTeme: !USER_PREFER_DARK,
    toggleTheme: () => {}
});

export default ThemeCotext;

/**
 * Custom hook to use the theme context
 *
 * @export
 * @return {ThemeContextType} the theme context
 */
export function useThemeContext(): ThemeContextType {
    return useContext(ThemeCotext);
}
