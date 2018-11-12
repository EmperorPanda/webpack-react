import React from 'react';
import {
  Router,
} from 'dva/router';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';

import App from './routes/users';

function RouterConfig({ history, app }) {
  return (
    <LocaleProvider locale={zhCN}>
      <Router history={history}>
        <App ></App>
      </Router>
    </LocaleProvider>
  );
}

export default RouterConfig;
