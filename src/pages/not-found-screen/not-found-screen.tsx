import { Link } from 'react-router-dom';
import Header from '../../components/header/header';
import { Fragment } from 'react';

function NotFoundScreen():JSX.Element{
  const isHeaderNav = false;
  return (
    <Fragment>
      <Header isHeaderNav = {isHeaderNav} />
      <div className="error-container">
        <h1 >404</h1>
        <p>Oops! The page you are looking for does not exist.</p>
        <Link to="/">Click to return to the main page</Link>
      </div>
    </Fragment>
  );
}

export default NotFoundScreen;
