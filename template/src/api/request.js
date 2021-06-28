import axios from 'axios';
import { Message, MessageBox } from 'element-ui';
import store from '@/store';

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 100000, // request timeout
});

// request interceptor
service.interceptors.request.use(
  (config) => {
    // do something before request is sent
    const currentConfig = config;
    if (store.getters.token) {
      // let each request carry token
      // ['X-Token'] as a custom key.
      // please modify it according to the actual situation.
    }

    let url = config.url;
    // get参数编码
    if (config.method === 'get' && config.params) {
      url += '?';
      const keys = Object.keys(config.params);
      for (const key of keys) {
        url += `${key}=${encodeURIComponent(config.params[key])}&`;
      }
      url = url.substring(0, url.length - 1);
      config.params = {};
    }
    config.url = url;

    return currentConfig;
  },
  (error) => {
    // do something with request error
    console.log(error); // for debug
    return Promise.reject(error);
  },
);

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  (response) => {
    const res = response.data;

    // if the custom code is not 200, it is judged as an error.
    if (res.code && !(res.code.toString() === '0' || res.code.toString() === '100')) {
      Message({
        message: res.msg || 'Error',
        type: 'error',
        showClose: true,
      });

      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      if (res.code === '304' || res.code === '401') {
        // to re-login
        MessageBox.confirm('你已经退出, 或者没有权限, 请重新登陆', '确认退出', {
          confirmButtonText: '重新登陆',
          cancelButtonText: '取消',
          type: 'warning',
        })
          .then(() => {
            store.dispatch('user/resetToken')
              .then(() => {
                window.location.reload();
              });
          });
      }
      return Promise.reject(new Error(res.msg || 'Error'));
    }
    return res;
  },
  (error) => {
    console.log(`err${error}`); // for debug
    Message({
      message: error.message,
      type: 'error',
      showClose: true,
    });
    return Promise.reject(error);
  },
);

export default service;
