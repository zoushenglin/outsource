import React from 'react';
import { Flex } from 'antd-mobile';
import Banner from '../components/Banner';
import { hotLineData } from '../utils/static';
import Nav from '../components/Nav'
export default class HotLine extends React.Component{
    state = {
        screenHeight:''
    }

    componentDidMount=()=>{
        this.setState({
            screenHeight:window.screen.availHeight - 100
        });
    }

    render = ()=>
    <div>
        <Nav>
            百旺
        </Nav>
        <div style={{
            minHeight:`${this.state.screenHeight}px`,
            display:'flex',
            justifyContent:'space-around',
            flexDirection:'column',
            alignItems:'center'
            }}>
            {hotLineData.map((item,index)=>
                <Flex key={index} direction='column' justify='center'>
                    {item.icon}
                    {item.text}
                </Flex>
            )}
        </div>
    </div>
}