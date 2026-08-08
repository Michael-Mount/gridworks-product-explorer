export type ProductCategory =
  | "protection"
  | "automation"
  | "networking"
  | "monitoring"
  | "communications"
  | "switching";

export type Protocol =
  | "IEC 61850"
  | "Modbus"
  | "DNP3"
  | "Ethernet/IP"
  | "PRP"
  | "SNMP";

export interface Product {
  id: string;
  model: string;
  name: string;
  category: ProductCategory;
  description: string;
  protocols: Protocol[];
  featured: boolean;
}
