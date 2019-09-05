import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux'
import Breadcrumb from '../common/breadcrumb';
import data from '../../assets/data/sales-transactions';
import Datatable from '../common/datatable';


export class Shipping extends Component {
    constructor(props){
        super(props)
        this.state={
            shipping:props.shipping
        }
        
    }
    render() {
        return (
            <Fragment>
                <Breadcrumb title="배송관리" parent="Sales" />

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5>배송현황</h5>
                                </div>
                                <div className="card-body">
                                    <div id="batchDelete" className="transactions">
                                    {this.state.shipping!==null&&this.state.shipping!==undefined?
                                        <Datatable
                                            multiSelectOption={false}
                                            myData={this.state.shipping}
                                            pageSize={10}
                                            pagination={true}
                                            class="-striped -highlight"
                                        />:
                                        "로딩중입니다..."}
                                    </div>
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
    shipping:state.seller.shipping
})

export default connect(mapStateToProps,null)(Shipping)