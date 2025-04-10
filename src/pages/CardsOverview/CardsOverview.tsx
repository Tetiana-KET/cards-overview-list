import { CSSProperties, useState } from 'react';
import { Search } from './components/Search';
import { Sort } from './components/Sort';
import { View } from './components/View';
import { Filter } from './components/Filter';

const counterStyle: CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  fontSize: '12px',
  border: '1px solid #161616',
  padding: '0 8px',
  marginLeft: '8px',
};

export const CardsOverview = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBank, setSelectedBank] = useState('');
  const [selectedStrategy, setSelectedStrategy] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [selectedCardType, setSelectedCardType] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  const [viewMode, setViewMode] = useState('');
  const [sortBy, setSortBy] = useState('');

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

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative' }}>
      <div style={{ display: 'flex' }}>
        <h2
          style={{
            lineHeight: '32px',
            fontSize: '24px',
          }}
        >
          Cards
        </h2>
        <span style={counterStyle}>128</span>
      </div>

      <div style={{ display: 'flex', gap: '12px' }}>
        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <View viewMode={viewMode} setViewMode={setViewMode} />
        <Sort sortBy={sortBy} setSortBy={setSortBy} />
        <Filter {...filterProps} />
      </div>
    </div>
  );
};
