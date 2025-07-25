import React from 'react';
import { Layout, Typography } from 'antd';
import ParaBirimi from '../components/ParaBirimi';

const { Content } = Layout;
const { Title } = Typography;

const Kasalar: React.FC = () => {
  return (
    <Content className="p-6 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <Title level={1} className="text-2xl font-semibold text-gray-900 mb-8 border-b border-gray-200 p-2">
          Kasalar
        </Title>
        
        <div className="flex gap-6">
          <ParaBirimi
            title="Türk Lirası"
            currency="TRY ₺"
            balance="13.342,23 ₺"
            description="Bu alan için açıklama yazısı gelecek"
          />
          
          <ParaBirimi
            title="Türk Lirası"
            currency="TRY ₺"
            balance="13.342,23 ₺"
            description="Bu alan için açıklama yazısı gelecek"
          />
        </div>
      </div>
    </Content>
  );
};

export default Kasalar;