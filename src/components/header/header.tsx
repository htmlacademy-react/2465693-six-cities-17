import HeaderUser from './components/header-user';
import HeaderSign from './components/header-sign';

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
            <a className="header__logo-link header__logo-link--active">
              <img
                className="header__logo"
                src="img/logo.svg"
                alt="6 cities logo"
                width="81"
                height="41"
              />
            </a>
          </div>
          {isHeaderNav && <HeaderNav/>}
        </div>
      </div>
    </header>
  );
}

export default Header;
