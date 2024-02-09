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