import React from 'react';
import NavBarItem from './navbar/NavBarItem';
import DropdownMenu from './navbar/DropdownMenu';

import BellIcon from '../public/icons/bell.svg';
import CaretIcon from '../public/icons/caret.svg';
import PlusIcon from '../public/icons/plus.svg';
import BoltIcon from '../public/icons/bolt.svg';

function NavBar() {
    return (
      <nav className="navbar">
        <ul className="navbar-nav">
          <NavBarItem icon={<PlusIcon />} />
          <NavBarItem icon={<BellIcon />} />
          <NavBarItem icon={<BoltIcon />} />
          <NavBarItem icon={<CaretIcon />}>
            <DropdownMenu></DropdownMenu>
          </NavBarItem>
        </ul>
      </nav>
    );
  }

export default NavBar;