import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import {Configuration} from "webpack";
import {BuildOptions} from "./types/config";
import {buildDevServer} from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): Configuration {

    const {
        mode,
        paths,
        isDev
    } = options;

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
            rules: buildLoaders(options),
        },

        // Конфигурация резолверов
        resolve: buildResolvers(options),

        // Генерация исходной карты скриптовых файлов, собранных в один
        // для удобства отладки в dev режиме
        devtool: isDev ? 'inline-source-map' : undefined,

        // Конфигурация сервера для разработки
        devServer: isDev ? buildDevServer(options) : undefined,
    }
}