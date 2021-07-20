import React, { useState } from 'react';
import { Menu } from 'antd';
import {
  AppstoreOutlined,
  SettingOutlined,
  UserAddOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { SubMenu, Item } = Menu;

const Header = () => {
  const [current, setCurrent] = useState('');

  const handleClick = (e) => {
    //console.log('click ', e);
    setCurrent(e.key);
  };
  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode='horizontal'>
      <Item key='home' icon={<AppstoreOutlined />} style={{ float: 'left' }}>
        <Link to='/'>Home</Link>
      </Item>
      <Item
        key='register'
        icon={<UserAddOutlined />}
        // style={{ float: 'right' }}
        className='float-right'
      >
        <Link to='/register'>Register</Link>
      </Item>
      <Item
        key='login'
        icon={<UserOutlined />}
        // style={{ float: 'right' }}
        className='float-right'
      >
        <Link to='/login'>Login</Link>
      </Item>

      <SubMenu
        icon={<SettingOutlined />}
        title='Username'
        className='float-left'
        style={{ float: 'left' }}
      >
        <Item key='setting:1'>Option 1</Item>
        <Item key='setting:2'>Option 2</Item>
      </SubMenu>
    </Menu>
  );
};

export default Header;
