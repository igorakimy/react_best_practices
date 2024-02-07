import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import {Configuration} from "webpack";
import {BuildOptions} from "./types/config";

export function buildWebpackConfig(options: BuildOptions): Configuration {

    const {mode, paths} = options;

    return {
        // Режим сборки
        mode: mode,

        // Указываем путь к файлу, который будет являться точкой входа
        entry: paths.entry,

        // Настройки для сборки приложения
        output: {
            // Название файла сборки (поддержка динамических значений)
            filename: "[name].[contenthash].js",
            // Путь, где будет храниться файл сборки
            path: paths.build,
            // Очищает путь, где будет храниться файл сборки перед сборкой
            clean: true,
        },

        // Подключение сторонних плагинов
        plugins: buildPlugins(options),

        module: {
            // Конфигурация загрузчиков
            rules: buildLoaders(),
        },

        // Конфигурация резолверов
        resolve: buildResolvers(),
    }
}