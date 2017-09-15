import React from 'react';
import '../assets/css/style.css'
class Flex extends React.Component{
  constructor(props){
    super(props);
  }

  static defaultProps = {
    direction:'row',
    justifyContent:'center',
    alignItems:'center',
    onClick:()=>{}
  }

  static propTypes = {
    direction:React.PropTypes.string,
    justifyContent:React.PropTypes.string,
    alignItems:React.PropTypes.string,
    onClick:React.PropTypes.func
  }

  render = ()=>
    <div className='flex' onClick={this.props.onClick} style={{
      flexDirection:this.props.direction,
      justifyContent:this.props.justifyContent,
      ...this.props.style
    }}>
    {this.props.children}
  </div>
}

export default Flex;
