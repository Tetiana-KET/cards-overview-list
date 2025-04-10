import { CardModel } from '@/models/CardModel';

export const sortCards = (cards: CardModel[], sortBy: string): CardModel[] => {
  return [...cards].sort((a, b) => {
    switch (sortBy) {
      case 'dailyLimitAsc':
        return a.dailyLimit.used - b.dailyLimit.used;
      case 'dailyLimitDesc':
        return b.dailyLimit.used - a.dailyLimit.used;
      case 'monthlyLimitAsc':
        return a.monthlyLimit.used - b.monthlyLimit.used;
      case 'monthlyLimitDesc':
        return b.monthlyLimit.used - a.monthlyLimit.used;
      default:
        return 0;
    }
  });
};
