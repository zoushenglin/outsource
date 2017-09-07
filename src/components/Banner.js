import React from 'react';
export default class Banner extends React.Component{
    render = ()=>
    <div style={{width:"100%"}}>
        <img src={require('./../assets/img/banner.png')} style={{width:"100%",height:"auto"}} />
    </div>
}
