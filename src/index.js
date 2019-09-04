import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.scss';
import App from './components/app';
import { ScrollContext } from 'react-router-scroll-4';

// Components
import Dashboard from './components/dashboard';

// Customizing
import ProductAdd from './components/products/product-add';
import ProductList from './components/products/product-list';
import ProductUpdate from './components/products/product-update';

// Products physical
import Category from './components/products/physical/category';
import Sub_category from './components/products/physical/sub-category';
import Product_list from './components/products/physical/product-list';
import Add_product from './components/products/physical/add-product';
import Product_detail from './components/products/physical/product-detail';

//Product Digital
import Digital_category from './components/products/digital/digital-category';
import Digital_sub_category from './components/products/digital/digital-sub-category';
import Digital_pro_list from './components/products/digital/digital-pro-list';
import Digital_add_pro from './components/products/product-add';

//Sales
import Orders from './components/sales/orders';
import Shipping from './components/sales/shipping';

//Coupons
import ListCoupons from './components/coupons/list-coupons';
import Create_coupons from './components/coupons/create-coupons';

//Pages
import ListPages from './components/pages/list-page';
import Create_page from './components/pages/create-page';
import Media from './components/media/media';
import List_menu from './components/menus/list-menu';
import Create_menu from './components/menus/create-menu';
import List_user from './components/users/list-user';
import Create_user from './components/users/create-user';
import List_vendors from './components/vendors/list-vendors';
import Create_vendors from './components/vendors/create.vendors';
import Translations from './components/localization/translations';
import Rates from './components/localization/rates';
import Taxes from './components/localization/taxes';
import Profile from './components/settings/profile';
import Reports from './components/reports/report';
import Invoice from './components/invoice';
import Datatable from './components/common/datatable'
import Login from './components/auth/login';
import {Provider} from "react-redux";
import store from "./store";

class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter basename={'/'}>
                    <ScrollContext>
                        <Switch>
                            <Route exact path={`/`} component={Login} />
                            <Route exact path={`/auth/login`} component={Login} />

                            <App>
                                <Route path={`/dashboard`} component={Dashboard} />

                                {/* 상품 */}
                                <Route path={`/products/product-list`} component={ProductList} />
                                <Route path={`/products/add-product`} component={ProductAdd} />
                                <Route path={`/products/product-update/:id`} component={ProductUpdate} />

                                <Route path={`/products/physical/category`} component={Category} />
                                <Route path={`/products/physical/sub-category`} component={Sub_category} />
                                <Route path={`/products/physical/product-list`} component={Product_list} />
                                <Route path={`/products/physical/product-detail`} component={Product_detail} />
                                <Route path={`/products/physical/add-product`} component={Add_product} />

                                <Route path={`/products/digital/digital-category`} component={Digital_category} />
                                <Route path={`/products/digital/digital-sub-category`} component={Digital_sub_category} />
                                <Route path={`/products/digital/digital-product-list`} component={Digital_pro_list} />
                                <Route path={`/products/digital/digital-add-product`} component={Digital_add_pro} />

                                <Route path={`/sales/orders`} component={Orders} />
                                <Route path={`/sales/shipping`} component={Shipping} />

                                <Route path={`/coupons/list-coupons`} component={ListCoupons} />
                                <Route path={`/coupons/create-coupons`} component={Create_coupons} />

                                <Route path={`/pages/list-page`} component={ListPages} />
                                <Route path={`/pages/create-page`} component={Create_page} />

                                <Route path={`/media`} component={Media} />

                                <Route path={`/menus/list-menu`} component={List_menu} />
                                <Route path={`/menus/create-menu`} component={Create_menu} />

                                <Route path={`/users/list-user`} component={List_user} />
                                <Route path={`/users/create-user`} component={Create_user} />

                                <Route path={`/vendors/list_vendors`} component={List_vendors} />
                                <Route path={`/vendors/create-vendors`} component={Create_vendors} />

                                <Route path={`/localization/transactions`} component={Translations} />
                                <Route path={`/localization/currency-rates`} component={Rates} />
                                <Route path={`/localization/taxes`} component={Taxes} />

                                <Route path={`/reports/report`} component={Reports} />

                                <Route path={`/settings/profile`} component={Profile} />

                                <Route path={`/invoice`} component={Invoice} />

                                <Route path={`/data-table`} component={Datatable} />

                            </App>
                        </Switch>
                    </ScrollContext>
                </BrowserRouter>
            </Provider>
        )
    }
}

ReactDOM.render(<Root />, document.getElementById('root'));


