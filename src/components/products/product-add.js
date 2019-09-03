import React, { Component, Fragment } from 'react';
import Breadcrumb from '../common/breadcrumb';
import CKEditors from "react-ckeditor-component";
import MyDropzone from '../common/dropzone'
import { Actions } from '../../actions'
import { ActionTypes } from '../../constants/ActionTypes';
import { connect } from 'react-redux';



export class ProductAdd extends Component {
    constructor(props) {
        super(props)


        //this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        this.titleInput = React.createRef();
        this.contentInput = React.createRef();
        this.categoryIdInput = React.createRef();
        this.sizeInput = React.createRef();
        this.priceInput = React.createRef();
        this.shippingFeeInput = React.createRef();
        this.stockInput = React.createRef();

        this.state = {
           
            files: []
        }



    }
 
    onChange(e) {
        var files = e.target.files;
        // console.log(files[0]);
        // this.setState = ({ files: [...this.state.files] });
        // console.log(files);
        var filesArr = Array.prototype.slice.call(files);
        this.setState({
            ...this.state,
             files: [...this.state.files, ...filesArr]
        });
        console.log("aaaaa");
        console.log(filesArr);
        console.log(files);
    }

    removeFile(f) {
        this.setState({ files: this.state.files.filter(x => x !== f) });
    }

    //파일추가 폼 추가 버튼
    addFileInput() {
        var inputContents = '<input type="file" multiple onChange={this.onChange} />'
        var list = document.createElement("input");
        list.setAttribute("type", "file");
        list.setAttribute("multiple", "");

        var att = document.createAttribute("onChange");
        att.value = onchange => this.onChange.bind(this);
        // list.setAttribute("onchange","onchange")
        // h1.setAttributeNode(att);

        // this.onChange = this.onChange.bind(this);
        // var c = this.onChange.bind(this);
        // list.setAttribute("onchange",{c})
        list.setAttributeNode(att);
        // list.innerHTML=inputContents;
        document.getElementById('inputarea').appendChild(list);
    }







      onSubmit = (e) => {

        e.preventDefault();


        console.log('files', this.state.files);

        e.preventDefault();

        this.props.UpdateFiles(this.state.files).then(response => {
            console.log('file response>>', response)
        });        

        let target = document.getElementById("selectBox");

        //alert('선택된 옵션 value 값=' + target.options[target.selectedIndex].value);     // 옵션 value 값
        

        const productName = this.titleInput.current.value;
        const productContent = this.contentInput.current.value;
        const categoryId = target.options[target.selectedIndex].value;
        const productSize = this.sizeInput.current.value;
        const productPrice = this.priceInput.current.value;
        const shippingFee = this.shippingFeeInput.current.value;
        const remain = this.stockInput.current.value;
        const fileId = this.props.items.fileId;

        this.props.addProduct({productName, productContent, categoryId, productSize, productPrice, shippingFee, remain, fileId})
          .then(response => {          
              console.log('실행 후 ::::',productName, productContent, categoryId, productSize, productPrice, shippingFee, remain, fileId)

            if(response.type==ActionTypes.ADD_PRODUCT_SUCCESS){
                this.props.history.push("/products/product-list")  
                console.log('상품등록성공!')  
        } 

          })
          .catch(error => {
            console.log('error>>', error);
          });
      };
    render() {
        return (
            <Fragment>
                <Breadcrumb title="Add Products" parent="Digital" />
                <div className="container-fluid">
                    <form onSubmit={e => this.onSubmit(e)}>
                        <div className="row product-adding">
                            <div className="col-xl-6">
                                <div className="card">

                                    <div className="card-header">
                                        <h5>General</h5>
                                    </div>
                                    <div className="card-body">
                                        <div className="digital-add needs-validation">
                                            <div className="form-group">
                                                <label className="col-form-label pt-0"><span>*</span> 작품명</label>


                                                <input className="form-control"
                                                    typeid="validationCustom01"
                                                    type="text"
                                                    id="title"
                                                    name="title"
                                                    ref={this.titleInput}
                                                    required="" />
                                                <label className="col-form-label pt-0"> </label>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-form-label pt-0"><span>*</span> 사이즈(ex 100x100 형식으로 기재)</label>
                                                <input className="form-control" id="validationCustom02"
                                                    type="text"
                                                    name="size"
                                                    ref={this.sizeInput}
                                                    placeholder="100x100 형식으로 기재"
                                                    required="" />
                                                <label className="col-form-label pt-0"> </label>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-form-label"><span>*</span> 카테고리</label>
                                                <select className="custom-select" id="selectBox" required="">
                                                    <option value="">--선택--</option>
                                                    <option value="1">서양화</option>
                                                    <option value="2">동양화</option>
                                                    <option value="3">기타</option>

                                                </select>
                                                <label className="col-form-label pt-0"> </label>
                                                <label className="col-form-label pt-0"> </label>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-form-label pt-0"><span>*</span> 작품 가격</label>
                                                <input className="form-control" id="validationCustom01"
                                                    type="text"
                                                    name="price"
                                                    ref={this.priceInput}
                                                    required="" />
                                                <label className="col-form-label pt-0"> </label>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-form-label"><span>*</span> 배송비</label>
                                                <input className="form-control" id="validationCustom02"
                                                    type="text"
                                                    name="shippingFee"
                                                    ref={this.shippingFeeInput}
                                                    required="" />
                                                <label className="col-form-label pt-0"> </label>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-form-label pt-0"><span>*</span> 재고 </label>
                                                <input className="form-control" id="validationCustom02" type="text"
                                                    name="stock"
                                                    ref={this.stockInput}
                                                    required="" />
                                                <label className="col-form-label pt-0"> </label>
                                            </div>
                                            <label className="col-form-label pt-0"> </label>
                                            <label className="col-form-label pt-0"> </label>
                                            <label className="col-form-label pt-0"> </label>
                                            {/* <label className="col-form-label pt-0"> 작품이미지</label>
                                        <MyDropzone /> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5>작품 상세 설명</h5>
                                </div>
                                <div className="card-body">
                                    <div className="digital-add needs-validation">
                                       
                                        <div className="form-group">
                                            <label className="col-form-label">작품에 대한 상세한 정보를 적어주세요</label>
                                            <textarea rows="15" cols="12"
                                            type="text"
                                            name="content"
                                            ref={this.contentInput}></textarea>
                                            <div className="form-group">                                        
                                           
                                           </div>
                                        </div>
                                        <div className="form-group">                                        
                                           
                                           </div>
                                        
                                    </div>
                                </div>
                            </div>
                                <div className="card">
                                    <label className="col-form-label pt-0"> 작품이미지</label>
                                    {/* <form onSubmit={e => this.onSubmitFile(e)}> */}
                                        <label className="custom-file-upload" id="inputarea">
                                            <button type="button" onClick={this.addFileInput.bind(this)}>추가</button>
                                            <input type="file" multiple onChange={(e) => this.onChange(e)} />
                                            {/* <i className="fa fa-cloud-upload" /> Attach */}
                                            </label>
                                        {this.state.files.map(x =>
                                            <div className="file-preview" onClick={this.removeFile.bind(this, x)}>{x.name}</div>
                                        )}
                                        <button type="submit">사진 등록</button>
                                    {/* </form> */}
                                    {/* <MyDropzone /> */}
                                    {/* <div className="card-header">
                                    <h5>Meta Data</h5>
                                </div> */}
                                    <div className="card-body">
                                        <div className="digital-add needs-validation">
                                          
                                            <div className="form-group mb-0">
                                                <div className="product-buttons text-center">

                                                    <button type="submit" className="btn btn-primary">등록</button>


                                                    <button type="button" className="btn btn-light">취소</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </Fragment>
        )
    }
}


const mapStateToProps = (state) => ({
    product: state.product,
    auth: state.auth,
    symbol: state.product.symbol,
    items: state.fileReducer.files
});

const mapDispatchToProps = (dispatch) => ({
    addProduct: ({productName, productContent, categoryId, productSize, productPrice, shippingFee, remain, fileId}) => dispatch(Actions.addProduct({productName, productContent, categoryId, productSize, productPrice, shippingFee, remain, fileId})),
    UpdateFiles: (files) => dispatch(Actions.UpdateFiles(files))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductAdd)
