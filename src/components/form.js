import React from "react"
import { Form, Input, Button, } from 'antd';

const FormComponent = (props) => {
    const { getFieldDecorator } = props.form;

    const handleSubmit = e => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                props.form.resetFields()
            }
        });
    };

    return (
        <Form layout='vertical' wrapperCol={{ span: 22 }} onSubmit={handleSubmit}>
            <Form.Item >
                {getFieldDecorator('name', {
                    rules: [{ required: true, message: 'Please input your name!' }],
                })(<Input placeholder="Name" />)}
            </Form.Item>
            <Form.Item >
                {getFieldDecorator('email', {
                    rules: [{ required: true, message: 'Please input your email!' }],
                })(<Input placeholder="Email" />)}
            </Form.Item>
            <Form.Item >
                {getFieldDecorator('message', {
                    rules: [{ required: true, message: 'Please input your message!' }],
                })(<Input.TextArea autosize={{ minRows: 3, maxRows: 5 }} placeholder="Your Message" />)}
            </Form.Item>
            <Form.Item >
                <Button type="primary" ghost htmlType="submit">
                    Send
                </Button>
            </Form.Item>
        </Form>
    )
}

export default FormComponent