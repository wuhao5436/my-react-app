# 框架
- 解决 decorator 不能使用的问题 
    - 安装 `react-app-rewired` `customize-cra` 重写webpack配置
    - 添加 babel 配置写入 `config-overrides`
    - [参考文档](https://www.jianshu.com/p/3a2d26418d0b)


# 目录结构
```
component
    border-hoc: 测试嵌套生成hoc
    form-hoc: 模拟rc-form
    modal: 测试 createPortal
pages
    form: 测试rc-form
    modal-test: 测试modal组件

```

# react 组件
- modal 使用react-dom 的 createPortal 传送门挂载到全局
- hoc 模拟 rc-form 实现


