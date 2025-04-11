import { Select } from 'antd';

interface ViewProps {
  viewMode: string;
  setViewMode: (query: string) => void;
}

export const View = ({ viewMode, setViewMode }: ViewProps) => {
  const handleChange = (value: string) => {
    setViewMode(value);
  };

  return (
    <Select style={{ width: 130 }} value={viewMode || undefined} onChange={handleChange} placeholder="View">
      <Select.Option value="vertical">List</Select.Option>
      <Select.Option value="horizontal">Grid</Select.Option>
    </Select>
  );
};
