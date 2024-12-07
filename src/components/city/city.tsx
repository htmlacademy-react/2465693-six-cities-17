import classNames from 'classnames';

type CityPropsType = {
  name: string;
  isActiveCity: boolean;
};

function City(CityProps: CityPropsType): JSX.Element {
  const { name, isActiveCity } = CityProps;
  const linkClass = classNames('locations__item-link', 'tabs__item', { 'tabs__item--active': isActiveCity });

  return (
    <li className="locations__item">
      <a className={linkClass}>
        <span>{name}</span>
      </a>
    </li>
  );
}

export default City;
