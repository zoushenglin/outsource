import React from 'react';
import { connect } from 'dva';
import styles from './AddUser.css';

function AddUser({users,dispatch,history}) {
  return (
    <div>
      <input type="text" ref={(username)=>users.username=username}  />
      <br/>
      <input type="password" ref={password=>users.password=password} />
      <br/>
      <button onClick={()=>{
        dispatch({type:'users/addUser',history:history,param:{username:users.username.value,password:users.password.value}})
      }}>注册</button>
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(({users})=>({users}))(AddUser);
