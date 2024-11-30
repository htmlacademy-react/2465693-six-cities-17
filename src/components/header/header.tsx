import HeaderUser from './components/header-user';
import HeaderSign from './components/header-sign';
import HeaderLogo from './components/header-logo';

type HeaderNavProps = {
  isHeaderNav?: boolean;
}

function HeaderNav (): JSX.Element {
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <HeaderUser/>
        <HeaderSign/>
      </ul>
    </nav>);
}

function Header ({isHeaderNav = true}: HeaderNavProps):JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <HeaderLogo/>
          </div>
          {isHeaderNav && <HeaderNav/>}
        </div>
      </div>
    </header>
  );
}

export default Header;
