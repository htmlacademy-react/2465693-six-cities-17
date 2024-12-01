import HeaderLogo from './components/header-logo';
import HeaderNav from './components/header-nav';

type HeaderNavProps = {
  isHeaderNav?: boolean;
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
