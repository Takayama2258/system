import React from 'react';
import 'antd/dist/antd.min.css';
import './css/SubmitForm.css';
import { Form, Input, Button, Select } from 'antd';
require('./Picture');


const { Option } = Select;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

class SubmitForm extends React.Component {
  formRef = React.createRef();
  onFinish = (values) => {
    console.log(values);
  };
  onReset = () => {
    this.formRef.current.resetFields();
  };
  onFill = () => {
    this.formRef.current.setFieldsValue({
      note: 'Hello world!',
      gender: 'male',
    });
  };
  onSet = () => {
    const select = document.getElementById("source");
    let labels=["1","2","3"];
    for (let index = 0; index < labels.length; index++) {
      const option = document.createElement("Option");
      option.value=labels[index];
      console.log(option);
      select.appendChild(option);
    }
  }




  render() {
    return (
        <Form {...layout} ref={this.formRef} name="control-ref" onFinish={this.onFinish}>
          <Form.Item
              name="source"
              label="Source"
              rules={[
                {
                  required: true,
                },
              ]}
          >
            <Select
                placeholder="Select a option and change input text above"
                id="source"
                allowClear
            >

              <Option value="male">male</Option>
              <Option value="female">female</Option>
              <Option value="other">other</Option>
            </Select>
          </Form.Item>
          <Form.Item
              name="destination"
              label="Destination"
              rules={[
                {
                  required: true,
                },
              ]}
          >
            <Select
                placeholder="Select a option and change input text above"
                id="destination"
                allowClear
            >
              <Option value="male">male</Option>
              <Option value="female">female</Option>
              <Option value="other">other</Option>
            </Select>
          </Form.Item>
          <Form.Item
              noStyle
              shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
          >
            {({ getFieldValue }) =>
                getFieldValue('gender') === 'other' ? (
                    <Form.Item
                        name="customizeGender"
                        label="Customize Gender"
                        rules={[
                          {
                            required: true,
                          },
                        ]}
                    >
                      <Input />
                    </Form.Item>
                ) : null
            }
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button htmlType="button" onClick={this.onReset}>
              Reset
            </Button>
            <Button type="link" htmlType="button" onClick={this.onFill}>
              Fill form
            </Button>
            <Button htmlType="set" onClick={this.onSet}>
              Set
            </Button>
          </Form.Item>
        </Form>
    );
  }
}
export default SubmitForm;