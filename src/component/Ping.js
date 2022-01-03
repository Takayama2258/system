import React from "react";
import { Popconfirm } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

class Ping extends React.Component {
    render() {
      return <Popconfirm title="Are you sure？" icon={<QuestionCircleOutlined style={{ color: 'red' }} />}>
        <a href="#">Delete</a>
      </Popconfirm>
    }
  }

export default Ping;
