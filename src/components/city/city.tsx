import classNames from 'classnames';

type CityProps = {
  name: string;
  isActiveCity: boolean;
};

function City(CityProps: CityProps): JSX.Element {
  const { name, isActiveCity } = CityProps;
  const linkClass = classNames('locations__item-link', 'tabs__item', { 'tabs__item--active': isActiveCity });

  return (
    <li className="locations__item">
      {/* При нажатии (cобытие onClick) будет срабатывать логика смены фильтра списка по городу. */}
      <a className={linkClass} >
        <span>{name}</span>
      </a>
    </li>
  );
}

export default City;
