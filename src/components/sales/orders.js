import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import Breadcrumb from '../common/breadcrumb';
 import data from '../../assets/data/orders';
import {Actions} from '../../actions';
import Datatable from './datatable'
import Image from '../../components/common/image';
import { ActionTypes } from '../../constants/ActionTypes';
import { Files } from '../../utils';



export class Orders extends Component {

    constructor(props){
        super(props)
        this.state={
            sales:props.sales
        }
        
    }
    componentDidMount(){

    }

    shouldComponentUpdate(nextProps, nextState){
       return true;
    }



    render() {
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
                                    {this.state.sales!==null&&this.state.sales!==undefined?
                                    <Datatable
                                    multiSelectOption={false}
                                    myData={this.state.sales}
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

const mapStateToProps=(state)=>({
    sales:state.seller.sales
})

export default connect(mapStateToProps,null)(Orders)