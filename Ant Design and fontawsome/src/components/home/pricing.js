import React from 'react';
import { Card, List, Button } from 'antd';

import "../../App.css"

const data = [
    {
        title: 'BASIC',
        content: [
            {
                price: '$12.00',
                space: '5 GB of space',
                user: '1 user',
                support: '24/7 support',
                backup: 'Site reliable',
                access: 'Access from anywhere'
            }
        ]
    },
    {
        title: 'PREMIUM',
        content: [
            {
                price: '$4.00',
                space: '8 GB of space',
                user: '5 users',
                support: '24/7 support',
                backup: 'Site reliable',
                access: 'Access from anywhere'
            }
        ]
    },
    {
        title: 'ENTERPRISE',
        content: [
            {
                price: '$21.00',
                space: '5 GB of space',
                user: '2 users',
                support: '24/7 support',
                backup: 'Site reliable',
                access: 'Access from anywhere'
            }
        ]
    }
];
const AppPricing = () => {
    return (
        <div id='pricing' className="block pricingBlock bgGray">
            <div className='container-fluid'>
                <div className='titleHolder'>
                    <h2>Choose a plan to fit your needs</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <List
                    grid={{
                        gutter: 16,
                        xs: 1,
                        sm: 1,
                        md: 4,
                        lg: 4,
                        xl: 3,
                        xxl: 3,
                    }}
                    dataSource={data}
                    renderItem={(item) => (
                        <List.Item>
                            <Card title={item.title}>
                                <p className='large'>{item.content[0].price}</p>
                                <p>{item.content[0].space}</p>
                                <p>{item.content[0].user}</p>
                                <p>{item.content[0].support}</p>
                                <p>{item.content[0].backup}</p>
                                <Button type="primary" size='large'><i className="fa-solid fa-paper-plane"></i>&nbsp;Get Started</Button>
                            </Card>
                        </List.Item>
                    )}
                />
            </div>
        </div>
    )
}
export default AppPricing