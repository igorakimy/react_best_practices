declare module '*.scss' {
    interface IClassNames {
        [classNae: string]: string
    }
    const className: IClassNames;
    export = className;
}