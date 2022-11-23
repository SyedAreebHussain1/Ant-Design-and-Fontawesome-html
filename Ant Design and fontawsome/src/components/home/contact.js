import React from "react";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';

const AppContact = () => {
    const { TextArea } = Input;

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    return (
        <div className="block contactBlock">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>Get in Touch</h2>
                    <p>The standard chunk of Lorem Ipsum used since the 1500s</p>
                </div>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="fullname"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your full name!',
                            },
                        ]}
                    >
                        <Input
                            //  prefix={<UserOutlined className="site-form-item-icon" />} 
                            placeholder="Fullname" />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your email!',
                            },
                        ]}
                    >
                        <Input
                            type="email"
                            placeholder="Email Address"
                        />
                    </Form.Item>
                    <Form.Item name="telephone" >
                        <Input placeholder="Telephone" />
                    </Form.Item>
                    <Form.Item name="subject">
                        <Input placeholder="Subject" />
                    </Form.Item>
                    <Form.Item name='message'>
                        <Input.TextArea rows={3} placeholder="Message" />
                    </Form.Item>
                    <Form.Item
                        name="agreement"
                        valuePropName="checked"
                        rules={[
                            {
                                validator: (_, value) =>
                                    value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                            },
                        ]}
                    >
                        <Checkbox>
                            I agree with terms and conditions.
                        </Checkbox>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}
export default AppContact