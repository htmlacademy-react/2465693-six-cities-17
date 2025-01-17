import classNames from 'classnames';
import { useAppDispatch } from '../../hooks';
import { setCity } from '../../store/app/app-slice';

type CityProps = {
  name: string;
  isActiveCity: boolean;
};

function City({ name, isActiveCity}: CityProps): JSX.Element {
  const dispatch = useAppDispatch();
  const linkClass = classNames('locations__item-link', 'tabs__item', { 'tabs__item--active': isActiveCity });

  return (
    <li className="locations__item">
      <a
        className={linkClass}
        onClick={(evt)=>{
          evt.preventDefault();
          dispatch(setCity(name));
        }}
      >
        <span>{name}</span>
      </a>
    </li>
  );
}

export default City;
