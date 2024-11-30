import { Link } from 'react-router-dom';

function NotFoundScreen():JSX.Element{
  return (
    <div className="error-container">
      <h1 >404</h1>
      <p>Oops! The page you are looking for does not exist.</p>
      <Link to="/">Click to return to the main page</Link>
    </div>
  );
}

export default NotFoundScreen;
