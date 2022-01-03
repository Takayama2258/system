import './App.css';
import Picture from './component/Picture';
import {Button} from 'antd';
import {CaretUpOutlined, CaretDownOutlined} from '@ant-design/icons'

function App() {
  return (
    <div className="App">
      <h2>Management System</h2>
      <div className="left">
        <div className="upButton">
          <Button icon={<CaretUpOutlined />}></Button>
        </div>
        <div className="downButton">
          <Button icon={<CaretDownOutlined />}></Button>
        </div>
      </div>
      <div className="right">
          <div className="menu">
            <Button>source</Button>
            <Button>link to</Button>
            <Button>destination</Button>
          </div>
          <div className="container">
            <Picture />
          </div>
          <div className="submit">
            <Button>Submit</Button>
          </div>
      </div>
    </div>
  );
}

export default App;
