import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import Breadcrumb from '../common/breadcrumb';
 import data from '../../assets/data/orders';
import {Actions} from '../../actions';
import Datatable from '../common/datatable'
import Image from '../../components/common/image';
import { ActionTypes } from '../../constants/ActionTypes';
import { Files } from '../../utils';



export class Orders extends Component {

    constructor(props){
        super(props)
        this.state={
            realData:null,
            getOrders:props.getOrders
        }
        
    }

    decoStatus(status){
                switch(status){
                    case '결제대기':
                    case '반품대기':
                        return <span className="badge badge-success">{status}</span>
                    case '배송준비':
                    case '주문취소':
                        return <span className="badge badge-primary">{status}</span>
                    case '결제완료':
                    case '주문확정':
                    case '환불처리중':
                        return <span className="badge badge-secondary">{status}</span>
                    case '배송중':
                    case '반품중':
                        return <span className="badge badge-warning">{status}</span>
                    case '결제취소':
                    case '배송완료':
                    case '반품완료':
                    case '환불완료':
                    return <span className="badge badge-danger">{status}</span>
                    default:
                        return  <span className="badge badge-danger">"야호"</span>
                }
            }

    componentDidMount(){
            if(this.state.realData===null){
                this.state.getOrders()
                .then(response=>{
                    console.log("response", response)
                    if(response.type===ActionTypes.GET_ORDERS_SUCCESS){
                        const data = response.payload.data
                        const edittedData = data.map((item, index)=>{
                            console.log(item.orderStatus)
                            return {
                                ...item,
                                date:item.date.substring(0,10),
                                image:<Image id={index} data={[Files.filePath(item.image)]}/>,
                                orderStatus:this.decoStatus(item.orderStatus)
                            }
                        }
                        )
                        this.setState({...this.state, realData:edittedData});
                        console.log("DIDMOUNT123321",edittedData)
        
                    }
                }).catch(error=>console.log("ERROR >>> ", error))
            }


    }

    shouldComponentUpdate(nextProps, nextState){
       return true;
    }



    render() {
        console.log("realData", this.state.realData)
        console.log("Data", data)
        return (
            <Fragment>
                <Breadcrumb title="판매내역" parent="Sales" />

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5>주문관리</h5>
                                </div>
                                <div className="card-body order-datatable">
                                    {this.state.realData!==null&&this.state.realData!==undefined?
                                    <Datatable
                                    multiSelectOption={false}
                                    myData={this.state.realData}
                                    pageSize={10}
                                    pagination={true}
                                    class="-striped -highlight"/>:
                                    "로딩중"}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default connect(null,(dispatch)=>({getOrders:()=>dispatch(Actions.getOrders())}))(Orders)