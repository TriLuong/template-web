import React, { PureComponent } from 'react';
import './styles.scss';

class DropDown extends PureComponent {
  render() {
    const { listItems, visibleDropdown } = this.props;
    const itemDropdown = listItems.map((item, index) => (
      <button type="button" key={index} className="btnDropdown">
        {item.label}
      </button>
    ));
    return (
      <div className={`containerDropdown ${visibleDropdown ? 'show' : ''}`}>
        {itemDropdown}
      </div>
    );
  }
}

export default DropDown;
