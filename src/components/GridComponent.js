import { Grid } from 'antd-mobile';

export default class GridComponent extends React.Component{
    constructor(props){
        super(props);
    }
    render = ()=>
        <div>

            <Grid data={this.props.data} columnNum={this.props.columnNum} hasLine={this.props.hasLine} />

        </div>
}