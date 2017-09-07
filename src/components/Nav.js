import React from 'react';
import { Flex } from 'antd-mobile';
export default class GridComponent extends React.Component{
    constructor(props){
        super(props);
    }
    render = ()=>
        <div style={{
            display:'flex',
            justifyContent:'space-between',
            alignItems:'center',
            height:'50px',
            backgroundColor:'#ff621D',
            color:'white',
            ...this.props.style
        }}>
            <div style={{paddingLeft:'5px',display:'flex',flex:'1',justifyContent:'flex-start'}}>
                {this.props.leftContent}
            </div>
            <div style={{display:'flex',flex:'1',justifyContent:'center'}}>
                {this.props.children}
            </div>
            <div style={{paddingRight:'5px',display:'flex',flex:'1',justifyContent:'flex-end'}}>
                {this.props.rightContent}
            </div>
        </div>
}