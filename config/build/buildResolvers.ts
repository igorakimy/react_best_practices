import {ResolveOptions} from "webpack";

export function buildResolvers(): ResolveOptions {
    return {
        // Указать расширения файлов, при импорте которых
        // не нужно использовать это самое расширение
        extensions: ['.tsx', '.ts', '.js']
    }
}