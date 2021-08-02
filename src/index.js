import dva from 'dva';
import createLoading from 'dva-loading'
import { browserHistory } from 'dva/router';
import weather from '@/models/weather';
import routerConf from '@/router';
import './index.css';

const app = dva({
  history: browserHistory
});

app.use(createLoading());

app.model(weather);

app.router(routerConf);

app.start('#root');
