import request from '../utils/request';
import { PX, URL } from '../utils/urlConst';

//首页查询税务热点列表
function getTaxNewsList(param,callback) {
    if(!param){
      console.log('必须有参数');
      return ;
    }
    if(!param.rows){
      param.rows = 5;
    }
    return request(`${PX}${URL.add15}`,param,callback);
}
function getUsers(){
  return request(`/api/user/user/findusers`);
}
function register(param){
  return request(`/api/user/user/register`,param)
}
function removeUser(id){
  return request(`/api/user/user/delete`,{id:id});
}
function getCitys(){
  return request(`/diyH5/terGoods/getTerGoodsForDiy`)
}
module.exports = {
  getTaxNewsList,
  getUsers,
  register,
  removeUser,
  getCitys
}
