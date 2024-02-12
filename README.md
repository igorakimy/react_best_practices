Инициализировать проект, создав шаблонный **package.json** файл:
```bash
npm init -y
```
Установить webpack для работы в dev режиме:
```bash
npm install webpack webpack-cli --save-dev
```
Установить модули для поддержки typescript:
```bash
npm i --save-dev typescript ts-loader
```
Установить webpack дополнения для поддержки typescript:
```bash
npm i --save-dev typescript ts-node @types/node @types/webpack
```
Установить webpack-dev-server для автоматической сборки при изменении:
```bash
npm i --save-dev webpack-dev-server @types/webpack-dev-server
```
Установить react зависимости:
```bash
npm i react react-dom
```
Установить типы для react зависимостей: 
```bash
npm i -D @types/react @types/react-dom
```
Установить зависимости для поддержки sass препроцессора: 
```bash
npm i --save-dev sass-loader sass webpack style-loader css-loader
```
Установить плагин, который создает отдельный css файл для каждого js файла:
```bash
npm i --save-dev mini-css-extract-plugin
```