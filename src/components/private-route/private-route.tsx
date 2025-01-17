import {Navigate} from 'react-router-dom';
import {AuthorizationStatus, RoutePath} from '../../const';
import { useAppSelector } from '../../hooks';
import { selectAuthorizationStatus } from '../../store/auth/auth-selector';

type PrivateRouteProps = {
  children: JSX.Element;
}

//компонент в который помещается компонент, который хотим защитить
function PrivateRoute({children}: PrivateRouteProps): JSX.Element {
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);
  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={RoutePath.Login} />
  );
}

export default PrivateRoute;
