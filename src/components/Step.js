import React from 'react';
import { Steps } from 'antd-mobile';
const Step = Steps.Step;
export default class MyStep extends React.Component{
  render = ()=>{
    return (
      <div className='flex' style={{height:40}}>
        {this.props.children}
      </div>
    );
  }
}

