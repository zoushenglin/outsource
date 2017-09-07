import React from 'react';
import { connect } from 'dva';
import { getCitys } from '../services/services'

export default class Test1 extends React.Component{
  componentDidMount(){
    getCitys()
    .then(function (data) {
      console.log('data',data)
    })
    .then(function (err) {
      console.log('err',err)
    })
  }
  render(){
    console.log('true')
    const props = this.props;
    return (
      <div style={{width:'100%',height:'100%',position:'absolute',top:'0px',
        backgroundColor:'rgba(1,1,1,0.5)',display:'flex',justifyContent:'center',alignItems:'center'}}>
        <div style={{width:'70%',height:'auto',backgroundColor:'white',display:'flex',borderRadius:'5px',padding:'10px',
          flexDirection:'column',
          justifyContent:'space-between',
          position:'relative',
          alignItems:'center'}}>
          <div style={{borderBottom:'1px solid rgb(221,221,221)',paddingBottom:'10px',width:'100%',display:'flex',justifyContent:'center'}}>{props.title}</div>
          <div style={{margin:'20px',minHeight:'50px'}}>{props.desc}</div>
          <div style={{justifyContent:'space-between',display:'flex',width:'100%'}}>
            <button style={styles.btn} onClick={props.leftOnclick}>取消</button>
            <button style={{
              ...styles.btn,
              backgroundColor:'red',
              color:'white'
            }} onClick={props.rightOnclick}>确定</button>
          </div>
          <div onClick={props.leftOnclick} style={{right:'1px',position:'absolute',top:0,borderRadius:'100%',width:'20px',height:'20px',border:'1px solid black',textAlign:'center',lineHeight:'20px'}}>X</div>
        </div>
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
  }
}


