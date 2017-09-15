import React from 'react';
import { connect } from 'dva';
import '../assets/css/style.css'
import Flex from '../components/Flex';
import { getFullWidthHeight } from '../utils/util'
import { VelocityTransitionGroup } from 'velocity-react';
import Modal from 'react-modal';

export default class Result extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      createModel:false,
      dataMatch:false,
      operationResult:false,
      result:false,
      core:parseInt(550+Math.random()*50),
      percentage:parseInt(Math.random()*10+80),
      fx:false,
      zx:false
    }
    this.times = 2000;
    this.closeTimes = 100;
  }

  componentDidMount = ()=>{
    this.createModal();
  }

  //模型建立
  createModal = ()=>{
    setTimeout(()=>{
      this.setState({
        createModel:true
      },this.dataMatch);
    },1000)
  }


  //数据匹配
  dataMatch = ()=>{
    setTimeout(()=>{
      this.setState({
        createModel:false,
        dataMatch:true
      },this.operationResult);
    },this.times)
  }

  //得出结果
  operationResult = ()=>{
    setTimeout(()=>{
      this.setState({
        dataMatch:false,
        operationResult:true
      },this.result)
    },this.times)
  }

  componentWillMount = ()=>{
    wx.onMenuShareTimeline({
      title: `爱车智能体检-我的爱车综合健康指数${this.state.core}分，击败了全国${this.state.percentage}%的用户`, // 分享标题
      link: 'http://www.xuebaoxian.cn', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl: 'http://www.xuebaoxian.cn/images/car.gif', // 分享图标
      success: function () {
        // 用户确认分享后执行的回调函数
        alert('分享成功')
      },
      cancel: function () {
        // 用户取消分享后执行的回调函数
        alert('分享失败')
      }
    });
  }

  //结果页
  result = ()=>{
    setTimeout(()=>{
      this.setState({
        dataMatch:false,
        operationResult:false,
        result:true
      })
    },this.times)
  }

  //关闭分享模态
  closeFX = ()=>{
    this.setState({
      fx:false
    })
  }
  //关闭咨询模态
  closeZX = ()=>{
    this.setState({
      zx:false
    })
  }


  render = ()=>{
    const style = {
      overlay : {
        position          : 'fixed',
        top               : 0,
        left              : 0,
        right             : 0,
        bottom            : 0,
        backgroundColor   : 'rgba(0, 0, 0, 0.75)'
      },
      content : {
        position                   : 'absolute',
        top                        : '0px',
        left                       : '0px',
        right                      : '0px',
        bottom                     : '0px',
        border                     : 'none',
        background                 : 'rgba(136,136,136,0.3)',
        overflow                   : 'auto',
        WebkitOverflowScrolling    : 'touch',
        borderRadius               : '4px',
        outline                    : 'none',
        padding                    : '0px'

      }
    }
    return (
      <div style={{width:getFullWidthHeight().width+'px',height:getFullWidthHeight().height+'px' }} className="result-bg">
        <VelocityTransitionGroup enter={{animation: "slideDown"}} leave={{animation: "slideUp"}}>
          {this.state.createModel ?
            <img style={{width:getFullWidthHeight().width+'px',height:getFullWidthHeight().height+'px'}}
                 src={require('../assets/img/createModal.png')} />
            : undefined}
        </VelocityTransitionGroup>

        <VelocityTransitionGroup enter={{animation: "slideDown"}} leave={{animation: "slideUp"}}>
          {this.state.dataMatch ?
            <img style={{width:getFullWidthHeight().width+'px',height:getFullWidthHeight().height+'px'}}
                 src={require('../assets/img/dataMatch.png')} />
            : undefined}
        </VelocityTransitionGroup>

        <VelocityTransitionGroup enter={{animation: "slideDown"}} leave={{animation: "slideUp"}}>
          {this.state.operationResult ?
            <img style={{width:getFullWidthHeight().width+'px',height:getFullWidthHeight().height+'px'}}
                 src={require('../assets/img/operationResult.png')} />
            : undefined}
        </VelocityTransitionGroup>


        <VelocityTransitionGroup enter={{animation: "slideDown"}} leave={{animation: "slideUp"}}>
          {this.state.result ?
            <div style={{width:getFullWidthHeight().width+'px',height:getFullWidthHeight().height+'px'}}>
              <Flex direction="column" style={{width:getFullWidthHeight().width+'px',height:'auto',position:'relative'}}>
                <img style={{width:getFullWidthHeight().width+'px',height:'auto'}} src={require('../assets/img/result1.png')} />
                <Flex style={{
                    position:'absolute',
                    top:getFullWidthHeight().width*380/616+'px',
                    marginLeft:'-5px',
                    width:getFullWidthHeight().width+'px'
                  }}>
                  <div style={{fontSize:'20px',fontWeight:'800'}}>{this.state.core}</div>
                </Flex>
                <Flex style={{
                    position:'absolute',
                    bottom:'30px',
                    width:getFullWidthHeight().width+'px'
                  }}>
                  <div className="font-style">您的指数击败了全国<span style={{color:'red'}}>{this.state.percentage}%</span>的用户</div>
                </Flex>
              </Flex>
              <div style={{position:'relative'}}>
                <img style={{width:getFullWidthHeight().width+'px',height:'auto'}} src={require('../assets/img/result2.png')} />
                <Flex style={{
                    position:'absolute',
                    bottom:'110px',
                     width:getFullWidthHeight().width+'px'
                  }}>
                  <button onClick={()=>{
                    location.href = 'index.html';
                  }
                  }>
                    <img style={{width:'98px',height:'32px'}} src={require('../assets/img/redo.png')} />
                  </button>
                  <button onClick={()=>this.setState({zx:true})}>
                    <img style={{width:'98px',height:'32px'}} src={require('../assets/img/zixun.png')} />
                  </button>
                </Flex>
                <Flex style={{
                    position:'absolute',
                    bottom:'70px',
                    width:getFullWidthHeight().width+'px'
                  }}>
                  <button onClick={()=>this.setState({fx:true})}>
                    <img style={{width:'98px',height:'32px'}} src={require('../assets/img/tuijian.png')} />
                  </button>
                </Flex>
              </div>
            </div>
            : undefined}
        </VelocityTransitionGroup>

        <Modal
          isOpen={this.state.fx}
          onRequestClose={this.closeFX}
          closeTimeoutMS={this.closeTimes}
          shouldCloseOnOverlayClick={true}
          contentLabel="No Overlay Click Modal"
          style={style}
        >
          <Flex onClick={this.closeFX} justifyContent='flex-start' direction="column" alignItems="flex-end" style={{width:getFullWidthHeight().width,height:getFullWidthHeight().height}}>
            <div className="full-width flex justify-content-flex-end">
              <img style={{width:'138px',height:'123px'}} src={require('../assets/img/fx_jt.png')} />
            </div>
            <div className="white-color" style={{fontSize:'18px'}}>
              分享到朋友圈，让TA们也来测试一下！
            </div>
          </Flex>
        </Modal>


        <Modal
          isOpen={this.state.zx}
          onRequestClose={this.closeZX}
          closeTimeoutMS={this.closeTimes}
          shouldCloseOnOverlayClick={true}
          contentLabel="No Overlay Click Modal"
          style={style}
        >
          <Flex onClick={this.closeZX} style={{width:getFullWidthHeight().width+'px',height:getFullWidthHeight().height+'px'}}>
            <img style={{width:'200px',height:'266px'}} src={require('../assets/img/wx.jpg')} />
          </Flex>
        </Modal>

      </div>
    );
  }
}

