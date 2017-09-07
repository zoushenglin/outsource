import React from 'react';
import '../assets/css/style.css'
class Flex extends React.Component{
  render = ()=>
    <div className='flex' style={{
      flexDirection:this.props.direction?this.props.direction:'row',
      ...this.props.style
    }}>
    {this.props.children}
  </div>
}

export default Flex;
