import React from 'react';

class OrderDetail extends React.Component{
    constructor(props){
        super(props)
        this.state={
            orderDetail:null,
            orderId:props.match.params.id
        }
    }
    
    static getDerivedStateFromProps(nextProps, prevState){
    if(prevState.orderId!==nextProps.match.params.id){
        return{orderId:nextProps.match.params.id}
    }
    }

    componentDidMount(){
        // if(this.state.match.params.id!==nextS)
    }

    callItemDetail(id){
        this.setState({orderDetail:this.props.info.find((item)=>item.orderDetailId===id)})
    }
    
    render(){
        console.log("orderProps", this.props);
        return(
            <div>
                {this.state.orderId}
            </div>
        )
    }
}


export default OrderDetail