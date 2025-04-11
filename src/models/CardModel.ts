import { Tag } from './Tag';

export interface CardModel {
  id: number;
  bank: string;
  strategy: string;
  cardNumber: string;
  phoneNumber: string;
  owner: string;
  dailyLimit: {
    used: number;
    total: number;
  };
  monthlyLimit: {
    used: number;
    total: number;
  };
  device: {
    name: string;
    version: string;
    available: boolean;
    percent: string;
  };
  tags: Tag[];
  isActive: boolean;
}
