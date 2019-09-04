import React, { Component,Fragment } from 'react'
import Breadcrumb from '../common/breadcrumb';
import data from '../../assets/data/physical_list';
import { Edit, Trash2 } from 'react-feather'
import { Actions } from '../../actions'
import { connect } from 'react-redux'
import { Files } from '../../utils';
import {Link} from 'react-router-dom';
import { ActionTypes } from '../../constants/ActionTypes';
import { toast  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';



export class Product_list extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data,
            userDetails: this.props.auth.userDetails
        }
        console.log('userDetails',this.state.userDetails.role)
    }


    componentDidMount(){

        const { role } = this.state.userDetails;
        console.log('role', role)


        if(role === "ROLE_ADMIN"){
            console.log('어드민이야');
            this.props.fetchArtwork();    
        }else if (role ==="ROLE_ARTIST"){
            console.log('아티스트야');
            this.props.fetchByArtist();
        }else {
            console.log('엘스야');
            this.props.fetchArtwork();
        }

          
    
    }

    
    
    


    render() {


        const { items } = this.props;

        const {thumbnail} = items;
        const { fileName } = thumbnail?thumbnail:{};
        const image = Files.filePath(fileName);



        const deleteProduct=(productId)=>{
            this.props.deleteProduct(productId)
                .then(response=>{
                if(response.type==ActionTypes.DELETE_PRODUCT_SUCCESS){
                    toast.console.warn("상품이 삭제되었습니다");                        
                    console.log('삭제 성공!')  
                } 
            }).catch(error=>{
                console.log('error >>', error)
            })
       }     

        

        return (
            <Fragment>
                <Breadcrumb title="Product List" parent="Physical" />
                <div className="container-fluid">
                    <div className="row products-admin ratio_asos">
                        {
                            items.map((item, i) => {
                                return (
                                    <div className="col-xl-3 col-sm-6" key={i}>
                                        <div className="card">
                                            <div className="products-admin">
                                                <div className="card-body product-box">
                                                    <div className="img-wrapper">
                                                        <div className="lable-block">
                                                           
                                                            </div>
                                                        <div className="front">
                                                            <a className="bg-size"><img className="img-fluid blur-up bg-img lazyloaded" src={Files.filePath(item.thumbnail.fileName)} /></a>
                                                            <div className="product-hover">
                                                                <ul>
                                                                    <li>
                                                                    <Link to={{pathname :`/products/product-update/${item.productId}`,
                                                                        state :{ item:item }}}>
                                                                        <button className="btn" type="button">
                                                                            <Edit className="editBtn" />
                                                                        </button>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <button className="btn" type="button" onClick={e => deleteProduct(item.productId)}>
                                                                            <Trash2 className="deleteBtn" />
                                                                        </button>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="product-detail">
                                                        <div className="rating">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </div>
                                                        <a> <h6 >{item.productName}</h6></a>
                                                        <h4 >{item.productPrice} <del >{}</del></h4>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
                <ToastContainer/>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({  
    symbol: state.product.symbol,
    items : state.product.items,
    auth: state.auth,
})

const mapDispatchToProps = (dispatch) => ({
   
    fetchArtwork:() => dispatch(Actions.fetchArtwork()),
    deleteProduct:(productId) => dispatch(Actions.deleteProduct(productId)),
    fetchByArtist:() => dispatch(Actions.fetchByArtist())
    
   


})

export default connect(mapStateToProps, mapDispatchToProps)(Product_list)


