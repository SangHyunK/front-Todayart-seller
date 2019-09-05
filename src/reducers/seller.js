import React from 'react'

import { ActionTypes } from "../constants/ActionTypes";


const initialState = {
};

const seller = (state = initialState, action) => {
    const {payload} = action
    function decoStatus(status){
        switch(status){
            case '결제대기':
            case '반품대기':
                return <span className="badge badge-success" style={{"padding":"0.6rem 0.5rem", "fontSize":"12px"}}>{status}</span>
            case '배송준비':
            case '주문취소':
                return <span className="badge badge-primary" style={{"padding":"0.6rem 0.5rem", "fontSize":"12px"}}>{status}</span>
            case '결제완료':
            case '주문확정':
            case '환불처리중':
                return <span className="badge badge-secondary" style={{"padding":"0.6rem 0.5rem", "fontSize":"12px"}}>{status}</span>
            case '배송중':
            case '반품중':
                return <span className="badge badge-warning" style={{"padding":"0.6rem 0.5rem", "fontSize":"12px"}}>{status}</span>
            case '결제취소':
            case '배송완료':
            case '반품완료':
            case '환불완료':
            return <span className="badge badge-danger" style={{"padding":"0.6rem 0.5rem", "fontSize":"12px"}}>{status}</span>
            default:
                return  <span className="badge badge-danger" style={{"padding":"0.6rem 0.5rem", "fontSize":"12px"}}>"야호"</span>
        }
    }

    switch (action.type) {
        case ActionTypes.GET_INFO_ORDER_SUCCESS:
            if(payload!==null&&payload!==undefined){
                const {data} = payload;
                if(data!==null&&data!==undefined){
                    return {
                        ...state,
                        info:data,
                        sales:data.map(item=>({
                            orderedId:item.orderedId,
                            detailId:item.orderDetailId,
                            productName:item.productName,
                            status:decoStatus(item.orderStatus),
                            orderDate:item.orderedDate.substring(0,16),
                            totalPrice:item.totalPrice
                        })),
                        shipping:data.filter(item=>{return(
                            item.orderStatus==='결제완료'||
                            item.orderStatus==='배송준비'||
                            item.orderStatus==='배송중'||
                            item.orderStatus==='배송완료'||
                            item.orderStatus==='주문확정'||
                            item.orderStatus==='반품대기'||
                            item.orderStatus==='반품완료'
                        )}).map(item=>({
                            orderedId:item.orderedId,
                            productName:item.productName,
                            orderer:"#"+item.memberId,
                            courier:item.courier?item.courier:"-",
                            trackingNumber:item.trackingNumber?item.trackingNumber:"-",
                            status:item.shippingStatus?decoStatus(item.shippingStatus):"-"
                        }))
                    }
                }
            }
            return state;
        case ActionTypes.LOGOUT:
            return initialState;
        default:
            return state;
        
    }

}

export default seller