import React, { useState } from 'react';
import './styles.scss';

const SideBar = ({ listMenu }) => {
  const [itemSelected, setItemSelected] = useState('');

  return (
    <ul className="containerSidebar">
      {listMenu.map((item, index) => (
        <li key={index}>
          <div
            className={
              itemSelected === item.label ? 'lineLeft active' : 'lineLeft'
            }
          />
          <a
            href="#as"
            onClick={() => setItemSelected(item.label)}
            className={itemSelected === item.label ? 'linkActive' : ''}
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
};
export default SideBar;
