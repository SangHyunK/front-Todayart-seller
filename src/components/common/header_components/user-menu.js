import React, { Component,Fragment } from 'react'
import {Link} from 'react-router-dom'
//images import
import man from '../../../assets/images/dashboard/man.png'
import {Actions} from "../../../actions";
import {connect} from "react-redux";
export class User_menu extends Component {
    render() {
        return (
            <Fragment>
                    <li className="onhover-dropdown">
                        <div className="media align-items-center">
                            <img className="align-self-center pull-right img-50 rounded-circle blur-up lazyloaded" src={man} alt="header-user" />
                            <div className="dotted-animation"><span className="animate-circle"></span><span className="main-circle"></span></div>
                        </div>
                        <ul className="profile-dropdown onhover-show-div p-20 profile-dropdown-hover">
                            <li><Link to={`/settings/profile`} ><i data-feather="user" />프로필 관리</Link></li>
                            <li><Link to={`/auth/login`} onClick={this.props.logout}><i data-feather="log-out" />로그아웃</Link></li>
                        </ul>
                    </li>
            </Fragment>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(Actions.logout())
});

export default connect(null, mapDispatchToProps)(User_menu)
