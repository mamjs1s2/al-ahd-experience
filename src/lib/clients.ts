import { Client } from '@/types';

export const clients: Client[] = [
  {
    name: 'Toshiba El Araby',
    logo: '/logos/toshiba.svg',
  },
  {
    name: 'Coca-Cola',
    logo: '/logos/coca-cola.svg',
  },
  {
    name: 'PepsiCo',
    logo: '/logos/pepsico.svg',
  },
  {
    name: 'EPx Logistics',
    logo: '/logos/epx.svg',
  },
  {
    name: 'Paste & Juice',
    logo: '/logos/paste-juice.svg',
  },
];

export const getClientByName = (name: string): Client | undefined => {
  return clients.find((client) => client.name.toLowerCase() === name.toLowerCase());
};