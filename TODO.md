# 22/8/3 - #1 - termina
pull 后需要 npm install; npm prune.

## 我在干什么：
1. 熟悉 Redux, debug中
2. 准备研究 Redux-Thunk：一个允许 Redux 进行异步操作的中间件。
3. 在此之后，基本上可以开始开发了。

## 对接内容：
1. 了解redux、redux-toolbox、redux-thunk。可能需要稍微了解typescript和react hooks。
2. 选定一个数据库，并研究如何部署到localhost（react-thunk 从URL读取数据）。

## 项目解释：
1. 主目录下的app.tsx是一个react native typescript文件，是app的入口。
2. src/components中的文件都是react native typescript文件，各自描述了一个app中的组件。
3. src/redux包括了redux所需的所有文件。参考redux-toolbox的文档。
4. src/globalStyles包括了所有全局复用的样式。