import React from 'react';
import { connect } from 'dva';
import './MainPage.css';
import '../assets/css/style.css';
import Flex from '../components/Flex';
class MainPage extends React.Component{
  render = ()=>
  (
    <div className='full-width full-height gray-bg'>
      <div className="flex justify-content-flex-start">
        <div className="width-70 flex flex-direction-column height-50 bg-red">
          <div className="white-color">爱车智能体检</div>
          <div className="font-size-12 white-color margin-top-5">大数据智能分析</div>
        </div>
        <div>
          <img style={{width:50,height:50,margin:5,marginTop:10,marginLeft:20}} src={require('../assets/img/cat.png')} />
        </div>
      </div>

      <Flex style={{width:'60%',marginLeft:'20%',marginTop:'10%'}}>
        <div style={{color:'rgb(136,136,136)'}}>
          花三分钟，参与5组问题,
        </div>
      </Flex>
      <Flex style={{width:'60%',marginLeft:'30%',marginTop:'5%'}}>
        <div style={{color:'rgb(136,136,136)'}}>
          爱车健康状况一目了然!
        </div>
      </Flex>


      <Flex style={{marginTop:'5%',height:55}}>
        <div style={{marginLeft:10}}>
          <img src={require('../assets/img/data.png')} style={{width:70,height:55}} />
        </div>
        <Flex style={{justifyContent:'space-between',alignItems:'flex-start',flexDirection:'column',height:55,marginLeft:10,width:'100%'}}>
          <div className="huise">
            海量数据
          </div>
          <div className="font-size-12 huise" style={{width:'150px',lineHeight:'15px'}}>
            亿万汽车故障类型数据支持业界丰富汽车故障风险模型
          </div>
        </Flex>
      </Flex>

      <Flex style={{marginTop:'5%',height:55,width:'100%'}}>
        <div style={{marginLeft:10}}>
          <img src={require('../assets/img/person.png')} style={{width:70,height:55}} />
        </div>
        <Flex style={{justifyContent:'space-between',alignItems:'flex-start',flexDirection:'column',height:55,marginLeft:10,width:'100%'}}>
          <div className="huise">
            人工智能
          </div>
          <div className="font-size-12 huise" style={{width:'150px',lineHeight:'15px'}}>
            机器学习算法极速且客观的智能体验
          </div>
        </Flex>
      </Flex>

      <Flex style={{marginTop:'5%',height:55}}>
        <div style={{marginLeft:10}}>
          <img src={require('../assets/img/homeOfCat.png')} style={{width:70,height:55}} />
        </div>
        <Flex style={{justifyContent:'space-between',alignItems:'flex-start',flexDirection:'column',height:55,marginLeft:10,width:'100%'}}>
          <div className="huise">
            汽车专家
          </div>
          <div className="font-size-12 huise" style={{width:'150px'}}>
            汽车维修、保养专家意见私人定制用车建议
          </div>
        </Flex>
      </Flex>

      <Flex style={{position:'fixed',display:'flex !important',left:0,bottom:0,width:'100%'}}>
        <button onClick={()=>this.context.router.push('/Main')} style={{width:'100%',height:40,background:'#15A8F7',color:'white',border:'none'}}>立即体检</button>
      </Flex>

    </div>
  );
}

MainPage.contextTypes = {
  router:React.PropTypes.Object
}


export default connect()(MainPage);
