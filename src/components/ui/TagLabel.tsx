import { TAGS } from '@/consts/TAGS';
import { Tag } from '@/models/Tag';
import { Button } from 'antd';

export const TagLabel = ({ tag }: { tag: Tag }) => {
  return (
    <Button
      color={TAGS[tag].color}
      variant="filled"
      size="small"
      style={{ border: `1px solid ${TAGS[tag].color}`, pointerEvents: 'none' }}
    >
      {tag}
    </Button>
  );
};
