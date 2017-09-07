import React from 'react';
export default class Login extends React.Component{
    static contextTypes = {
        router:React.PropTypes.Object
    }
    render = ()=>
        <div onClick={()=>
                {
                    this.context.router.goBack();
                }
            }>
            Login page
        </div>
}
