import React, { Component, Fragment } from 'react'
import LoginTabset from './loginTabset';
import { ArrowLeft, Sliders } from 'react-feather';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import stats from '../../assets/images/dashboard/stats.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./login.css";

export class Login extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            arrows: false
        };
        return (
            <Fragment>
                <div className="page-wrapper">
                    <div className="authentication-box">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-5 p-0 card-left">
                                    <div className="card bg-primary">
                                        <div className="svg-icon">
                                            <img src={stats} className="Img-fluid" />
                                        </div>
                                        <Slider className="single-item" {...settings}>
                                            <div>
                                                <div>
                                                    <h3>환영합니다!</h3>
                                                    <p>이 곳은 오늘의아트 작가들을 위한 페이지 입니다. 자신의 작품관리 및 판매를 편하게 해보세요!</p>
                                                </div>
                                            </div>
                                        </Slider >
                                    </div>
                                </div>
                                <div className="col-md-7 p-0 card-right">
                                    <div className="card tab2-card">
                                        <div className="card-body">
                                            <LoginTabset />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Login
