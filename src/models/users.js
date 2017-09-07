import { getUsers,register, removeUser } from '../services/services';
export default {
  namespace: 'users',
  state: {
    users: []
  },
  reducers: {
    getUsers(state,{users}){
      return {
        users:users
      }
    },
    deleteUser(state,{users}){
      return {
        users:users
      }
    },
    addUser_(state,{users}){
      return {
        ...state,
        users:users
      }
    }
  },
  effects:{
    *queryUsers(action,{call,put}){
      const data = yield call(getUsers);
      yield put({type:'getUsers',users:data.data?data.data:[]});
    },
    *removeUser_(action,{call,put}){
      const data = yield call(removeUser,action.id);
      yield put({type:'getUsers',users:data.data.data?data.data.data:[]});
    },
    *addUser(action,{call,put}){
      const registerData = yield call(register,action.param);
      if(registerData.errno == 0){
        action.history.goBack();
      }
      //put({type:'addUser_',registerSuccess:data});
    }
  },
  subscriptions: {
    setup({ history, dispatch }) {
      // Subscribe history(url) change, trigger `load` action if pathname is `/`
      return history.listen(({ pathname }) => {
        if (pathname === '/Users') {
          dispatch({ type: 'queryUsers' });
        }
      });
    },
  }
};
