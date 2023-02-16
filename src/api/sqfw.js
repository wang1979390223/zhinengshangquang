import request from '@/utils/request';
export const stopApi = () => {
  return request({
    url: '/tckf/place',
    methods: 'GET'
  });
};
