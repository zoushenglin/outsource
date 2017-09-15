import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../assets/css/style.css';
import NotificationSystem from 'react-notification-system';
export default class Banner extends React.Component{
  constructor(props){
    super(props);
    this.index = 0;
    this.state = {
      dataList:[
        {
          className:'full chexi',
          style:{
            display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',paddingTop:'30px'
          },
          core:95,
          items:[
            {
              core:95,
              className:'strip-gray',
              text:'欧美'
            },{
              core:90,
              className:'strip-gray',
              text:'日韩'
            },{
              core:80,
              className:'strip-gray',
              text:'国产'
            }
          ],
          disabled:true
        },
        {
          className:'full lukuang',
          style:{
            display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',paddingTop:'30px'
          },
          core:90,
          items:[
            {
              core:95,
              className:'strip-gray',
              text:'较好'
            },{
              core:90,
              className:'strip-gray',
              text:'一般'
            },{
              core:80,
              className:'strip-gray',
              text:'较差'
            }
          ],
          disabled:true
        }
        ,
        {
          className:'full gonglishu',
          style:{
            display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',paddingTop:'30px'
          },
          core:90,
          items:[
            {
              core:95,
              className:'strip-gray',
              text:'20公里及以下'
            },{
              core:90,
              className:'strip-gray',
              text:'30公里左右'
            },{
              core:80,
              className:'strip-gray',
              text:'50公里以上'
            }
          ],
          disabled:true
        },
        {
          className:'full baoyang',
          style:{
            display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',paddingTop:'30px'
          },
          core:90,
          items:[
            {
              core:95,
              className:'strip-gray',
              text:'频繁'
            },{
              core:90,
              className:'strip-gray',
              text:'一般'
            },{
              core:80,
              className:'strip-gray',
              text:'较少'
            }
          ],
          disabled:true
        },
        {
          className:'full zhibao',
          style:{
            display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',paddingTop:'30px'
          },
          core:90,
          items:[
            {
              core:95,
              className:'strip-gray',
              text:'两年以上'
            },{
              className:'strip-gray',
              core:90,
              text:'一年以上'
            },{
              className:'strip-gray',
              core:80,
              text:'一年以下'
            }
          ],
          disabled:true
        }
      ]
    }
  }

 static contextTypes = {
   router:React.PropTypes.func.isRequired
 }

  componentDidMount = ()=>{
    this._notificationSystem = this.refs.notificationSystem;
  }

  _addNotification = (event)=>{
    event.preventDefault();
    this._notificationSystem.addNotification({
      message: '必须要选择一个',
      level: 'info'
    });
  }

  render = ()=>{
    const settings = {
      dots: false,
      infinite: false,
      speed: 300,
      swipe:false
    };
    return (
      <div className="full">
        <NotificationSystem ref="notificationSystem" />
        <Slider className="full flex c-slider" ref={c=>this.slider = c}
          dots={false}
          infinite={false}
          speed={300}
          swipe={false}
        >
          {
            this.state.dataList.map((item,index)=>{
              return (
                  <div className={item.className} key={index} style={item.style}>
                    <div style={{marginTop:'40px'}} className="flex flex-direction-column">
                      {
                        item.items.map((item_,index_)=>{
                          return (
                            <div key={index_} onClick={()=>{
                              let { dataList } = this.state;
                              for(let i in dataList[index].items){
                                if(i == index_){
                                  dataList[index].items[i].className = 'strip';
                                  dataList[index].core = dataList[index].items[index_].core;
                                }else{
                                  dataList[index].items[i].className = 'strip-gray';
                                }
                                dataList[index].disabled = false;
                              }
                              this.setState({
                                dataList:dataList
                              });
                            }} className={`${item_.className} flex margin-top-15`}>
                              {item_.text}
                            </div>
                          );
                        })
                      }
                      <div className="flex margin-top-15 ">
                        <button className="banner-bottom-btns" onClick={()=>{
                          if(this.index<=0){
                            this.context.router.goBack();
                          }else{
                            this.index = --this.index;
                            this.slider.slickGoTo(this.index);
                          }
                        }
                        }>
                          <img src={require('../assets/img/last.png')} />
                        </button>
                        {
                          item.disabled
                          ?
                            <button className="banner-bottom-btns" onClick={this._addNotification}>
                              <img src={require('../assets/img/next-gray.png')} />
                            </button>
                            :
                            <button className="banner-bottom-btns" onClick={()=>{
                              if(this.index>=this.state.dataList.length-1){
                                 this.context.router.push('/Result')
                                 location.href = './index_result.html';
                              }else{
                                this.index = ++this.index;
                                this.slider.slickGoTo(this.index);
                              }
                            }
                            }>
                              <img src={require('../assets/img/next.png')} />
                            </button>
                        }

                        </div>
                    </div>
                  </div>
                )
            })
          }
        </Slider>
      </div>
    );
  }
}

