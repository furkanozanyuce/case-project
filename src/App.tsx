import React from 'react';
import { Layout, ConfigProvider } from 'antd';
import SideCard from './components/SideCard';
import Header from './components/Header';
import Kasalar from './pages/Kasalar';
import { Route, Routes } from 'react-router';
import Musteriler from './pages/Musteriler';

const App: React.FC = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#7c3aed',
          borderRadius: 8,
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        },
        components: {
          Menu: {
            itemBg: 'transparent',
            itemHoverBg: '#f8fafc',
            itemSelectedBg: '#f1f5f9',
            itemSelectedColor: '#334155',
            groupTitleColor: '#64748b',
          },
        },
      }}
    >
      <Layout className="min-h-screen">
        <SideCard />
        
        <Layout className="ml-64">
          <Header />
          <Routes>
            <Route path="/" element={<Kasalar />} />
            <Route path="/musteriler" element={<Musteriler />} />
          </Routes>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default App;