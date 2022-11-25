import React, { useState } from 'react';
import "../../App.css"
import { Breadcrumb, Layout, Menu, Anchor, Button, Drawer } from 'antd';

const { Header, Content, Footer } = Layout;
const { Link } = Anchor;
const AppHeader = () => {
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    return (
        <div className='container-fluid'>
            <div className='header'>
                <div className="logo" >
                    <i className='fas fa-bolt'></i>
                    <a style={{ textDecoration: 'none' }} href='https://www.google.com/'>Tech</a>
                </div>
                <div className='mobileHidden'>
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
                <div className='mobileVisible'>
                    <Button type="primary">
                        <i onClick={showDrawer} className="fa-solid fa-bars"></i>
                    </Button>
                    <Drawer title="Tech navbar" placement="right" onClose={onClose} open={open}>
                        <Anchor targetOffset='65'>
                            <Link href="#hero" title="Home" />
                            <Link href="#about" title="About" />
                            <Link href="#feature" title="Features" />
                            <Link href="#works" title="How it works" />
                            <Link href="#faq" title="FAQ" />
                            <Link href="#pricing" title="Pricing" />
                            <Link href="#contact" title="Contact" />
                        </Anchor>
                    </Drawer>
                </div>
            </div>
        </div>
    )
}
export default AppHeader;
