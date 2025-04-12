import { CardComponent } from './CardComponent';
import { Flex } from 'antd';
import { CardModel } from '@/models/CardModel';

interface CardsListProps {
  cardsToRender: CardModel[];
  cardStatuses: { [key: number]: boolean };
  handleCardStatusChange: (id: number, checked: boolean) => void;
  viewModeForStyles: string | 'horizontal';
}

const CardsList = ({ cardsToRender, cardStatuses, handleCardStatusChange, viewModeForStyles }: CardsListProps) => {
  return (
    <Flex vertical={viewModeForStyles === 'vertical'} gap={12} wrap justify="center">
      {cardsToRender &&
        cardsToRender.map((card) => (
          <CardComponent
            key={`${card.id}_${card.cardNumber}`}
            card={{ ...card, isActive: cardStatuses[card.id] }}
            onChange={handleCardStatusChange}
            mode={viewModeForStyles}
          />
        ))}
    </Flex>
  );
};

export default CardsList;
