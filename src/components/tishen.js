import React from 'react';
import Flex from './Flex';
import '../assets/css/style.css'
export default class Tishen extends React.Component{
    render = ()=>
    <Flex direction="column" style={{height:'100%'}}>
      <Flex style={{justifyContent:'flex-start',height:'100%',width:'100%'}}>
        <Flex style={{height:'100%',justifyContent:'flex-start',marginTop:10}}>
          <Flex style={{marginRight:5,marginLeft:5}}>
            <div style={{width:5}} className="small-font">优先级</div>
          </Flex>
          <Flex style={{height:'100%'}} direction="column">
            <div className="theme-color">高</div>
            <div style={{height:'92%',width:3,backgroundColor:'#00A6FF'}}></div>
            <div className="theme-color">低</div>
          </Flex>
        </Flex>

        <Flex direction="column" style={{justifyContent:'flex-start',height:'100%',margin:10,marginTop:20}}>
          <Flex direction="column" style={{alignItems:'flex-start',marginTop:10,width:'100%'}}>
            <Flex>
              <div className="small-font xuhao white-color">1</div>
              <div className="small-font theme-color margin-left10">更良好的驾驶习惯</div>
            </Flex>
            <div className="small-font margin-left-1em padding-top-5 huise">
              -严格遵守交通规则、形成更好的驾驶习惯
            </div>
          </Flex>

          <Flex direction="column" style={{alignItems:'flex-start',marginTop:'1em',width:'100%'}}>
            <Flex>
              <div className="small-font xuhao white-color">2</div>
              <div className="small-font theme-color margin-left10">日常保养</div>
            </Flex>
            <div className="small-font margin-left-1em padding-top-5 huise">
              -按照4S店建议定期做保养，小问题及时维修处理
            </div>
          </Flex>

          <Flex direction="column" style={{alignItems:'flex-start',marginTop:'1em',width:'100%'}}>
            <Flex>
              <div className="small-font xuhao white-color">3</div>
              <div className="small-font theme-color margin-left10">用车路况</div>
            </Flex>
            <div className="small-font margin-left-1em padding-top-5 huise">
              -选择更好的用车路况，避免高速在坑洼路面行驶
            </div>
          </Flex>

          <Flex direction="column" style={{alignItems:'flex-start',marginTop:'1em',width:'100%'}}>
            <Flex>
              <div className="small-font xuhao white-color">4</div>
              <div className="small-font theme-color margin-left10">用车量</div>
            </Flex>
            <div className="small-font margin-left-1em padding-top-5 huise">
              -选择更多绿色交通模式，比如地铁，公交，自行车。
            </div>
          </Flex>

        </Flex>

      </Flex>

      <Flex style={{marginTop:30,marginBottom:30,marginLeft:'10px',marginRight:'10px'}}>
        <div className="theme-color small-font">购买一份汽车延长保修保险，爱车健康指数涨停！</div>
      </Flex>

  </Flex>
}
