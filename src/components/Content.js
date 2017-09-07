import React from 'react';
export default class Content extends React.Component{
  render = ()=>{
    return (
      <div className="contentFlex" >
        {this.props.children}
      </div>
    );
  }
}

