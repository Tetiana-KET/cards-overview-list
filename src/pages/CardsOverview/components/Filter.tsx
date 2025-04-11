import React, { useState } from 'react';
import { Button, Select, Drawer, theme } from 'antd';
import { FilterOutlined } from '@ant-design/icons';
import { BANKS } from '@/consts/BANKS';
import { STRATEGIES } from '@/consts/STRATEGIES';
import { STATUSES } from '@/consts/STATUSES';
import { TAGS } from '@/consts/TAGS';
import { CARD_TYPES } from '@/consts/CARD_TYPES';
import { Tag } from '@/models/Tag';

const { Option } = Select;

const drawerStyle: React.CSSProperties = {
  width: '350px',
  position: 'absolute',
  top: '165px',
  right: '65px',
  borderRadius: '6px',
  border: '1px solid #161616',
};

interface FilterProps {
  selectedBank: string;
  setSelectedBank: (query: string) => void;
  selectedStrategy: string;
  setSelectedStrategy: (query: string) => void;
  selectedStatus: string;
  setSelectedStatus: (query: string) => void;
  selectedCardType: string;
  setSelectedCardType: (query: string) => void;
  selectedTag: Tag | '';
  setSelectedTag: (query: Tag | '') => void;
}

export const Filter = (props: FilterProps) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const {
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
  } = props;

  const [visible, setVisible] = useState(false);

  const handleApply = () => {
    setVisible(false);
  };

  const handleReset = () => {
    setSelectedBank('');
    setSelectedStrategy('');
    setSelectedStatus('');
    setSelectedCardType('');
    setSelectedTag('');
    setVisible(false);
  };

  const handleOpen = () => {
    setVisible(true);
  };

  const handleClose = () => {
    setVisible(false);
  };

  return (
    <div>
      <Button onClick={handleOpen} icon={<FilterOutlined style={{ fontSize: '16px' }} />} iconPosition="start">
        Filters
      </Button>

      <Drawer
        title="Filters"
        placement="top"
        onClose={handleClose}
        closable={false}
        open={visible}
        style={{ ...drawerStyle, background: colorBgContainer }}
        styles={{
          header: {
            padding: '33px 24px 0px',
          },
        }}
      >
        <div>
          <div>
            <Select
              value={selectedBank || undefined}
              onChange={setSelectedBank}
              placeholder="Bank"
              style={{ width: '100%', marginBottom: '10px' }}
            >
              {BANKS.map((bank) => (
                <Option key={bank.name} value={bank.name.toLowerCase()}>
                  {bank.name}
                </Option>
              ))}
            </Select>
          </div>
          <div>
            <Select
              value={selectedStrategy || undefined}
              onChange={setSelectedStrategy}
              placeholder="Strategy"
              style={{ width: '100%', marginBottom: '10px' }}
            >
              {STRATEGIES.map((strategy) => (
                <Option key={strategy} value={strategy.toLowerCase()}>
                  {strategy}
                </Option>
              ))}
            </Select>
          </div>
          <div>
            <Select
              value={selectedStatus || undefined}
              onChange={setSelectedStatus}
              placeholder="Status"
              style={{ width: '100%', marginBottom: '10px' }}
            >
              {STATUSES.map((status) => (
                <Option key={status} value={status.toLowerCase()}>
                  {status}
                </Option>
              ))}
            </Select>
          </div>
          <div>
            <Select
              value={selectedCardType || undefined}
              onChange={setSelectedCardType}
              placeholder="Card Type"
              style={{ width: '100%', marginBottom: '10px' }}
            >
              {CARD_TYPES.map((cardType) => (
                <Option key={cardType} value={cardType.toLowerCase()}>
                  {cardType}
                </Option>
              ))}
            </Select>
          </div>
          <div>
            <Select
              value={selectedTag || undefined}
              onChange={setSelectedTag}
              placeholder="Tags"
              style={{ width: '100%' }}
            >
              {Object.keys(TAGS).map((tag) => (
                <Option key={tag} value={tag as Tag}>
                  {tag}
                </Option>
              ))}
            </Select>
          </div>
        </div>

        <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between' }}>
          <Button onClick={handleReset}>Reset all</Button>
          <Button type="primary" onClick={handleApply}>
            Apply
          </Button>
        </div>
      </Drawer>
    </div>
  );
};
