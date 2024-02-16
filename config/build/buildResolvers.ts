import {ResolveOptions} from "webpack";
import {BuildOptions} from "./types/config";

export function buildResolvers(options: BuildOptions): ResolveOptions {
    return {
        // Указать расширения файлов, при импорте которых
        // не нужно использовать это самое расширение
        extensions: ['.tsx', '.ts', '.js'],

        // Установить приоритет на абсолютные пути
        preferAbsolute: true,

        // Указать, какие именно пути, можно использовать как абсолютные
        modules: [
            options.paths.src,
            'node_modules',
        ],

        // Указать, какой файл будет являться главным для каждого модуля
        mainFiles: ['index'],

        // Указать псевдоним для путей импортов, например @
        alias: {},
    }
}