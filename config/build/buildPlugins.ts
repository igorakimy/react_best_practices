import HTMLWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import {BuildOptions} from "./types/config";

export function buildPlugins({paths}: BuildOptions): webpack.WebpackPluginInstance[] {
    return [
        new HTMLWebpackPlugin({
            // Указать путь к шаблону
            template: paths.html
        }),
        // Плагин для отслеживания прогресса сборки
        new webpack.ProgressPlugin(),
    ]
}