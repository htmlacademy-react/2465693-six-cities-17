import { FormEvent, useRef } from 'react';
import Header from '../../components/header/header';
import { Helmet } from 'react-helmet-async';
import { useAppDispatch } from '../../hooks';
import { useNavigate, Link } from 'react-router-dom';
import { loginAction } from '../../store/api-actions';
import { RoutePath } from '../../const';
import { getRandomCity } from '../../utils';
import { changeCity } from '../../store/action';

function LoginPage(): JSX.Element {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const randomCity = getRandomCity;

  const handleSubmitLogin = (evt:FormEvent<HTMLFormElement>)=>{
    evt.preventDefault();
    if (emailRef.current && passwordRef.current) {
      dispatch(loginAction({
        email: emailRef.current.value,
        password: passwordRef.current.value,
      }))
        .then((response) => {
          if (response.meta.requestStatus === 'fulfilled') {
            navigate(RoutePath.Index);
          }
        });
    }
  };

  const handleClickCity = () => dispatch(changeCity(randomCity));

  return (
    <div className="page page--gray page--login">
      <Helmet>
        <title>6 городов. Добро пожаловать!</title>
      </Helmet>
      <Header />

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={handleSubmitLogin}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  ref={emailRef}
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  ref={passwordRef}
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  pattern='^.*(?=.*[a-zA-Z])(?=.*\d).*$'
                  title='Пароль должен содержать как минимум 1 букву и 1 цифру'
                  required
                />
              </div>
              <button
                className="login__submit form__submit button"
                type="submit"
              >
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={RoutePath.Index} onClick={handleClickCity}>
                <span>{randomCity}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
