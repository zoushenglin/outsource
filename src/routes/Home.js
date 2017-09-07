import React from 'react';
import { Flex, Grid } from 'antd-mobile';
import Banner from '../components/Banner';
import GridComponent from '../components/GridComponent';
import Line from '../components/Line';
import styles from '../assets/css/style.css';
import { getTaxNewsList } from '../services/services';
import { memuData } from '../utils/static';

export default class Home extends React.Component{

    constructor(props){
        super(props);
    }

    state = {
        newData:[]
    }

    componentDidMount(){
        getTaxNewsList({
            page:1,
            rows:2
        },(result)=>{
            result
            .then(rs=>{
                console.log('rs = ',rs);
                if(rs.success){
                    if(rs.data && rs.data.length>0){

                        const arr = [];
                        rs.data.map(item=>arr.push({
                            text:<div style={{overflow:'hidden',top:'10px',whiteSpace:'nowrap',width:'80%',textOverflow:'ellipsis',fontSize:'15px'}}>{item.title}</div>,
                            icon:item.imgUrl?item.imgUrl:<img style={{width:'90%',height:'auto'}} src={require('../assets/img/no-news-pic.png')} />
                        }))

                        this.setState({
                            newData:arr
                        })
                    }
                }
            })
        })
    }

    render = ()=>
    <div>
        <Banner />
        <GridComponent data={memuData} hasLine={false} columnNum={4}/>

        <Line />

        <Flex justify="between">
             <img className={styles.newsPicLeft} src={require('../assets/img/news.svg')} />
             <button className={styles.moreBtn}  onClick={()=>this.context.router.push('/Users')}>更多</button>
        </Flex>

        <Flex justify='center' align='center'>
            {this.state.newData.map((item,index)=>
                <Flex key={index} direction='column'>
                    {item.icon}
                    {item.text}
                </Flex>
            )}

        </Flex>

    </div>
}
Home.contextTypes = {
  router:React.PropTypes.Object
}
