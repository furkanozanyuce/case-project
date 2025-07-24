import React from 'react';
import { Breadcrumb } from 'antd';
import {HomeOutlined} from '@ant-design/icons';
import logo from '../assets/Group 38.png';

function Header() {
  return (
    <div className='flex items-center gap-6 p-6 bg-gray-100'>
    <img src={logo} alt="Logo" />
    <header className="header">
      <Breadcrumb>
        <Breadcrumb.Item href="/">
          <HomeOutlined />
        </Breadcrumb.Item>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
      </Breadcrumb>
    </header>
    </div>
  );
}
export default Header;