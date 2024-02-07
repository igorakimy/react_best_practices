import path from 'path';
import webpack from 'webpack';
// Импортировать плагин
import HTMLWebpackPlugin from 'html-webpack-plugin';

const config: webpack.Configuration = {

    // Режим сборки
    mode: "development",

    // Указываем путь к файлу, который будет являться точкой входа
    entry: path.resolve(__dirname, 'src', 'index.ts'),

    // Настройки для сборки приложения
    output: {
        // Название файла сборки (поддержка динамических значений)
        filename: "[name].[contenthash].js",
        // Путь, где будет храниться файл сборки
        path: path.resolve(__dirname, 'build'),
        // Очищает путь, где будет храниться файл сборки перед сборкой
        clean: true,
    },

    // Подключение сторонних плагинов
    plugins: [
        new HTMLWebpackPlugin({
            // Указать путь к шаблону
            template: path.resolve(__dirname, 'public', 'index.html')
        }),
        // Плагин для отслеживания прогресса сборки
        new webpack.ProgressPlugin(),
    ],

    module: {
        // Конфигурация загрузчиков
        rules: [
            {
                // Поиск по регулярке файлов, которые будут
                // проходить через загрузчик
                test: /\.tsx?$/,
                // Указать модуль загрузчика, который будет загружать файлы
                use: 'ts-loader',
                // Исключить из обработки модули ноды
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        // Указать расширения файлов, при импорте которых
        // не нужно использовать это самое расширение
        extensions: ['.tsx', '.ts', '.js']
    }
}

export default config;