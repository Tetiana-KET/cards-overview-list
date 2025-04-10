import { CSSProperties, useCallback, useEffect, useMemo, useState } from 'react';
import { Search } from './components/Search';
import { Sort } from './components/Sort';
import { View } from './components/View';
import { Filter } from './components/Filter';
import { Flex } from 'antd';
import cardsraw from '../../data/cardsMock.json';
import { CardModel } from '@/models/CardModel';
import { CardComponent } from './components/CardComponent';
import { sortCards } from '@/utils/sortCards';
import debounce from 'lodash.debounce';

const counterStyle: CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  fontSize: '12px',
  border: '1px solid #161616',
  padding: '0 8px',
  marginLeft: '8px',
};

export const CardsOverview = () => {
  const cardsMock: CardModel[] = cardsraw as CardModel[];

  const [selectedBank, setSelectedBank] = useState('');
  const [selectedStrategy, setSelectedStrategy] = useState('');
  const [selectedStatus, setSelectedStatus] = useState(''); // For filtering
  const [selectedCardType, setSelectedCardType] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  const [viewMode, setViewMode] = useState('');
  const [sortBy, setSortBy] = useState('');

  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState(searchQuery);

  useEffect(() => {
    const debounced = debounce(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 300);

    debounced();

    return () => {
      debounced.cancel();
    };
  }, [searchQuery]);

  const viewModeForStyles = viewMode || 'vertical';

  // isActive status of each card
  const [cardStatuses, setCardStatuses] = useState<Record<number, boolean>>(
    cardsMock.reduce(
      (acc, card) => {
        acc[card.id] = card.isActive;
        return acc;
      },
      {} as Record<number, boolean>,
    ),
  );

  const filteredCards = useMemo(
    () =>
      sortCards(
        cardsMock.filter((card) => {
          if (selectedStatus === '') return true;
          return selectedStatus === 'active' ? cardStatuses[card.id] : !cardStatuses[card.id];
        }),
        sortBy,
      ),
    [selectedStatus, cardStatuses, cardsMock, sortBy],
  );

  const cardsToRender = useMemo(() => {
    if (debouncedSearchQuery === '') {
      return filteredCards;
    }
    return filteredCards.filter((card) => {
      return (
        card.cardNumber.includes(debouncedSearchQuery) ||
        card.phoneNumber.includes(debouncedSearchQuery) ||
        card.owner.toLowerCase().includes(debouncedSearchQuery)
      );
    });
  }, [debouncedSearchQuery, filteredCards]);

  const filterProps = {
    selectedBank,
    setSelectedBank,
    selectedStrategy,
    setSelectedStrategy,
    selectedStatus,
    setSelectedStatus,
    selectedCardType,
    setSelectedCardType,
    selectedTag,
    setSelectedTag,
  };

  const handleCardStatusChange = (id: number, checked: boolean) => {
    setCardStatuses((prevState) => ({
      ...prevState,
      [id]: checked,
    }));

    // API call here to update the status in the DB
    console.log(`Card ID: ${id} active status updated to: ${checked}`);
  };

  return (
    <Flex vertical gap={32}>
      {/* HEADER */}
      <Flex vertical={false} justify="space-between" wrap gap={20}>
        {/* TITLE */}
        <Flex vertical={false}>
          <h2
            style={{
              lineHeight: '32px',
              fontSize: '24px',
            }}
          >
            Cards
          </h2>
          <span style={counterStyle}>{cardsMock.length}</span>
        </Flex>
        {/* ACTIONS */}
        <Flex vertical={false} gap={12} wrap justify="center">
          <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <View viewMode={viewModeForStyles} setViewMode={setViewMode} />
          <Sort sortBy={sortBy} setSortBy={setSortBy} />
          <Filter {...filterProps} />
        </Flex>
      </Flex>
      {/* WRAPPER FOR CARDS */}
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
    </Flex>
  );
};
