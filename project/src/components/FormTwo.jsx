import React, { useState } from 'react';
import {
  Form,
  Input,
  Button,
  AutoComplete,
} from 'antd';
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
const mockVal = (str, repeat = 1) => ({
  value: str.repeat(repeat),
});

const FormTwo = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  const onSearch = (searchText) => {
    setOptions(
      !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)],
    );
  };

  const [options, setOptions] = useState([]);
  const onSelect = (data) => {
    console.log('onSelect', data);
  };

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        residence: ['zhejiang', 'hangzhou', 'xihu'],
        prefix: '86',
      }}
      scrollToFirstError
    >
      <Form.Item
        name="Address Line 1"
        label="Address Line 1"
        rules={[
          {
            required: true,
            message: 'Please input your Address Line 1!',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="Address Line 2"
        label="Address Line 2"
        rules={[
          {
            message: 'Please input your Address Line 2!',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="city"
        label="City"
        rules={[
          {
            required: true,
            message: 'Please input your City!',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="state"
        label="State"
        rules={[
          {
            required: true,
            message: 'Please Choose your state!',
            whitespace: true,
          },
        ]}
      >
        <AutoComplete
          options={options}
          style={{ width: 200 }}
          onSelect={onSelect}
          onSearch={onSearch}
          placeholder="input here"
        />
      </Form.Item>
      <Form.Item
        name="country"
        label="Country"
        rules={[
          {
            required: true,
            message: 'Please Choose your Country!',
            whitespace: true,
          },
        ]}
      >
        <AutoComplete
          options={options}
          style={{ width: 200 }}
          onSelect={onSelect}
          onSearch={onSearch}
          placeholder="input here"
        />
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form >
  );
};

export default FormTwo