import React from 'react';
import {
  Form,
  Input,
  Space,
  Radio,
  Checkbox,
  Button,
  InputNumber
} from 'antd';
const plainOptions = ['Car', 'Motorbike', 'Bicycle', 'Boat'];

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

const FormOne = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    form.resetFields();
  };

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        prefix: '86',
      }}
      scrollToFirstError
    >
      <Form.Item
        name="firstname"
        label="Firstname"
        tooltip="What do you want others to call you?"
        rules={[
          {
            required: true,
            message: 'Please input your firstname!',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="lastname"
        label="Lastname"
        tooltip="What do you want others to call you?"
        rules={[
          {
            required: true,
            message: 'Please input your lastname!',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="gender"
        label="Gender"
      >
        <Radio.Group>
          <Space direction="vertical">
            <Radio value={"Female"}>Female</Radio>
            <Radio value={"Male"}>Male</Radio>
            <Radio value={"Undifferentiated"}>Undifferentiated</Radio>
          </Space>
        </Radio.Group>
      </Form.Item>
      <Form.Item
        name="age"
        label="Age"
        rules={[
          {
            type: 'number',
            min: 0,
            max: 99,
            message: 'The input is not valid for Age!',
          },
          {
            required: true,
            message: 'Please input your Age!',
          },
        ]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item
        name="transportation"
        label="Mode of transportation"
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

export default FormOne;