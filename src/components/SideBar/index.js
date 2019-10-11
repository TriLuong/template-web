import React from 'react';
import './styles.scss';

const SideBar = ({ listMenu }) => (
  <ul className="containerSidebar">
    {listMenu.map((item, index) => (
      <li>
        <a href="#as" key={index}>
          {item.label}
        </a>
      </li>
    ))}
  </ul>
);
export default SideBar;
