import React, {FC, ReactNode, useMemo, useState} from 'react';
import {ThemeContext, Theme, LOCAL_STORAGE_THEME_KEY} from "./ThemeContext";

// Получить значение теми из local storage и преобразовать к типу Theme
const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

type Props = { children: ReactNode };

const ThemeProvider: FC<Props> = ({children}) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    // Не создавать объект заново, а возвращать уже существующий,
    // используя useMemo
    const defaultProps = useMemo(() => ({
        theme: theme,
        setTheme: setTheme,
    }), [theme])

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;