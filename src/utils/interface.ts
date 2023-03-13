export interface Identification {
  id: string;
  data_source: string;
  order_id?: any;
}

export interface Transaction {
  id: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  value: number;
  discount_value: number;
  freight: number;
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
  pix_url: string;
  is_upsell?: any;
}

export interface Producer {
  id: string;
  name: string;
  document: string;
  email: string;
  tel: string;
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
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
}

export interface Sale {
  id: string;
  identification: Identification;
  transaction: Transaction;
  producer: Producer;
  customer: Customer;
  comission: Comission;
  metadata: Metadata;
}

export interface RootObject {
  sales: Sale;
}
