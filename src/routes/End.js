import React from 'react';
import { VelocityTransitionGroup } from 'velocity-react'
import Flex from '../components/Flex';
import Content from '../components/Content';
import '../assets/css/style.css';
import Tishen from '../components/tishen';
export default class End extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        createModal:false,
        dataMatch:false,
        result:false,
        lvlv:'92%',
        core:'',//上个页面地址栏传过来的分数值
        status:[{
            bg:'white',
            color:'black'
          },
          {
            bg:'white',
            color:'black'
          },
          {
            bg:'white',
            color:'black'
          },
          {
            bg:'white',
            color:'black'
          },
          {
            bg:'white',
            color:'black'
          }
        ]
      }
      this.times = 2000;
    }

    QueryString = (val)=>{
      let uri = window.location.search;
      let re = new RegExp("" + val + "\=([^\&\?]*)", "ig");
      return((uri.match(re)) ? (uri.match(re)[0].substr(val.length + 1)) : null);
    }
    QueryStrings = ()=>{
      let uri = window.location.search;
      let re = /\w*\=([^\&\?]*)/ig;
      let retval = [];
      while((arr = re.exec(uri)) != null)
        retval.push(arr[0]);
      return retval;
    }
    setQuery = (val1, val2)=>{
      let a = this.QueryStrings();
      let retval = "";
      let seted = false;
      let re = new RegExp("^" + val1 + "\=([^\&\?]*)$", "ig");
      for(let i = 0; i < a.length; i++) {
        if(re.test(a[i])) {
          seted = true;
          a[i] = val1 + "=" + val2;
        }
      }
      retval = a.join("&");
      return "?" + retval + (seted ? "" : (retval ? "&" : "") + val1 + "=" + val2);
    }

    componentWillMount(){
      let core = this.QueryString('core');
      console.log('core =',core)
      this.setState({
        core:parseInt(core)
      },()=>{
        if(this.state.core){
          let { status,core,lvlv } = this.state;
          if(core>=480 && core<496){
            status[0].bg = '#69CEE4';
            status[0].color = 'white';
          }else if(core>=496 && core<512){
            status[1].bg = '#69CEE4';
            status[1].color = 'white';
          }else if(core>=512 && core<528){
            status[2].bg = '#69CEE4';
            status[2].color = 'white';
          }else if(core>=528 && core<544){
            status[3].bg = '#69CEE4';
            status[3].color = 'white';
          }else{
            status[4].bg = '#69CEE4';
            status[4].color = 'white';
          }
          console.log(status);
          this.setState({
            status:status,
            lvlv:lvlv
          })
        }
      });
      setTimeout(()=>{
        this.setState({
          dataMatch:true
        });
        this.createModal();
      },0)
    }
    //显示数据匹配
  createModal(){
      setTimeout(()=>{
        this.setState({
          dataMatch:false,
          createModal:true
        });
        this.showResult();
      },this.times)
    }

    showResult = ()=>{
      setTimeout(()=>{
        this.setState({
          createModal:false,
          result:true
        })
      },this.times);
    }

    static contextTypes = {
        router:React.PropTypes.Object
    }
    render = ()=>
    <div className="bg">

      <VelocityTransitionGroup enter={{animation: "slideDown"}} leave={{animation: "slideUp"}}>
        {
          this.state.dataMatch?
            <div className="VelocityTransitionGroup-flex">
              <div style={{width:'60%',height:'auto'}}>
                <img style={{width:'100%',height:'auto'}} src={require('../assets/img/dataMatch.png')} />
              </div>
            </div>:null
        }
      </VelocityTransitionGroup>
      <VelocityTransitionGroup enter={{animation: "slideDown"}} leave={{animation: "slideUp"}}>
        {
          this.state.createModal?
            <div className="VelocityTransitionGroup-flex">
              <div style={{width:'60%',height:'auto'}}>
                <img style={{width:'100%',height:'auto'}} src={require('../assets/img/createModal.png')} />
              </div>
            </div>:null
        }
      </VelocityTransitionGroup>

      <VelocityTransitionGroup enter={{animation: "slideDown"}} leave={{animation: "slideUp"}}>
        {
          this.state.result?
            <div className="full-height">
              <div style={{marginLeft:'5%',color:'white',display:'flex',justifyContent:'flex-start',alignItems:'center',position:'relative',top:30}}>
                您的爱车健康指数结果
              </div>
              <Flex style={{height:'450px'}} direction="column">

                <div style={{width:'90%',height:'80%',background:'white',borderRadius:'5px'}}>
                  <div className="resultImg flex">
                    570分
                  </div>

                  <Flex direction="column" style={{width:'100%'}}>
                    <Flex className="full-width" style={{width:'100%',marginBottom:5}}>
                      <div style={{width:'16.6%'}} className="flex">
                        <span style={{padding:2,borderRadius:2,backgroundColor:this.state.status[0].bg,color:this.state.status[0].color}}>较差</span>
                      </div>
                      <div style={{width:'16.6%'}} className="flex">
                        <span style={{padding:2,borderRadius:2,backgroundColor:this.state.status[1].bg,color:this.state.status[1].color}}>中等</span>
                      </div>
                      <div style={{width:'16.6%'}} className="flex">
                        <span style={{padding:2,borderRadius:2,backgroundColor:this.state.status[2].bg,color:this.state.status[2].color}}>良好</span>
                      </div>
                      <div style={{width:'16.6%'}} className="flex">
                        <span style={{padding:2,borderRadius:2,backgroundColor:this.state.status[3].bg,color:this.state.status[3].color}}>优秀</span>
                      </div>
                      <div style={{width:'16.6%'}} className="flex">
                        <span style={{padding:2,borderRadius:2,backgroundColor:this.state.status[4].bg,color:this.state.status[4].color}}>极好</span>
                      </div>
                    </Flex>
                    <img style={{width:'90%',height:'auto'}} src={require('../assets/img/step_color.png')} />
                    <Flex style={{width:'100%'}}>
                      <div style={{width:'16.6%',textAlign:'center'}}>0</div>
                      <div style={{width:'16.6%',textAlign:'center'}}>120</div>
                      <div style={{width:'16.6%',textAlign:'center'}}>240</div>
                      <div style={{width:'16.6%',textAlign:'center'}}>360</div>
                      <div style={{width:'16.6%',textAlign:'center'}}>480</div>
                      <div style={{width:'16.6%',textAlign:'center'}}>600</div>
                    </Flex>
                  </Flex>

                  <div className="flex" style={{marginTop:'2em'}}>
                    您的指数击败了全国<span style={{color:'#2C5DA4'}}>{this.state.lvlv}</span>的用户
                  </div>

                </div>

              </Flex>

              <Flex style={{marginTop:'-8%',marginBottom:'8%'}}>
                <div style={{color:'white'}}>该如何提升爱车健康指数?</div>
              </Flex>

              <Content>
                <div style={{height:'100%'}} className="full-width">
                  <Tishen/>
                </div>
              </Content>

              <Flex style={{marginTop:30}} className="full-width">
                <button style={{background:'#1373CE',border:'none',width:'100%',height:40,color:'white'}}>点击右上角分享到朋友圈</button>
              </Flex>

              </div>:null
        }
      </VelocityTransitionGroup>

    </div>
}
