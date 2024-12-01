import { Link } from 'react-router-dom';
import Header from '../../components/header/header';
import { Helmet } from 'react-helmet-async';
import { Fragment } from 'react';

function NotFoundScreen():JSX.Element{
  const hideNav = true;
  return (
    <Fragment>
      <Helmet>
        <title>6 городов. Станица не найдена</title>
      </Helmet>
      <Header hideNav = {hideNav} />
      <main className="page__main">
        <div className="container">
          <h1 style={{fontSize: '138px'}}>404</h1>
          <p style={{fontSize: '16px'}}>Oops! The page you are looking for does not exist.</p>
          <Link to="/"style={{cursor: 'pointer', textDecoration: 'underline'}}>Click to return to the main page</Link>
        </div>
      </main>
    </Fragment>
  );
}

export default NotFoundScreen;
