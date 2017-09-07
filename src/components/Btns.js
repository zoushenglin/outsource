import React from 'react';
export default class Btns extends React.Component{
  render = ()=>{
    return (
      <div className='flex full-width fix'>
        {
          this.props.leftBtn?<button className='left-btn' onClick={this.props.leftBtnClick}>上一步</button>:null
        }
        
        <button className='right-btn' onClick={this.props.rightBtnClick}>下一步</button>
      </div>
    );
  }
}

