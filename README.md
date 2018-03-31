
# 项目介绍
    本项目出在一道前端面试题，题中并未注明使用技术，本例中，使用技术为angular4.X。
## 运行环境
    node V9.4.0
    npm  5.6.0
## 涉及主要技术
    sass
    typescript
## 运行方式
    下载本代码，配置node以及npm版本。
    使用命令npm install 下载安装依赖。
    使用命令npm start 或者 npm start --open启动项目。
    项目启动后，浏览器访问本地地址 `http://localhost:4200/`查看。
## 项目原题
    考古学家们在北京四环到五环之间发现了一系列圆形的奇怪的围墙，经过长时间的考证，他们发现了其中的秘密。

    很多很多年前，还没有出现互联网的地球，有两支敌对的部落，他们是生活在东半球的9am和生活在西半球的6pm。

    为了抵御对方的侵略，两支部落都修建了大量的圆形的围墙。更奇怪的是，这些围墙都是标准的圆形，而且互不相交，也不相切。

    这一批被发现的围墙有11座，为了方便记录，研究人员决定忽略墙的高度和宽度，并把每座墙的圆心位置和半径都记录了下来.

    他们想把这些圆形画下来，在计算机上观察墙的特点，但是他们并不熟悉计算机的数据处理，希望您能帮忙做这个事情。

### 紧急需求
    通过任意HTML/JavaScript/CSS技术，读取他们记录的数据；

    根据这些数据在一个网页上将这些圆形的墙画出来；

### 非紧急需求
    研究人员希望能在刚刚画出的图形上用鼠标单击任意一点时，那个点所在的围墙的圆形加粗显示。

### 任务提交
    他们也许会将您的解决方案集成到研究系统中，所以请给他们展示您最优秀的代码——正确，高效，可读，可维护等。
## 涉及数据
{
    n: 11,
    circles: [
        {
            x: 0,
            y: 0,
            r: 1000
        },
        {
            x: -500,
            y: 0,
            r: 400
        },
        {
            x: -700,
            y: 0,
            r: 100
        },
        {
            x: -350,
            y: 0,
            r: 150
        },
        {
            x: 0,
            y: 750,
            r: 200
        },
        {
            x: 0,
            y: -500,
            r: 100
        },
        {
            x: 0,
            y: -500,
            r: 200
        },
        {
            x: 500,
            y: 0,
            r: 300
        },
        {
            x: 350,
            y: 0,
            r: 50
        },
        {
            x: 630,
            y: -100,
            r: 100
        },
        {
            x: 1000,
            y: 1000,
            r: 250
        }
    ]
}
# MyApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
