import React from 'react';
import "../../App.css"
import { Breadcrumb, Layout, Menu, Anchor } from 'antd';

const { Header, Content, Footer } = Layout;
const { Link } = Anchor;
const AppHeader = () => (
    <div className='container-fluid'>
        <div className='header'>
            <div className="logo" >
                <i className='fas fa-bolt'></i>
                <a style={{ textDecoration: 'none' }} href='https://www.google.com/'>Tech</a>
            </div>
            <Anchor targetOffset='65'>
                <Link href="#hero" title="Home" />
                <Link href="#about" title="About" />
                <Link href="#feature" title="Features" />
                <Link href="#works" title="How it works" />
                <Link href="#faq" title="FAQ" />
                <Link href="#pricing" title="Pricing" />
                <Link href="#contact" title="Contact" />
            </Anchor>
        </div>
    </div>
);
export default AppHeader;
