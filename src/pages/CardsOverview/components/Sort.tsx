import { Select } from 'antd';

interface SortProps {
  sortBy: string;
  setSortBy: (query: string) => void;
}

export const Sort = ({ sortBy, setSortBy }: SortProps) => {
  const handleChange = (value: string) => {
    setSortBy(value);
    console.log(`sort by: ${value}`);
  };

  return (
    <Select
      value={sortBy || undefined}
      placeholder="Sorting"
      onChange={handleChange}
      style={{ width: 130 }}
      dropdownStyle={{ width: 214 }}
    >
      <Select.Option value="none">None</Select.Option>
      <Select.Option value="dailyLimitAsc">Daily limit (Min → Max)</Select.Option>
      <Select.Option value="dailyLimitDesc">Daily limit (Max → Min)</Select.Option>
      <Select.Option value="monthlyLimitAsc">Monthly limit (Min → Max)</Select.Option>
      <Select.Option value="monthlyLimitDesc">Monthly limit (Max → Min)</Select.Option>
    </Select>
  );
};
