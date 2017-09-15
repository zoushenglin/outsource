import dva from 'dva';

// 1. Initialize
const app = dva();

// app.model(require("./models/users"));

// 4. Router
app.router(require('./router_result'));

// 5. Start
app.start('#root');
