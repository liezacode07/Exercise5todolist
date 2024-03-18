import React from 'react';

interface TabButtonProps {
  tabName: string;
  tab: string;
  setTab: React.Dispatch<React.SetStateAction<string>>;
}

const TabButton: React.FC<TabButtonProps> = ({ tabName, tab, setTab }) => {
  return (
    <li>
      <button className={tab === tabName ? 'active' : ''} onClick={() => setTab(tabName)}>
        {tabName}
      </button>
    </li>
  );
};

export default TabButton;
