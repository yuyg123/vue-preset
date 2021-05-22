import axios from '../api';

// 获取5分钟站点数据
export const get5MinuteRainData = (config) => axios({
  url: '/api/live/liveMinite/getRainData',
  method: 'get',
  params: config.params,
});

export default {
  get5MinuteRainData,
};
