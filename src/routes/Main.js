import React from 'react';
import { connect } from 'dva';
import '../assets/css/style.css';

import MyStep from '../components/Step';
import Content from '../components/Content';
import Btns from '../components/Btns';
import { VelocityTransitionGroup } from 'velocity-react'
import Flex from '../components/Flex';
class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTab:'home',
      hidden: false,
      leftBtn:true,
      car:'98',//车系
      driveHabit:'95',//驾车习惯
      dailyMaintain:'95',//日常保养
      vehicleCondition:'95',//平时用车路况
      num:'95',//日均用车频率
      distance:'95',//日均用车频率和日均行驶公里数
      data:[
        {
          show:true,
        },
        {
          show:false,
          radio:{
            value:'95',
            list:[
              {
                checked:true,
                label:'较好',
                value:'95'
              },
              {
                checked:false,
                label:'一般',
                value:'90'
              },
              {
                checked:false,
                label:'较差',
                value:'80'
              }
            ]
          }
        },
        {
          show:false,
          radio:{
            value:'95',
            list:[
              {
                checked:true,
                label:'频繁',
                value:'95'
              },
              {
                checked:false,
                label:'一般',
                value:'90'
              },
              {
                checked:false,
                label:'较少',
                value:'80'
              }
            ]
          }
        },
        {
          show:false,
          radio:{
            value:'95',
            list:[
              {
                checked:true,
                label:'较好',
                value:'95'
              },
              {
                checked:false,
                label:'一般',
                value:'90'
              },
              {
                checked:false,
                label:'较差',
                value:'80'
              }
            ]
          }
        },
        {
          show:false,
          radio:{
            value:'95',
            list:[
              {
                checked:true,
                label:'3次左右及以下',
                value:'95'
              },
              {
                checked:false,
                label:'5次左右',
                value:'90'
              },
              {
                checked:false,
                label:'7次以上',
                value:'80'
              }
            ]
          }
        },
        {
          show:false,
          radio:{
            value:'95',
            list:[
              {
                checked:true,
                label:'20公里及以下',
                value:'95'
              },
              {
                checked:false,
                label:'30公里左右',
                value:'90'
              },
              {
                checked:false,
                label:'50公里以上',
                value:'80'
              }
            ]
          }
        },
      ],
      index:0,
      step:[
        <Flex><span className='circle'></span><span className='line'></span></Flex>,
        <Flex><span className='circle'></span><span className='line'></span></Flex>,
        <Flex><span className='circle'></span><span className='line'></span></Flex>,
        <Flex><span className='circle'></span><span className='line'></span></Flex>,
        <Flex><span className='circle'></span><span className='line'></span></Flex>,
        <Flex><span className='circle'></span></Flex>
      ]
    };
  }

  componentDidMount = ()=>{
    this.setState({
      hidden:true
    })
  }

  leftBtnClick = ()=>{
    let { index,data } = this.state;
    if(index<=0){
      this.context.router.goBack();
      return ;
    }
    if(index < data.length){
      this.setState({
        index:--index
      },this.hideOrShow);
    }
  }

  changeStatus = ()=>{
    let { index,step } = this.state;
    console.log('index =',index);
    switch(index){
      case 0:
        step[0] = <Flex><span className='circle_active'></span><span className='line_active'></span></Flex>;
        step[1] = <Flex><span className='circle'></span><span className='line'></span></Flex>;
        step[2] = <Flex><span className='circle'></span><span className='line'></span></Flex>;
        step[3] = <Flex><span className='circle'></span><span className='line'></span></Flex>;
        step[4] = <Flex><span className='circle'></span><span className='line'></span></Flex>;
        step[5] = <Flex><span className='circle'></span></Flex>;
          break;
      case 1:
        step[0] = <Flex><span className='circle_active'></span><span className='line_active'></span></Flex>;
        step[1] = <Flex><span className='circle_active'></span><span className='line_active'></span></Flex>;
        step[2] = <Flex><span className='circle'></span><span className='line'></span></Flex>;
        step[3] = <Flex><span className='circle'></span><span className='line'></span></Flex>;
        step[4] = <Flex><span className='circle'></span><span className='line'></span></Flex>;
        step[5] = <Flex><span className='circle'></span></Flex>;
          break;
      case 2:
        step[0] = <Flex><span className='circle_active'></span><span className='line_active'></span></Flex>;
        step[1] = <Flex><span className='circle_active'></span><span className='line_active'></span></Flex>;
        step[2] = <Flex><span className='circle_active'></span><span className='line_active'></span></Flex>;
        step[3] = <Flex><span className='circle'></span><span className='line'></span></Flex>;
        step[4] = <Flex><span className='circle'></span><span className='line'></span></Flex>;
        step[5] = <Flex><span className='circle'></span></Flex>;
        break;
      case 3:
        step[0] = <Flex><span className='circle_active'></span><span className='line_active'></span></Flex>;
        step[1] = <Flex><span className='circle_active'></span><span className='line_active'></span></Flex>;
        step[2] = <Flex><span className='circle_active'></span><span className='line_active'></span></Flex>;
        step[3] = <Flex><span className='circle_active'></span><span className='line_active'></span></Flex>;
        step[4] = <Flex><span className='circle'></span><span className='line'></span></Flex>;
        step[5] = <Flex><span className='circle'></span></Flex>;
        break;
      case 4:
        step[0] = <Flex><span className='circle_active'></span><span className='line_active'></span></Flex>;
        step[1] = <Flex><span className='circle_active'></span><span className='line_active'></span></Flex>;
        step[2] = <Flex><span className='circle_active'></span><span className='line_active'></span></Flex>;
        step[3] = <Flex><span className='circle_active'></span><span className='line_active'></span></Flex>;
        step[4] = <Flex><span className='circle_active'></span><span className='line_active'></span></Flex>;
        step[5] = <Flex><span className='circle'></span></Flex>;
        break;
      case 5:
        step[0] = <Flex><span className='circle_active'></span><span className='line_active'></span></Flex>;
        step[1] = <Flex><span className='circle_active'></span><span className='line_active'></span></Flex>;
        step[2] = <Flex><span className='circle_active'></span><span className='line_active'></span></Flex>;
        step[3] = <Flex><span className='circle_active'></span><span className='line_active'></span></Flex>;
        step[4] = <Flex><span className='circle_active'></span><span className='line_active'></span></Flex>;
        step[5] = <Flex><span className='circle_active'></span></Flex>;
        break;
    }
    this.setState({
      step:step
    })
  }

  rightBtnClick = ()=>{
    let { index,data } = this.state;
    if(index == data.length-2){
      let { car,data } = this.state
      console.log(data.length);
      let core = parseInt(car)
        +parseInt(data[1].radio.value)
        +parseInt(data[2].radio.value)
        +parseInt(data[3].radio.value)
        +parseInt(data[4].radio.value)
        +parseInt(data[5].radio.value)
      location.href = `index_end.html?core=${core}`;
      return ;
    }
    if(index < data.length){
      this.setState({
        index:++index
      },this.hideOrShow);
    }
  }

  componentWillMount(){
    this.changeStatus();
  }

  hideOrShow = ()=>{
    let { data,index } = this.state;
    data.map((item,i)=>{
      if(i!=index){
        data[i].show = false;
      }else{
        data[i].show = true;
      }
    });
    this.setState({
      data:data
    });
    this.changeStatus()
  }

  setData = (index,index_)=>{
    let { data } = this.state;
    let list = data[index].radio.list;
    for(let i = 0;i<list.length;i++){
      if(i == index_){
        list[i].checked = true;
        data[index].radio.value = list[i].value
      }else{
        list[i].checked = false;
      }
    }
    data[index].radio.list = list;
    this.setState({
      data
    })
  }

  render() {
    return (
      <div className='bg'>
        <MyStep>
          {
            this.state.step.map(item=>item)
          }
        </MyStep>
        <VelocityTransitionGroup enter={{animation: "slideDown"}} leave={{animation: "slideUp"}}>
          {this.state.data[0].show?<Content style={{display:'flex !important'}}>
            <Flex style={{flexDirection:'column'}}>
              <div>
                <span>车系:</span>
                <select defaultValue={this.state.car} onChange={(value)=>this.setState({
                                                                          car:value.target.value
                                                                        })}>
                  <option value="98">
                    欧美
                  </option>
                  <option value="95">
                    日韩
                  </option>
                  <option value="90">
                    国产
                  </option>
                </select>
              </div>

              <div style={{marginTop:10}}>
                <span>品牌:</span>
                <select>
                  <option value="98">
                    奥迪
                  </option>
                  <option value="95">
                    大众
                  </option>
                  <option value="90">
                    宝马
                  </option>
                  <option value="90">
                    奔驰
                  </option>
                  <option value="90">
                    其它
                  </option>
                </select>
              </div>
            </Flex>
            </Content>:null}
        </VelocityTransitionGroup>
        <VelocityTransitionGroup enter={{animation: "slideDown"}} leave={{animation: "slideUp"}}>
          {this.state.data[1].show?
            <Content>
              <Flex direction="column">
                <span>驾驶习惯:</span>
                <Flex>
                  {
                    this.state.data[1].radio.list.map((item,index)=>
                      <div className="margin10" onClick={()=>this.setData(1,index)} >
                        <label>{item.label}</label>
                        <input name="radio1" checked={item.checked} onChange={(v)=>this.setState({driveHabit:v.target.value})} value="95" type="radio" />
                      </div>
                    )
                  }
                </Flex>
              </Flex>
            </Content>:null}
        </VelocityTransitionGroup>


        {/*日常保养轻盔昂*/}
        <VelocityTransitionGroup enter={{animation: "slideDown"}} leave={{animation: "slideUp"}}>
          {this.state.data[2].show?
            <Content>
              <Flex direction="column">
                <span>日常保养情况:</span>
                <Flex>
                  {
                    this.state.data[2].radio.list.map((item,index)=>
                      <div className="margin10"  onClick={()=>this.setData(2,index)} >
                        <label>{item.label}</label>
                        <input name='radio2' checked={item.checked} onChange={(v)=>this.setState({driveHabit:v.target.value})} value="95" type="radio" />
                      </div>
                    )
                  }
                </Flex>
              </Flex>
            </Content>:null}
        </VelocityTransitionGroup>


        {/*平时用车路况*/}
        <VelocityTransitionGroup enter={{animation: "slideDown"}} leave={{animation: "slideUp"}}>
          {this.state.data[3].show?
            <Content>
              <Flex direction="column">
                <span>平时用车路况:</span>
                <Flex>
                  {
                    this.state.data[3].radio.list.map((item,index)=>
                      <div className="margin10" onClick={()=>this.setData(3,index)}>
                        <label>{item.label}</label>
                        <input name='radio3' checked={item.checked} onChange={(v)=>this.setState({driveHabit:v.target.value})} value="95" type="radio" />
                      </div>
                    )
                  }
                </Flex>
              </Flex>
            </Content>:null}
        </VelocityTransitionGroup>


        {/*日均用车频率和日均行驶公里数*/}
        <VelocityTransitionGroup enter={{animation: "slideDown"}} leave={{animation: "slideUp"}}>
          {this.state.data[4].show?
            <Content>
              <Flex direction="column" style={{width:'100%'}}>
              <Flex direction="column" style={{width:'100%'}}>
                <span>日均用车频率和日均行驶公里数:</span>
                <Flex direction="column" style={{width:'100%',justifyContent:'flex-end',alignItems:'center'}}>
                  {
                    this.state.data[4].radio.list.map((item,index)=>
                      <div className="margin10" onClick={()=>this.setData(4,index)}>
                        <label>{item.label}</label>
                        <input name='radio4' checked={item.checked} onChange={(v)=>this.setState({driveHabit:v.target.value})} value="95" type="radio" />
                      </div>
                    )
                  }
                </Flex>
              </Flex>

              <Flex direction="column" style={{marginTop:10}}>
                <span>日均行驶公里数:</span>
                <Flex direction="column" style={{width:'100%',justifyContent:'flex-end',alignItems:'center'}}>
                  {
                    this.state.data[5].radio.list.map((item,index)=>
                      <div className="margin10" onClick={()=>this.setData(5,index)}>
                        <label>{item.label}</label>
                        <input name='radio5' checked={item.checked} onChange={(v)=>this.setState({driveHabit:v.target.value})} value="95" type="radio" />
                      </div>
                    )
                  }
                </Flex>
              </Flex>
            </Flex>

            </Content>:null}
        </VelocityTransitionGroup>


        <Btns leftBtn={this.state.leftBtn}
          leftBtnClick={()=>this.leftBtnClick()}
          rightBtnClick={()=>this.rightBtnClick()} />

      </div>
    );
  }
}

Main.contextTypes = {
  router:React.PropTypes.Object
}

export default connect()(Main);
