export interface Customer {
  id: string;
  name: string;
  location: string;
  category: string;
  rating: string;
  balance: string;
  taxOffice: string;
  taxNumber: string;
  iban: string;
  initials: string;
  color: string;
}

export interface TableCustomer {
  key: string;
  name: string;
  location: string;
  taxOffice: string;
  taxNumber: string;
  iban: string;
  connectedPerson: string;
}

export interface ParaGirisFormData {
  transactionType: 'musteri' | 'tedarikci';
  accountCode?: string;
  date: string;
  amount: string;
  documentNo?: string;
  description?: string;
}