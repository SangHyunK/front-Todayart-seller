import React, { Component, Fragment } from 'react'
import Breadcrumb from '../common/breadcrumb';
import data from '../../assets/data/pro_list';
import Datatable from '../common/datatable'

export class ProductList extends Component {
    render() {
        return (
            <Fragment>
                <Breadcrumb title="상품 목록" parent="상품" />
                {/* <!-- Container-fluid starts--> */}
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5>상품 목록</h5>
                                </div>
                                <div className="card-body">
                                    <div className="clearfix" />
                                    <div id="basicScenario" className="product-physical">
                                        <Datatable
                                            multiSelectOption={false}
                                            myData={data}
                                            pageSize={9}
                                            pagination={false}
                                            class="-striped -highlight"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Container-fluid Ends--> */}
            </Fragment>
        )
    }
}

export default ProductList
