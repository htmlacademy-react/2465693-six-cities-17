import { Link } from 'react-router-dom';
import Header from '../../components/header/header';
import { Helmet } from 'react-helmet-async';
import { Fragment } from 'react';

function NotFoundScreen():JSX.Element{
  const isHeaderNav = false;
  return (
    <Fragment>
      <Helmet>
        <title>6 городов. Станица не найдена</title>
      </Helmet>
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
