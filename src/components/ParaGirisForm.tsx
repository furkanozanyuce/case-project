import React from 'react';
import { Form, Input, Select, Button, Tabs, Typography } from 'antd';
import { CalendarOutlined, CheckOutlined } from '@ant-design/icons';
import { useForm, Controller } from 'react-hook-form';
import dayjs from 'dayjs';
import type { ParaGirisFormData } from '../types';

const { TextArea } = Input;
const { Text } = Typography;

interface ParaGirisFormProps {
  onSubmit: (data?: ParaGirisFormData) => void;
  onCancel: () => void;
}

interface TabItem {
  key: string;
  label: string;
}

const ParaGirisForm: React.FC<ParaGirisFormProps> = ({ onSubmit, onCancel }) => {
  const { control, handleSubmit } = useForm<ParaGirisFormData>({
    defaultValues: {
      transactionType: 'musteri',
      date: dayjs().format('DD.MM.YYYY'),
      amount: '1.200,00',
    }
  });

  const tabItems: TabItem[] = [
    {
      key: 'musteri',
      label: 'Müşteri',
    },
    {
      key: 'tedarikci',
      label: 'Tedarikçi',
    },
  ];

  const handleSubmitForm = (data: ParaGirisFormData): void => {
    onSubmit(data);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6 w-96">
      <div className="flex items-center space-x-2 mb-6">
        <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
          <CheckOutlined className="text-gray-600" />
        </div>
        <Text className="text-lg font-medium text-gray-900">Para Girişi Ekle</Text>
      </div>

      <Form layout="vertical" onFinish={handleSubmit(handleSubmitForm)}>
        <div className="mb-6">
          <Controller
            name="transactionType"
            control={control}
            render={({ field }) => (
              <Tabs
                activeKey={field.value}
                onChange={(key) => field.onChange(key as 'musteri' | 'tedarikci')}
                items={tabItems}
                className="custom-tabs"
              />
            )}
          />
        </div>
        <Form.Item label="Cari Hesap Kodu" className="mb-4">
          <Controller
            name="accountCode"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="Cari giriniz"
                className="h-10"
              />
            )}
          />
        </Form.Item>
        <Form.Item label={<span>Tarih <span className="text-red-500">*</span></span>} className="mb-4">
          <Controller
            name="date"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                prefix={<CalendarOutlined className="text-gray-400" />}
                placeholder="13.01.2025"
                className="h-10"
              />
            )}
          />
        </Form.Item>
        <Form.Item label={<span>Tutar <span className="text-red-500">*</span></span>} className="mb-4">
          <Controller
            name="amount"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                suffix={
                  <Select
                    defaultValue="₺"
                    className="border-none"
                    style={{ width: 50 }}
                    options={[
                      { value: '₺', label: '₺' },
                      { value: '$', label: '$' },
                      { value: '€', label: '€' },
                    ]}
                  />
                }
                className="h-10"
              />
            )}
          />
        </Form.Item>
        <Form.Item label="Belge No" className="mb-4">
          <Controller
            name="documentNo"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="Belge no girin"
                className="h-10"
              />
            )}
          />
        </Form.Item>
        <Form.Item label="Açıklama" className="mb-6">
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <TextArea
                {...field}
                placeholder="Açıklama yazısı"
                rows={3}
                className="resize-none"
              />
            )}
          />
        </Form.Item>
        <div className="flex space-x-3">
          <Button
            onClick={onCancel}
            className="flex-1 h-10 border-gray-300 text-gray-700 hover:border-gray-400"
          >
            Vazgeç
          </Button>
          <Button
            type="primary"
            htmlType="submit"
            className="flex-1 h-10 bg-purple-600 border-purple-600 hover:bg-purple-700 hover:border-purple-700"
          >
            Onayla
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default ParaGirisForm;