

HMR HOT MODULE RELOADING

create directory
$ npm init
create .gitignore
$ npm i -D webpack node-libs-browser 
$ npm i -D html-webpack-plugin
$ npm i -D webpack-dev-server  /** HMR **/
$ npm i serve -g // In case we want a simple server

create webpack.config.js
  sections { entry: {}, output: {}, plugins: {} } 
  
$ node_modules/.bin/webpack

create /app
       /main.js
       /component.js
       
$ npm i -D webpack-merge 
$ npm i -D babel-core babel-loader

add jsx loader

$ npm i -S react
$ npm i -D react-hot-loader
