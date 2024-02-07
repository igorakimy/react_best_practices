import {RuleSetRule} from "webpack";

export function buildLoaders(): RuleSetRule[] {

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
    ]
}