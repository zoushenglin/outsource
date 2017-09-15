import React from 'react';
import { connect } from 'dva';
import '../assets/css/style.css';
import Flex from '../components/Flex';
import Banner from '../components/Banner';
class MainPage extends React.Component{
  componentWillMount(){
    //var car = document.getElementById('car');
    //document.body.removeChild(car);
  }
  render = ()=>
  (
    <div className='full main-bg'>
      <button className="main-btn" onClick={()=>this.context.router.push('/problem')}>
        <img src={require('../assets/img/tiyan.png')} />
      </button>
    </div>
  );
}
MainPage.contextTypes = {
  router:React.PropTypes.func.isRequired
}
export default connect()(MainPage);
