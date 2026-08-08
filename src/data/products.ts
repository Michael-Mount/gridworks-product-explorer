import type { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "gr-400",
    model: "GR-400",
    name: "Feeder Protection Relay",
    category: "protection",
    description:
      "Advanced protection and monitoring for industrial electrical distribution systems.",
    protocols: ["IEC 61850", "Modbus", "DNP3"],
    featured: true,
  },
  {
    id: "ac-200",
    model: "AC-200",
    name: "Automation Contoller",
    category: "automation",
    description:
      "Programmable automation controller for industrial control applications.",
    protocols: ["Modbus", "Ethernet/IP"],
    featured: false,
  },
  {
    id: "nx-500",
    model: "NX-500",
    name: "Industrial Network Gateway",
    category: "networking",
    description:
      "Secure communication gateway for connected industrial systems.",
    protocols: ["SNMP", "PRP", "Ethernet/IP"],
    featured: true,
  },
];
