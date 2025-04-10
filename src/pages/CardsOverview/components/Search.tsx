import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';

interface SearchProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const Search = ({ searchQuery, setSearchQuery }: SearchProps) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <Input
        style={{ width: 240 }}
        placeholder="Search"
        prefix={<SearchOutlined style={{ color: '#DEDEDE', marginRight: '8px' }} />}
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value.toLocaleLowerCase())}
      />
    </form>
  );
};
