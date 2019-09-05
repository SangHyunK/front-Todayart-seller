import 'react-toastify/dist/ReactToastify.min.css';
import {ActionTypes} from "../constants/ActionTypes";

const getClientToken = () => {
    const formData = new FormData();
    formData.append('grant_type', 'client_credentials');

    return ({
        type: ActionTypes.GET_TOKEN,
        payload: {
            request: {
                method: 'POST',
                url: '/oauth/token',
                data: formData
            }
        }
    });
};

const login = (email, password) => {
    const formData = new FormData();
    formData.append('grant_type', 'password');
    formData.append('username', email);
    formData.append('password', password);

    return ({
        type: ActionTypes.LOGIN,
        payload: {
            request: {
                method: 'POST',
                url: '/oauth/token',
                data: formData
            }
        }
    });
};

const logout = () => ({
    type: ActionTypes.LOGOUT
});

const getMemberMe = () => {
    return ({
        type: ActionTypes.GET_USER,
        payload: {
            request: {
                method: 'GET',
                url: '/members/me'
            }
        }
    });
};

const refreshToken = (refresh_token) => {
    const formData = new FormData();
    formData.append('grant_type', 'refresh_token');
    formData.append('refresh_token', refresh_token);

    return ({
        type: ActionTypes.REFRESH_TOKEN,
        payload: {
            request: {
                method: 'POST',
                url: '/oauth/token',
                data: formData
            }
        }
    });
};


const addProduct = ({productName, productContent, categoryId, productSize, productPrice, shippingFee, remain, fileId}) => {
    // const formData = new FormData();
    // formData.append("productName", productName)
    // formData.append("productContent", productContent)
    // formData.append("categoryId", categoryId)
    // formData.append("productSize", productSize)
    // formData.append("productPrice", productPrice)
    // formData.append("sheepingFee", sheepingFee)
    // formData.append("remain", remain)
    // formData.append("fileId", fileId)
    console.log('shippingFee',shippingFee)

    return ({
        type: ActionTypes.ADD_PRODUCT,
        payload: {
            request : {
                method: 'POST',
                url: '/product',
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8'                    
                },
                data: JSON.stringify({productName, productContent, productCategory:{categoryId}, productSize, productPrice, shippingFee, remain, thumbnail:{fileId}})
                // data: formData
}
        }})}

const getOrders = () =>{
    return({
        type: ActionTypes.GET_ORDERS,
        payload:{
            request:{
                method: 'GET',
                url: '/orders/artist'
            }
        }
    })
}



const UpdateFiles = (files) => {
    console.log('file', files)
    let formData = new FormData();
    files.map((file, index) => 
      formData.append('file', file));
    
    // formData.append('files', files[0]);
      return ({
        type: ActionTypes.UPDATE_FILES,
        payload: {
          request: {
            method: 'POST',
            url: `/storage/file`,
            headers: {
              'Content-Type': 'multipart/form-data'
            },
            data: formData
          }
        }
      })
    }

    const fetchArtwork = () => {
        return ({
            type: ActionTypes.FETCH_ARTWORK,
            payload: {
                request: {
                    method: 'GET',
                    url: `/product`
                }
            }
    
        })
    }

    const fetchByArtist = () => {
        return ({
            type: ActionTypes.FETCH_BYARTIST,
            payload: {
                request: {
                    method: 'GET',
                    url: `/product/artistId`
                }
            }
    
        })
    }

    const updateProduct = ({productId ,productName, productContent, categoryId, productSize, productPrice, shippingFee, remain, fileId}) => {
        return ({
            type: ActionTypes.UPDATE_PRODUCT,
            payload: {
                request: {
                    method: 'PATCH',
                    url: `/product/${productId}`,
                    headers: {
                        'Content-Type': 'application/json; charset=UTF-8'                    
                    },                
                    data: JSON.stringify({productName, productContent, productCategory:{categoryId}, productSize, productPrice, shippingFee, remain, thumbnail:{fileId}})
                    // data: formData
                }
            }
            
        })
    }


    const deleteProduct  =(productId) =>{
        return({
            type:ActionTypes.DELETE_PRODUCT,
            payload:{
                request:{
                    method: 'DELETE',
                    url: `/product/${productId}`
                }
            }
        })
    }

    const getInfoAboutOrder=()=>{
        return({
            type:ActionTypes.GET_INFO_ORDER,
            payload:{
                request:{
                    method:'GET',
                    url:"/artists/info"
                }
            }
        })
    }

export const Actions = {
    getClientToken,
    login,
    logout,
    getMemberMe,
    refreshToken,
    addProduct,
    UpdateFiles,
    fetchArtwork,
    updateProduct,
    deleteProduct,
    fetchByArtist,
    getOrders,
    getInfoAboutOrder,
};
