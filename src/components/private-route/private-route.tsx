import {Navigate} from 'react-router-dom';
import {AuthorizationStatus, RoutePath} from '../../const';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

//компонент в который помещается компонент, который хотим защитить
function PrivateRoute({authorizationStatus, children}: PrivateRouteProps): JSX.Element {

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={RoutePath.Login} />
  );
}

export default PrivateRoute;
