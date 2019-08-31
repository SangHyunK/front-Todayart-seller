import React, { Component } from 'react'
import man from '../../../assets/images/dashboard/man.png'
import {connect} from "react-redux";

export class User_panel extends Component {
    render() {
        return (
            <div>
                <div className="sidebar-user text-center">
                    <div><img className="img-60 rounded-circle lazyloaded blur-up" src={man} alt="#" />
                    </div>
                    <h6 className="mt-3 f-14">{this.props.auth.userDetails.nickname}</h6>
                    {this.props.auth.userDetails.role === "ROLE_ARTIST" ? <p>작가</p> : <p>관리자</p>}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps, null)(User_panel)