import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export class Datatable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            orderDetail:null,
            open:false,
            myData: this.props.myData
        }
    }

    handleRemoveRow = () => {
        const selectedValues = this.state.checkedValues;
        const updatedData = this.state.myData.filter(function (el) {
            return selectedValues.indexOf(el.id) < 0;
        });
        this.setState({
            myData: updatedData
        })
        toast.success("해당 내역이 삭제되었습니다!")
    };

    renderEditable = (cellInfo) => {
        return (
            <div
                style={{ backgroundColor: "#fafafa" }}
                contentEditable
                suppressContentEditableWarning
                onBlur={e => {
                    const data = [...this.state.myData];
                    data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
                    this.setState({ myData: data });
                }}
                dangerouslySetInnerHTML={{
                    __html: this.state.myData[cellInfo.index][cellInfo.column.id]
                }}
            />
        );
    }

    Capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }


    shouldComponentUpdate(nextProp, nextState){
        return true;
    }

    render() {
        const { pageSize, myClass, multiSelectOption, pagination } = this.props;
        const { myData } = this.state

        const columns = [];
        for (var key in myData[0]) {

            let editable = this.renderEditable
            if (key === "image") {
                editable = null;
            }
            if (key === "status") {
                editable = null;
            }
            if (key === "avtar") {
                editable = null;
            }
            if (key === "vendor") {
                editable = null;
            }
            if (key === "orderedId"){
                editable = null;
            }
            if(key=== "productName"){
                editable = null;
            }
            if(key=== "orderDate"){
                editable = null;
            }
            if(key==="totalPrice"){
                editable = null;
            }
            if(key==="detailId"){
                editable = null;
            }





            columns.push(
                {
                    Header: <b>{this.Capitalize(key.toString())}</b>,
                    accessor: key,
                    Cell: editable,
                    style: {
                        textAlign: 'center'
                    }
                });
        }

            columns.push(
                {
                    Header: <b>상세보기</b>,
                    id: 'detail',
                    sortable: false,
                    accessor: str => "detail",
                    Cell: (row) => (
                            // <Link to={{
                            // pathname:`${process.env.PUBLIC_URL}/sales/${row.original.detailId}`,
                            // state:{
                            // id:row.original.detailId}}}>
                            <button className="btn btn-primary" type="button" style={{"padding":"3px 10px 3px 10px"}}>
                            보기
                            </button>
                            // </Link>
                ),
                style: {
                    textAlign: 'center'
                },
                sortable: false
            }
        )
        
            const {open} = this.state;
        return (
            <Fragment>
                <ReactTable
                    data={myData}
                    columns={columns}
                    defaultPageSize={pageSize}
                    className={myClass}
                    showPagination={pagination}
                />
            </Fragment>
        )
    }
}



const mapStateToProps = (state) => ({  
    symbol: state.product.symbol,
    info : state.seller.info
})

const mapDispatchToProps = (dispatch) => ({    
})

export default connect(mapStateToProps, mapDispatchToProps)(Datatable)

