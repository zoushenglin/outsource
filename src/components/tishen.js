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
              <div className="small-font theme-color margin-left10">安全出行</div>
            </Flex>
            <div className="small-font margin-left-1em">
              -为爱车购买足额的第三者责任险和车辆损失险
            </div>
          </Flex>

          <Flex direction="column" style={{alignItems:'flex-start',marginTop:'1em',width:'100%'}}>
            <Flex>
              <div className="small-font xuhao white-color">2</div>
              <div className="small-font theme-color margin-left10">防范意外</div>
            </Flex>
            <div className="small-font margin-left-1em">
              -家庭顶梁柱不能倒,为自己和配偶购买一份意外伤害保险
            </div>
          </Flex>

          <Flex direction="column" style={{alignItems:'flex-start',marginTop:'1em',width:'100%'}}>
            <Flex>
              <div className="small-font xuhao white-color">3</div>
              <div className="small-font theme-color margin-left10">重视健康</div>
            </Flex>
            <div className="small-font margin-left-1em">
              -宜早不宜迟,为自己和配偶购买一份重大疾病保险
            </div>
          </Flex>

          <Flex direction="column" style={{alignItems:'flex-start',marginTop:'1em',width:'100%'}}>
            <Flex>
              <div className="small-font xuhao white-color">4</div>
              <div className="small-font theme-color margin-left10">规划养老</div>
            </Flex>
            <div className="small-font margin-left-1em">
              -考虑未来的养老缺口,开始为自己和配偶准备一份商业养老保险计划
            </div>
          </Flex>

          <Flex direction="column" style={{alignItems:'flex-start',marginTop:'1em',width:'100%'}}>
            <Flex>
              <div className="small-font xuhao white-color">5</div>
              <div className="small-font theme-color margin-left10">关注教育</div>
            </Flex>
            <div className="small-font margin-left-1em">
              -提前规划,为子女储蓄一份教育基金
            </div>
          </Flex>

          <Flex direction="column" style={{alignItems:'flex-start',marginTop:'1em',width:'100%'}}>
            <Flex>
              <div className="small-font xuhao white-color">6</div>
              <div className="small-font theme-color margin-left10">重视健康</div>
            </Flex>
            <div className="small-font margin-left-1em">
              -防范未然,为吉屋购买一份家庭财产保险
            </div>
          </Flex>

        </Flex>

      </Flex>

      <Flex style={{marginTop:30,marginBottom:30}}>
        <div className="theme-color small-font">购买一份汽车延长保修保险,爱车健康指数涨停!</div>
      </Flex>

  </Flex>
}
