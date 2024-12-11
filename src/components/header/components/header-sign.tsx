import { Link } from 'react-router-dom';
import { RoutePath } from '../../../const';

function HeaderSign (): JSX.Element {
  return (
    <li className="header__nav-item">
      {/* При нажатии (cобытие onClick) будет срабатывать логика выхода из аккаунта.  */}
      <a className="header__nav-link" >
        <span className="header__signout">Sign out</span>
      </a>
    </li>
  );
}

export default HeaderSign;
