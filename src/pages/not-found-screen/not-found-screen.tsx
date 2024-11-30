function NotFoundScreen():JSX.Element{
  return (
    <div className="error-container">
      <h1 >404</h1>
      <p>Oops! The page you are looking for does not exist.</p>
      <a href="/">Click to return to the main page</a>
    </div>
  );
}

export default NotFoundScreen;
