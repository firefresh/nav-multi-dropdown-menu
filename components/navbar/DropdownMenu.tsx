import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import ArrowIcon from '../../public/icons/arrow.svg';
import CogIcon from '../../public/icons/cog.svg';
import ChevronIcon from '../../public/icons/chevron.svg';
import BoltIcon from '../../public/icons/bolt.svg';

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, [])

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props: any) {
    return (
      <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>

      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem>My Profile</DropdownItem>
          <DropdownItem
            leftIcon={<BoltIcon/>}
            rightIcon={<BoltIcon/>}
            goToMenu="features">
            Features
          </DropdownItem>
          <DropdownItem
            leftIcon={<CogIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="settings">
            Settings
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'features'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Features</h2>
          </DropdownItem>
          <DropdownItem leftIcon="&#9729;">Feature 1</DropdownItem>
          <DropdownItem leftIcon="&#9729;">Feature 2</DropdownItem>
          <DropdownItem leftIcon="&#9729;">Feature 3</DropdownItem>
          <DropdownItem leftIcon="&#9729;">Feature 4</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'settings'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Settings</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Power</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Colors</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Devs</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>The Game</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

export default DropdownMenu;