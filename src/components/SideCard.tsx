import React from 'react';
import { Layout, Menu, Avatar, Typography, Button } from 'antd';
import {
  HomeOutlined,
  FolderOutlined,
  FileTextOutlined,
  CalendarOutlined,
  BarChartOutlined,
  CheckSquareOutlined,
  UserOutlined,
  DownOutlined,
  CodepenCircleOutlined
} from '@ant-design/icons';
import { Link } from 'react-router';
import type { MenuProps } from 'antd';
import logo from '../assets/logo.png';

const { Sider } = Layout;
const { Text } = Typography;


const SideCard: React.FC = () => {
  const menuItems: MenuProps['items'] = [
    {
      key: 'general',
      label: <Text className="text-xs font-medium text-gray-400 uppercase tracking-wider">GENERAL</Text>,
      type: 'group',
      children: [
        {
          key: 'dashboard',
          icon: <HomeOutlined />,
          label: 'Dashboard',
        },
        {
          key: 'projects',
          icon: <FolderOutlined />,
          label: 'Projects',
        },
        {
          key: 'documents',
          icon: <FileTextOutlined />,
          label: 'Documents',
        },
        {
          key: 'calendar',
          icon: <CalendarOutlined />,
          label: 'Calendar',
        },
      ],
    },
    {
      key: 'untitled',
      label: <Text className="text-xs font-medium text-gray-400 uppercase tracking-wider mt-8">UNTITLED UI</Text>,
      type: 'group',
      children: [
        {
          key: 'reporting',
          icon: <BarChartOutlined />,
          label: 'Reporting',
        },
        {
          key: 'tasks',
          icon: <CheckSquareOutlined />,
          label: (
            <div className="flex items-center justify-between w-full">
              <span>Tasks</span>
              <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded text-xs">8</span>
            </div>
          ),
        },
        {
          key: 'users',
          icon: <UserOutlined />,
          label: 'Users',
        },
      ],
    },
    {
      key: 'teams',
      label: <Text className="text-xs font-medium text-gray-400 uppercase tracking-wider mt-8">YOUR TEAMS</Text>,
      type: 'group',
      children: [
        {
          key: 'catalog',
          icon: <CodepenCircleOutlined />,
          label: (
            <div className="flex items-center justify-between w-full">
              <span>Catalog</span>
              <span className="text-gray-400 text-xs">⌘1</span>
            </div>
          ),
        },
        {
          key: 'warpspeed',
          icon: <CodepenCircleOutlined />,
          label: (
            <div className="flex items-center justify-between w-full">
              <span>Warpspeed</span>
              <span className="text-gray-400 text-xs">⌘2</span>
            </div>
          ),
        },
        {
          key: 'boltshift',
          icon: <CodepenCircleOutlined />,
          label: (
            <div className="flex items-center justify-between w-full">
              <span>Boltshift</span>
              <span className="text-gray-400 text-xs">⌘3</span>
            </div>
          ),
        },
        {
          key: 'sisyphus',
          icon: <CodepenCircleOutlined />,
          label: (
            <div className="flex items-center justify-between w-full">
              <span>Sisyphus</span>
              <span className="text-gray-400 text-xs">⌘4</span>
            </div>
          ),
        },
      ],
    },
  ];

  return (
    <Sider
      width={256}
      className="bg-white border-r border-gray-200 h-screen"
      style={{ position: 'fixed', left: 0, top: 0, bottom: 0 }}
      theme="light"
    >
      <div className="flex flex-col h-full">
        <div className="p-5 border-b border-gray-200">
            <Link to="/">
          <img src={logo} alt="Logo" />
            </Link>
        </div>

        <div className="flex-1 py-4">
          <Menu
            mode="inline"
            items={menuItems}
            className="border-none"
            style={{ backgroundColor: 'transparent' }}
          />
        </div>

        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center space-x-3">
            <Avatar src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop&crop=face" size={40} />
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div className='pl-1'>
                  <Text className="block text-sm font-medium text-gray-900">Olivia Rhye</Text>
                  <Text className="block text-sm text-gray-500">olivia@untitledui.com</Text>
                </div>
                <Button className='p-0 border-none'>
                  <DownOutlined className="text-gray-400 text-xs" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Sider>
  );
};

export default SideCard;