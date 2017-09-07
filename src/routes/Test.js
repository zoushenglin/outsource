import React from 'react';
import { connect } from 'dva';
import { getCitys } from '../services/services'
import Test1 from './Test1'
export default class Test extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      isShowAddressPopUp:true
    }
  }
  componentDidMount(){
    // getCitys()
    // .then(function (data) {
    //   console.log('data',data)
    // })
    // .then(function (err) {
    //   console.log('err',err)
    // })
  }
  showOrHide(){
    this.setState({
      isShowAddressPopUp:!this.state.isShowAddressPopUp
    })
  }
  render(){
    const state = this.state;
    console.log('state =',state)
    return (
      <div style={{width:'100%',height:'100%'}}>
        <div>这是弹窗之外的内容</div>
        <ol>
          <li>li1</li>
          <li>li2</li>
          <li>li3</li>
          <li>li4</li>
          <li>li5</li>

        </ol>
      </div>
    )
  }
}
const styles = {
  btn:{
    border:'1px solid rgb(221,221,221)',
    width:'80px',
    height:'30px',
    borderRadius:'5px',
    background:'none',
    color:'rgb(136,136,136)'
  },
  bgColor:{
    backgroundColor:'green'
  }
}

