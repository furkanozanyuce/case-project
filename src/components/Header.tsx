import React from 'react';
import { Layout, Breadcrumb, Input, Button, type BreadcrumbProps } from 'antd';
import { SearchOutlined, HomeOutlined, PlusOutlined } from '@ant-design/icons';
import { useNavigate, useLocation } from 'react-router';

const { Header: AntHeader } = Layout;

interface BreadcrumbItem {
  title: React.ReactNode;
}

const Header: React.FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  
  const breadcrumbItems: BreadcrumbProps['items'] =
    pathname === '/' ? [
      { href: '/', title: <HomeOutlined /> },
      { href: '#', title: 'Nakit' },
      { title: 'Kasalar' },
    ] :
    pathname === '/musteriler' ? [
      { href: '/', title: <HomeOutlined /> },
      { href: '#', title: 'Gelirler' },
      { title: 'Müşteriler' },
    ] :
    [
      { href: '/', title: <HomeOutlined /> },
      { title: 'Unknown Page' }
    ];

  return (
    <AntHeader style={{ background: '#fff'}}
     className="bg-white px-6 h-16 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <Breadcrumb items={breadcrumbItems} className="text-sm" />
      </div>
      
      <div className="flex items-center space-x-4">
        <Input
          prefix={<SearchOutlined className="text-gray-400" />}
          placeholder="Kasa Arama"
          className="w-80"
          size="middle"
        />
        <Button
          type="primary"
          icon={<PlusOutlined />}
          className="bg-purple-600 border-purple-600 hover:bg-purple-700 hover:border-purple-700"
          onClick={() => navigate('/musteriler')}
        >
          Kasa Ekle
        </Button>
      </div>
    </AntHeader>
  );
};

export default Header;