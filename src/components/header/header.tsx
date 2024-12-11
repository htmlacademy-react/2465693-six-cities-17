
import HeaderLogo from './components/header-logo';
import HeaderNav from './components/header-nav';

type HeaderNavProps = {
  hideNav?: boolean;
}

function Header ({hideNav = false}: HeaderNavProps):JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <HeaderLogo/>
          </div>
          {hideNav || <HeaderNav/>}
        </div>
      </div>
    </header>
  );
}

export default Header;
