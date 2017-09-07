import dva from 'dva';
import './index.css';

// 1. Initialize
const app = dva();

// app.model(require("./models/users"));

// 4. Router
app.router(require('./router_end'));

// 5. Start
app.start('#root');
