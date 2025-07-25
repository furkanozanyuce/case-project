import React, { useState } from 'react';
import { Layout, Typography, Card, Avatar, Button, Table, Input, Pagination } from 'antd';
import { UserAddOutlined, SearchOutlined, MoreOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import type { PaginationProps } from 'antd/es/pagination';
import type { Customer, TableCustomer } from '../types/index.ts';

const { Content } = Layout;
const { Title, Text } = Typography;

const Musteriler: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchText, setSearchText] = useState<string>('');

  const favoriteCustomers: Customer[] = [
    {
      id: '1',
      name: 'Arkas Lojistik ve Taşımacılık A.Ş',
      location: 'İstanbul / Çekmeköy',
      category: 'Lojistik',
      rating: 'A+',
      balance: '10.000,00₺',
      taxOffice: 'SARIGAZI VD',
      taxNumber: '14212414122',
      iban: 'TRXX 0006 1005 1978 6457 8413',
      initials: 'AL',
      color: '#7c3aed'
    },
    {
      id: '2',
      name: 'Trendyol Grup A.Ş.',
      location: 'İstanbul / Çekmeköy',
      category: 'Lojistik',
      rating: 'A+',
      balance: '9.000,00₺',
      taxOffice: 'SARIGAZI VD',
      taxNumber: '14212414122',
      iban: 'TRXX 0006 1005 1978 6457 8413',
      initials: 'TG',
      color: '#7c3aed'
    },
    {
      id: '3',
      name: 'Mavi Giyim Ticaret A.Ş.',
      location: 'İstanbul / Çekmeköy',
      category: 'Lojistik',
      rating: 'A+',
      balance: '125.534,00₺',
      taxOffice: 'SARIGAZI VD',
      taxNumber: '14212414122',
      iban: 'TRXX 0006 1005 1978 6457 8413',
      initials: 'MG',
      color: '#7c3aed'
    }
  ];

  const customers: TableCustomer[] = [
    {
      key: '1',
      name: 'Mersel Ticaret A.Ş.',
      location: 'İstanbul/Çekmeköy',
      taxOffice: 'SARIGAZI VD',
      taxNumber: '14212414124',
      iban: 'TRXX 0006 1005 1978 6457 8413',
      connectedPerson: 'Erdem BAŞ'
    },
    {
      key: '2',
      name: 'Arkas Lojistik ve Taşımacılık A.Ş.',
      location: 'İstanbul/Çekmeköy',
      taxOffice: 'SARIGAZI VD',
      taxNumber: '14212414124',
      iban: 'TRXX 0006 1005 1978 6457 8413',
      connectedPerson: 'Erdem BAŞ'
    },
    {
      key: '3',
      name: 'Trendyol Grup A.Ş.',
      location: 'İstanbul/Çekmeköy',
      taxOffice: 'SARIGAZI VD',
      taxNumber: '14212414124',
      iban: 'TRXX 0006 1005 1978 6457 8413',
      connectedPerson: 'Erdem BAŞ'
    },
    {
      key: '4',
      name: 'Mersel Ticaret A.Ş.',
      location: 'İstanbul/Çekmeköy',
      taxOffice: 'SARIGAZI VD',
      taxNumber: '14212414124',
      iban: 'TRXX 0006 1005 1978 6457 8413',
      connectedPerson: 'Erdem BAŞ'
    },
    {
      key: '5',
      name: 'Mersel Ticaret A.Ş.',
      location: 'İstanbul/Çekmeköy',
      taxOffice: 'SARIGAZI VD',
      taxNumber: '14212414124',
      iban: 'TRXX 0006 1005 1978 6457 8413',
      connectedPerson: 'Erdem BAŞ'
    },
    {
      key: '6',
      name: 'Mersel Ticaret A.Ş.',
      location: 'İstanbul/Çekmeköy',
      taxOffice: 'SARIGAZI VD',
      taxNumber: '14212414124',
      iban: 'TRXX 0006 1005 1978 6457 8413',
      connectedPerson: 'Erdem BAŞ'
    }
  ];

  const columns: ColumnsType<TableCustomer> = [
    {
      title: 'Müşteri Adı',
      dataIndex: 'name',
      key: 'name',
      render: (text: string) => (
        <div>
          <div className="font-medium text-gray-900">{text}</div>
          <div className="text-xs text-gray-500">Customer Attribute</div>
        </div>
      ),
    },
    {
      title: 'İl/İlçe',
      dataIndex: 'location',
      key: 'location',
      render: (text: string) => <Text className="text-gray-600">{text}</Text>,
    },
    {
      title: 'Vergi Dairesi',
      dataIndex: 'taxOffice',
      key: 'taxOffice',
      render: (text: string) => <Text className="text-gray-600">{text}</Text>,
    },
    {
      title: 'TCKN / VKN',
      dataIndex: 'taxNumber',
      key: 'taxNumber',
      render: (text: string) => <Text className="text-gray-600">{text}</Text>,
    },
    {
      title: 'IBAN',
      dataIndex: 'iban',
      key: 'iban',
      render: (text: string) => <Text className="text-gray-600">{text}</Text>,
    },
    {
      title: 'Bağlantılı Kişi',
      dataIndex: 'connectedPerson',
      key: 'connectedPerson',
      render: (text: string) => <Text className="text-gray-600">{text}</Text>,
    },
  ];

  const handlePageChange: PaginationProps['onChange'] = (page: number) => {
    setCurrentPage(page);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <Content className="p-6 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <Title level={1} className="text-2xl font-semibold text-gray-900 mb-1">
              Müşteriler
            </Title>
            <Text className="text-gray-500">Müşteri bilgileri bu sayfada yer almaktadır.</Text>
          </div>
          <Button
            type="primary"
            icon={<UserAddOutlined />}
            className="bg-purple-600 border-purple-600 hover:bg-purple-700 hover:border-purple-700 h-10 px-4"
          >
            Müşteri Ekle
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="border border-gray-200 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-6 h-6 bg-purple-100 rounded flex items-center justify-center">
                    <Text className="text-purple-600 font-bold text-sm">₺</Text>
                  </div>
                  <Text style={{ fontSize: '1.5rem', fontWeight: 600, color: '#111827' }} className="text-2xl font-semibold text-gray-900">328,746.22</Text>
                </div>
                <Text className="text-gray-500 ml-9">Borçlar</Text>
              </div>
              <Button type="text" icon={<MoreOutlined />} className="text-gray-400" />
            </div>
          </Card>

          <Card className="border border-gray-200 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-6 h-6 bg-purple-100 rounded flex items-center justify-center">
                    <Text className="text-purple-600 font-bold text-sm">₺</Text>
                  </div>
                  <Text style={{ fontSize: '1.5rem', fontWeight: 600, color: '#111827' }} className="text-2xl font-semibold text-gray-900">328,746.22</Text>
                </div>
                <Text className="text-gray-500 ml-9">Alacaklar</Text>
              </div>
              <Button type="text" icon={<MoreOutlined />} className="text-gray-400" />
            </div>
          </Card>
        </div>

        <Card className="border border-gray-200 rounded-lg mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <Title level={3} className="text-lg font-semibold text-gray-900 mb-1">
                Favori Müşteriler
              </Title>
              <Text className="text-gray-500">Favoriye eklenen müşteriler gösterilmektedir.</Text>
            </div>
            <div className="flex items-center space-x-2">
              <Button type="text" icon={<LeftOutlined />} className="text-gray-400" />
              <Button type="text" icon={<RightOutlined />} className="text-gray-400" />
              <Button type="text" icon={<MoreOutlined />} className="text-gray-400" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favoriteCustomers.map((customer) => (
              <div key={customer.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-start space-x-3 mb-4 gap-4">
                  <Avatar
                    size={40}
                    style={{ backgroundColor: customer.color, color: 'white' }}
                    className="flex-shrink-0"
                  >
                    {customer.initials}
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <Text className="font-medium text-gray-900 block truncate">
                      {customer.name}
                    </Text>
                    <Text className="text-sm text-gray-500 block">{customer.location}</Text>
                    <div className="flex items-center space-x-2 mt-1">
                      <Text className="text-xs text-gray-500">{customer.category}</Text>
                      <span className="text-gray-300">•</span>
                      <Text className="text-xs text-gray-500">{customer.rating}</Text>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Text className="text-sm font-medium text-gray-900">Bakiye</Text>
                    <Text className="text-sm font-semibold text-gray-900">{customer.balance}</Text>
                  </div>
                  <div className="flex justify-between">
                    <Text className="text-xs text-gray-500">Vergi Dairesi</Text>
                    <Text className="text-xs text-gray-600">{customer.taxOffice}</Text>
                  </div>
                  <div className="flex justify-between">
                    <Text className="text-xs text-gray-500">VKN / TCKN</Text>
                    <Text className="text-xs text-gray-600">{customer.taxNumber}</Text>
                  </div>
                  <div className="flex justify-between">
                    <Text className="text-xs text-gray-500">IBAN</Text>
                    <Text className="text-xs text-gray-600">{customer.iban}</Text>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="border border-gray-200 rounded-lg">
          <div className="flex items-center justify-between mb-6">
            <div>
              <Title level={3} className="text-lg font-semibold text-gray-900 mb-1">
                Müşteriler
              </Title>
              <Text className="text-gray-500">Müşteriler listelenmektedir</Text>
            </div>
            <Input
              prefix={<SearchOutlined className="text-gray-400" />}
              placeholder="Müşteri Adı"
              className="max-w-xs"
              value={searchText}
              onChange={handleSearchChange}
            />
          </div>

          <Table
            columns={columns}
            dataSource={customers}
            pagination={false}
            className="border-0"
            size="middle"
          />

          <div className="flex justify-end mt-6">
            <Pagination
              current={currentPage}
              total={100}
              pageSize={10}
              onChange={handlePageChange}
              showSizeChanger={false}
              className="custom-pagination"
              itemRender={(page, type, originalElement) => {
                if (type === 'prev') {
                  return (
                    <Button type="text" className="flex items-center space-x-1">
                      <LeftOutlined />
                      <span>Önceki</span>
                    </Button>
                  );
                }
                if (type === 'next') {
                  return (
                    <Button type="text" className="flex items-center space-x-1">
                      <span>Sonraki</span>
                      <RightOutlined />
                    </Button>
                  );
                }
                return originalElement;
              }}
            />
          </div>
        </Card>
      </div>
    </Content>
  );
};

export default Musteriler;