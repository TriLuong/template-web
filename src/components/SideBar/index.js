import React, { PureComponent } from 'react';
import './styles.scss';

class SideBar extends PureComponent {
  setItemSelected = itemSelected => {
    const { setItemSelected } = this.props;
    setItemSelected(itemSelected);
  };

  render() {
    const { listMenu, itemSelected } = this.props;
    const listMenuTop = listMenu.slice(0, -1);
    const listMenuBottom = listMenu.slice(-1);
    return (
      <div className="containerSider">
        <ul className="containerSidebarTop">
          {listMenuTop.map((item, index) => (
            <li
              key={index}
              style={
                index === listMenuTop.length - 1
                  ? { borderBottom: '2px solid #f3f3f3' }
                  : null
              }>
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
        <ul className="containerSidebarTop">
          {listMenuBottom.map((item, index) => (
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
      </div>
    );
  }
}
export default SideBar;
