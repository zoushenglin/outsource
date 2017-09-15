import React from 'react';
import { connect } from 'dva';
import '../assets/css/style.css';
import Banner from '../components/Banner'
function Problem() {
  return (
    <div className='full'>
      <Banner />
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Problem);
