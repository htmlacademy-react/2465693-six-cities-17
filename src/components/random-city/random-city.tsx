import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { changeCity } from '../../store/action';
import { getRandomCity } from '../../utils';
import { RoutePath } from '../../const';

function RandomCity(): JSX.Element {
  const dispatch = useAppDispatch();
  const randomCity = getRandomCity;
  const handleClickCity = () => dispatch(changeCity(randomCity));
  return (
    <section className="locations locations--login locations--current">
      <div className="locations__item">
        <Link className="locations__item-link" to={RoutePath.Index} onClick={handleClickCity}>
          <span>{randomCity}</span>
        </Link>
      </div>
    </section>
  );
}

export default RandomCity;
