import React, { PureComponent } from 'react';
import Dropdown from 'components/Dropdown';
import './styles.scss';

const accountDropdown = [
  {
    label: 'Account',
  },
  {
    label: 'Features',
  },
  {
    label: 'History',
  },
  {
    label: 'Support',
  },
  {
    label: 'Sign out',
  },
];

const langDropdown = [
  {
    label: 'English - LTR',
  },
  {
    label: 'Español',
  },
  {
    label: 'English - RTL',
  },
];

class Header extends PureComponent {
  state = {
    visibleDropdownAccount: false,
    visibleDropdownLang: false,
  };

  showDropdownAccount = () => {
    this.setState(prevState => ({
      visibleDropdownAccount: !prevState.visibleDropdownAccount,
      visibleDropdownLang: false,
    }));
  };

  showDropdownLang = () => {
    this.setState(prevState => ({
      visibleDropdownLang: !prevState.visibleDropdownLang,
      visibleDropdownAccount: false,
    }));
  };
  render() {
    const { visibleDropdownAccount, visibleDropdownLang } = this.state;
    return (
      <div className="containerHeader">
        <div className="headerLeft">
          <button className="btnTag" type="button">
            Tag
          </button>
          <input type="text" placeholder="Search" className="searchInput" />
          <div className="dropdownMenu">
            <button
              type="button"
              className="btnLang"
              onClick={this.showDropdownLang}>
              EN
            </button>
            <Dropdown
              listItems={langDropdown}
              visibleDropdown={visibleDropdownLang}
            />
          </div>
          <buton type="button" className="btnBuy">
            BUY
          </buton>
        </div>
        <div className="headerRight">
          <div className="dropdownMenu">
            <button
              className="btnAccount"
              type="button"
              onClick={this.showDropdownAccount}>
              <p className="accountName">Account Name</p>
              <div className="avatar" alt="AD" />
            </button>
            <Dropdown
              listItems={accountDropdown}
              visibleDropdown={visibleDropdownAccount}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
