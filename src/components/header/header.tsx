
import HeaderLogo from './components/header-logo';
import HeaderNav from './components/header-nav';
import { memo } from 'react';

function HeaderTemplate ():JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <HeaderLogo/>
          <HeaderNav/>
        </div>
      </div>
    </header>
  );
}
const Header = memo(HeaderTemplate);
export default Header;
