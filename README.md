
## 这个项目是我在开发过程中想到的一些模块化或者说方便开发的东西，把这些东西稍微整理了一下，目的是方便开发和练手
* ### HOW USE?
     - #### git clone [https://github.com/shen774411223d/project_cli.git](https://github.com/shen774411223d/project_cli.git)
     - #### cd project_cli
     - #### npm install && npm run serve

- 模块的定义？
     - views下每个文件作为一个模块，即按页面分模块
     - store下每个文件作为一个模块，即按功能或页面分模块
- vuex
     - index.js 配置文件
     - root 为根状态机，存放公用或使用频率高的state和methods
     - 其他文件均为模块化即：namespaced。
	- 在index里使用了context自动引入文件夹下所有模块（不包含index.js）
	- 因为我找不到很好的方法使用fs和path模块。所以用了webpack自带的方法。。。
- router
      - 根目录下 router.js为路由配置文件。使用了require.context作为模块化管理的桥梁
      - 请在每个模块的根目录下新建route.js文件作为该模块的路由文件
- .env文件为项目的环境变量目录，proxy代理写在了env文件里
- api文件为接口文件
- components文件为组件目录
     - common为公用组件
     - views下页面所需要的组件请创建与页面相同名字的文件夹，在此文件夹下创建组件
- pulgins文件夹存放插件和js
- server 类似mock server。是用koa启的一个服务器，端口：4001 使用方法参考koa
- scripts命令里的参数可以通过process.env获取
- server文件应该不被打包