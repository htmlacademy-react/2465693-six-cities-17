import { Link } from 'react-router-dom';
import { RoutePath } from '../../../const';

function HeaderSign (): JSX.Element {
  return (
    <li className="header__nav-item">
      <Link className="header__nav-link" to={RoutePath.Login}>
        <span className="header__signout">Sign out</span>
      </Link>
    </li>
  );
}

export default HeaderSign;
