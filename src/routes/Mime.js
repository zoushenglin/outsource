import React from 'react';
import { Flex, List } from 'antd-mobile';
import Banner from '../components/Banner';
import Nav from '../components/Nav';
import styles from '../assets/css/style.css';
export default class Mime extends React.Component{
    static contextTypes = {
        router:React.PropTypes.Object
    }
    render = ()=>
    <div>
        <div className={styles.mimeBg}>
            <div style={{display:'flex',flexDirection:'column',height:'100%'}}>
                <div style={{display:'flex',flexDirection:'column',flex:1,color:'white',alignItems:'center',paddingTop:'10px'}}>
                    百旺
                </div>
                <div onClick={()=>{
                        {/*this.context.router.push(`/login`);*/}
                        this.context.router.push(`/login`)
                    }} style={{display:'flex',flexDirection:'column',flex:1,justifyContent:'center',color:'white',alignItems:'center'}}>
                    请登录
                </div>
            </div>
        </div>
        <List>
            <List.Item
            arrow="horizontal"
            thumb={require('../assets/img/qyxx.svg')}
            onClick={() => {}}
            >
            企业基本信息
            </List.Item>
            <List.Item
            arrow="horizontal"
            thumb={require('../assets/img/xgmm.svg')}
            onClick={() => {}}
            >
            修改密码
            </List.Item>
            <List.Item
            arrow="horizontal"
            thumb={require('../assets/img/sz.svg')}
            onClick={() => {}}
            >
            设置
            </List.Item>
        </List>
    </div>
}
