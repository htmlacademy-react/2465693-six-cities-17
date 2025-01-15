import { RoutePath } from '../../../const';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { Link } from 'react-router-dom';
import { logoutAction } from '../../../store/api-actions';

function HeaderNav (): JSX.Element {
  const dispatch = useAppDispatch();
  const {userInfo} = useAppSelector((state) =>state);

  const handleSignOutClick = () =>{
    dispatch(logoutAction());
  };

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          {userInfo ?
            <Link
              className="header__nav-link header__nav-link--profile"
              to={RoutePath.Favorites}
            >
              <div className="header__avatar-wrapper user__avatar-wrapper"/>
              <span className="header__user-name user__name">
                {userInfo?.email}
              </span>
              {userInfo && <span className="header__favorite-count">3</span>}
            </Link>
            :
            <Link
              className="header__nav-link header__nav-link--profile"
              to={RoutePath.Login}
            >
              <div className="header__avatar-wrapper user__avatar-wrapper"/>
              <span className="header__login">Sign in</span>
            </Link>}
        </li>
        <li className="header__nav-item">
          {
            userInfo &&
              <a
                className="header__nav-link"
                onClick={(evt) => {
                  evt.preventDefault();
                  handleSignOutClick();
                }}
              >
                <span className="header__signout">Sign out</span>
              </a>
          }
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNav;
