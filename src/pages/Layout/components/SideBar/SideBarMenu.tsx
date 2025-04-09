import { Menu, MenuProps } from 'antd';

import { useState } from 'react';
import { levelKeys, menuItems } from './menuItems';

export const SideBarMenu = () => {
  const [stateOpenKeys, setStateOpenKeys] = useState(['cards', 'cardsOverview']);

  const onOpenChange: MenuProps['onOpenChange'] = (openKeys) => {
    const currentOpenKey = openKeys.find((key) => stateOpenKeys.indexOf(key) === -1);
    // open
    if (currentOpenKey !== undefined) {
      const repeatIndex = openKeys
        .filter((key) => key !== currentOpenKey)
        .findIndex((key) => levelKeys[key] === levelKeys[currentOpenKey]);

      setStateOpenKeys(
        openKeys
          // remove repeat key
          .filter((_, index) => index !== repeatIndex)
          // remove current level all child
          .filter((key) => levelKeys[key] <= levelKeys[currentOpenKey]),
      );
    } else {
      // close
      setStateOpenKeys(openKeys);
    }
  };

  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={['cardsOverview']}
      openKeys={stateOpenKeys}
      onOpenChange={onOpenChange}
      style={{ width: '100%', paddingInline: 0, paddingTop: '20px', border: 'none' }}
      items={menuItems}
    />
  );
};
