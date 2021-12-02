import React from 'react';
import {
    Form,
    Space,
    Radio,
    Checkbox,
    Button,
} from 'antd';
const plainOptions = ['running/jogging', 'cardio', 'strength training', 'idle or no exercise'];
const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 5,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

const FormThree = () => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    return (
        <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            scrollToFirstError
        >
            <Form.Item
                name="alcohol use"
                label="Alcohol use"
            >
                <Radio.Group>
                    <Space direction="vertical">
                        <Radio value={"No"}>No</Radio>
                        <Radio value={"Yes"}>Yes</Radio>
                        <Radio value={"Not Anymore"}>Not Anymore</Radio>
                    </Space>
                </Radio.Group>
            </Form.Item>
            <Form.Item
                name="smoking"
                label="Smoking"
            >
                <Radio.Group>
                    <Space direction="vertical">
                        <Radio value={"No"}>No</Radio>
                        <Radio value={"Yes"}>Yes</Radio>
                        <Radio value={"Not Anymore"}>Not Anymore</Radio>
                    </Space>
                </Radio.Group>
            </Form.Item>
            <Form.Item
                name="exercise"
                label="Exercise"
            >
                <Checkbox.Group options={plainOptions} />
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">
                    Register
                </Button>
            </Form.Item>
        </Form >
    );
};

export default FormThree;