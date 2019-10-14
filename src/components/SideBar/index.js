import React, { PureComponent } from 'react';
import './styles.scss';

class SideBar extends PureComponent {
  setItemSelected = itemSelected => {
    const { setItemSelected } = this.props;
    setItemSelected(itemSelected);
  };

  render() {
    const { listMenu, itemSelected } = this.props;
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
              onClick={() => this.setItemSelected(item.label)}
              className={itemSelected === item.label ? 'linkActive' : ''}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    );
  }
}
export default SideBar;
