import request from '@/utils/request';
export const kllApi = () => {
  return request({
    url: '/screen/getScreenMessage',
    methods: 'GET'
  });
};
