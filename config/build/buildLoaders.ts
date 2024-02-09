import {RuleSetRule} from "webpack";

export function buildLoaders(): RuleSetRule[] {

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Создает `style` ноды из JS строк
            "style-loader",
            // Переводит CSS в CommonJS
            "css-loader",
            // Компилирует Sass в CSS
            "sass-loader",
        ]
    }

    const typescriptLoader = {
        // Поиск по регулярке файлов, которые будут
        // проходить через загрузчик
        test: /\.tsx?$/,
        // Указать модуль загрузчика, который будет загружать файлы
        use: 'ts-loader',
        // Исключить из обработки модули ноды
        exclude: /node_modules/,
    }

    return [
        typescriptLoader,
        cssLoader,
    ]
}