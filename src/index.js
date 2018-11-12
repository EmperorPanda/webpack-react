import dva from'dva';

// 1. 创建 dva 实例
const app = dva();

// 3. 注册 Model
app.model(require('./models/users/users').default);

// 4. 配置路由
app.router(require('./router'));

// 5. 启动应用
app.start('#root');