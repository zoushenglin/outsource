import React from 'react';
import { connect } from 'dva';
import { List, Button } from 'antd-mobile';
const Users = ({users,dispatch,history})=>{
    return (
      <div>
        <List>
          {
            users.users.map(item=>{
              return (
                <List.Item key={item.id}
                 extra={<span style={{color:'blue'}}
                 onClick={()=>{
                  dispatch({type:'users/removeUser_',id:`${item.id}`})
                 }}>删除</span>}>
                  {item.username}
                </List.Item>
              );
              }
            )
          }
        </List>
        <Button style={{backgroundColor:'blue',color:'white'}} onClick={()=>{
          history.push(`/addUser`);
        }}>
          添加用户
        </Button>
      </div>
    );
}

export default connect(({users})=>({users}))(Users);
