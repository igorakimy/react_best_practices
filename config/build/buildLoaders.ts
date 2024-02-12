import {RuleSetRule} from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export function buildLoaders(options: BuildOptions): RuleSetRule[] {

    const {isDev} = options;

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Подключаем плагин вместо style-loader, если не dev режим
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            // Переводит CSS в CommonJS
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        localIdentName: isDev
                            ? '[path][name]__[local]--[hash:base64:5]'
                            : '[hash:base64:8]',
                    },
                }
            },
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