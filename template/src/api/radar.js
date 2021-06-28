import request from './request';

// 获取雷达产品格点数据
export const getRadarProductGridData = (params) => request({
  url: '/radar/getRadarProductGridData',
  method: 'get',
  params,
});

export default {
  getRadarProductGridData,
};
