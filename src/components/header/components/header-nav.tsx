import HeaderUser from './header-user';
import HeaderSign from './header-sign';

function HeaderNav (): JSX.Element {
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <HeaderUser/>
        <HeaderSign/>
      </ul>
    </nav>);
}

export default HeaderNav;
