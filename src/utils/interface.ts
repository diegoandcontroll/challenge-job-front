export interface Identification {
  id: string;
  data_source: string;
  order_id?: any;
}

export interface Transaction {
  id: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  value: string;
  discount_value?: any;
  freight?: any;
  freight_type: string;
  payment_type: string;
  payment_card_brand?: any;
  payment_line?: any;
  payment_bar_code?: any;
  payment_url?: any;
  billet_url: string;
  pix_qrcode?: any;
  pix_emv?: any;
  pix_ref?: any;
  pix_expiration_date?: any;
  pix_creation_date?: any;
  pix_url?: any;
  is_upsell?: any;
}

export interface Producer {
  id: string;
  name: string;
  document: string;
  email: string;
  tel?: any;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  telephone?: any;
  document: string;
}

export interface Comission {
  id: string;
  comissions_list: any[];
  co_production_commission: any[];
}

export interface Metadata {
  id: string;
  affiliate_id?: any;
  utm_source?: any;
  utm_medium?: any;
  utm_campaign?: any;
}

export interface Item {
  id: string;
  identification: Identification;
  transaction: Transaction;
  producer: Producer;
  customer: Customer;
  comission: Comission;
  metadata: Metadata;
}

export interface Meta {
  totalItems: number;
  itemCount: number;
  itemsPerPage: number;
  totalPages: number;
  currentPage: number;
}

export interface RootObject {
  items: Item[];
  meta: Meta;
}
