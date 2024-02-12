import HTMLWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildPlugins({paths}: BuildOptions): webpack.WebpackPluginInstance[] {
    return [
        new HTMLWebpackPlugin({
            // Указать путь к шаблону
            template: paths.html
        }),
        // Плагин для отслеживания прогресса сборки
        new webpack.ProgressPlugin(),
        // Плагин для создания отдельных css файлов для каждого js файла
        new MiniCssExtractPlugin({
            // Указать динамическое название создаваемых файлов
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        }),
    ]
}