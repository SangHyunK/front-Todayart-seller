import React, { Component, Fragment } from 'react';
import { Tabs, TabList, TabPanel, Tab } from 'react-tabs';
import { User, Unlock } from 'react-feather';
import { withRouter } from 'react-router-dom';
import sha256 from 'sha256';
import {Actions} from "../../actions";
import {ActionTypes} from "../../constants/ActionTypes";
import {connect} from "react-redux";

const loginAsync = (email, password) => (dispatch) => {
    return dispatch(Actions.login(email, password))
        .then(response => {
            if (response.type === ActionTypes.LOGIN_SUCCESS) {
                return dispatch(Actions.getMemberMe())
            } else {
                return Promise.reject(response);
            }
        })
};


export class LoginTabset extends Component {
    constructor(props) {
        super(props);

        this.emailInput = React.createRef();
        this.passwordInput = React.createRef();
    }

    render() {
        const onSubmit = (e) => {
            e.preventDefault();

            const email = this.emailInput.current.value;
            const password = sha256(this.passwordInput.current.value);

            console.log(email, password)

            this.props.login(email, password)
                .then(response => {
                    console.log(response);
                    this.props.history.push('/dashboard');
                })
                .catch(error => {
                    console.log('error >> ', error);
                });
        }

        return (
            <div>
                <Fragment>
                    <Tabs>
                        <TabList className="nav nav-tabs tab-coupon" >
                            <Tab className="nav-link" onClick={(e) => this.clickActive(e)}><User />로그인</Tab>
                            {/*<Tab className="nav-link" onClick={(e) => this.clickActive(e)}><Unlock />회원가입</Tab>*/}
                        </TabList>

                        <TabPanel>
                            <form className="form-horizontal auth-form" onSubmit={e => onSubmit(e)}>
                                <div className="form-group">
                                    <input name="email"
                                           type="email"
                                           className="form-control"
                                           placeholder="아이디(이메일)"
                                           ref={this.emailInput}
                                           required
                                    />
                                </div>
                                <div className="form-group">
                                    <input name="password"
                                           type="password"
                                           className="form-control"
                                           placeholder="비밀번호"
                                           ref={this.passwordInput}
                                           required
                                    />
                                </div>
                                <div className="form-button mb-3">
                                    <button className="btn btn-primary" type="submit">로그인</button>
                                </div>
                                {/*<div className="form-footer">*/}
                                {/*    <span>Or Login up with social platforms</span>*/}
                                {/*    <ul className="social">*/}
                                {/*        <li><a className="fa fa-facebook" href=""></a></li>*/}
                                {/*        <li><a className="fa fa-twitter" href=""></a></li>*/}
                                {/*        <li><a className="fa fa-instagram" href=""></a></li>*/}
                                {/*        <li><a className="fa fa-pinterest" href=""></a></li>*/}
                                {/*    </ul>*/}
                                {/*</div>*/}
                            </form>
                        </TabPanel>
                        {/*<TabPanel>*/}
                        {/*    <form className="form-horizontal auth-form">*/}
                        {/*        <div className="form-group">*/}
                        {/*            <input required="" name="login[username]" type="email" className="form-control" placeholder="Username" id="exampleInputEmail12" />*/}
                        {/*        </div>*/}
                        {/*        <div className="form-group">*/}
                        {/*            <input required="" name="login[password]" type="password" className="form-control" placeholder="Password" />*/}
                        {/*        </div>*/}
                        {/*        <div className="form-group">*/}
                        {/*            <input required="" name="login[password]" type="password" className="form-control" placeholder="Confirm Password" />*/}
                        {/*        </div>*/}
                        {/*        <div className="form-terms">*/}
                        {/*            <div className="custom-control custom-checkbox mr-sm-2">*/}
                        {/*                <input type="checkbox" className="custom-control-input" id="customControlAutosizing" />*/}
                        {/*                <label className="d-block">*/}
                        {/*                    <input className="checkbox_animated" id="chk-ani2" type="checkbox" />*/}
                        {/*                    I agree all statements in <span><a href="">Terms &amp; Conditions</a></span>*/}
                        {/*                </label>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*        <div className="form-button">*/}
                        {/*            <button className="btn btn-primary" type="submit" onClick={() => this.routeChange()}>Register</button>*/}
                        {/*        </div>*/}
                        {/*        <div className="form-footer">*/}
                        {/*            <span>Or Sign up with social platforms</span>*/}
                        {/*            <ul className="social">*/}
                        {/*                <li><a className="fa fa-facebook" href=""></a></li>*/}
                        {/*                <li><a className="fa fa-twitter" href=""></a></li>*/}
                        {/*                <li><a className="fa fa-instagram" href=""></a></li>*/}
                        {/*                <li><a className="fa fa-pinterest" href=""></a></li>*/}
                        {/*            </ul>*/}
                        {/*        </div>*/}
                        {/*    </form>*/}
                        {/*</TabPanel>*/}
                    </Tabs>
                </Fragment>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    login: (username, password) => dispatch(loginAsync(username, password))
});

// eslint-disable-next-line no-undef
export default withRouter(connect(null, mapDispatchToProps)(LoginTabset));