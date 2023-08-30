import './css/styles.css';
import { NavLink, Outlet } from 'react-router-dom';
import { Menu } from 'antd';
import {
  HomeOutlined,
  CheckCircleOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons';

function App() {
  return (
    <div className="App">
      <div className='nav-bar'>
        <Menu mode="horizontal" theme="dark">
          <Menu.Item key="home" icon={<HomeOutlined />}>
            <NavLink to="/">Home</NavLink>
          </Menu.Item>
          <Menu.Item key="done" icon={<CheckCircleOutlined />}>
            <NavLink to={'/done'}>Done</NavLink>
          </Menu.Item>
          <Menu.Item key="help" icon={<QuestionCircleOutlined />}>
            <NavLink to={'/Help'}>Help</NavLink>
          </Menu.Item>
          <Menu.Item key="about">About</Menu.Item>
        </Menu>
      </div>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
