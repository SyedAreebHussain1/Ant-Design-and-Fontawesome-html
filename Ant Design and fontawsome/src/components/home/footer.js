import React from "react"
import '../../App.css'
import { FloatButton } from 'antd';

const AppFooter = () => {
    // const { BackTop } = BackTop;


    return (
        <div className="container-fluid">
            <div className="footer">
                <div className="logo">
                    <i className="fas fa-bolt"></i>
                    <a>Tech</a>
                </div>
                <ul className="socials">
                    <li><a><i className="fa-brands fa-facebook"></i></a></li>
                    <li><a><i className="fa-brands fa-twitter"></i></a></li>
                    <li><a><i className="fa-brands fa-linkedin"></i></a></li>
                    <li><a><i className="fa-brands fa-pinterest"></i></a></li>
                    <li><a><i className="fa-brands fa-instagram"></i></a></li>
                </ul>
                <div className="copyright">Copyright &nbsp;2021 Tech</div>
                <FloatButton.BackTop>
                    <div className="goTop"><i class="fa-light fa-arrow-up-long"></i></div>
                </FloatButton.BackTop>
            </div>
        </div>
    )
}
export default AppFooter