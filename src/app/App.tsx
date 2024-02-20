import React from 'react';
import {Link} from 'react-router-dom';
// Импортируем файл со стилями
import './styles/index.scss';
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";

const App = () => {
    // Использование кастомного хука
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <button onClick={toggleTheme}>Сменить тему</button>
            <AppRouter />
        </div>
    );
};

export default App;