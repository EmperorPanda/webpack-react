import dva from'dva';
import initData from './initModel'
// 1. 创建 dva 实例
const app = dva();

console.log(initData,888)
// 3. 注册 Model
initData.forEach(v=>{
    app.model(v);
})

// 4. 配置路由
app.router(require('./router'));

// 5. 启动应用
app.start('#root');