
### 问题

1. 没有引入 React （可以不引入，需要webpack配置，往webpack 深入, 如常用的优化技巧）
2. this 及class与构造函数的编译 问题 （this 原型链）
3. fetch 返回 没有做 失败判断 （错误处理及兜底/promise）
4. parseInt 第二个参数问题     （面试题   [1,2,3...14].map(parseInt)）
5. code为 undefined/null 返回 undefined/null字符串,   （隐式转换以及valueOf和toString的区别）
6. filter、map -> reduce （数组）
7. key （react key） 
8. setInterval 组件卸载未做清除，扩展：如果接口卡住，或者延迟较大，该如何推迟后面的获取时间，而不累加函数调用

### 优化 （组件设计、需求复杂性判断、性能度量）

1. 子组件 pure（ 更新 与 性能 ）
2.  子组件 itemStyle 优化 （ props 传对象的问题 ）
3. 子组件 handleClick 优化 （同上 及 事件处理的经验 ）
4. 组件拆分，使频繁更新的date不影响list.map和props比对

### hooks 相关

1. 转成hooks 写法 （注意 memo,useMemo,useCallback）
2. 组件更新方式的探寻
