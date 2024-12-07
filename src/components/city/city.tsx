import classNames from 'classnames';

type CityPropsType = {
  name: string;
  isActive: boolean;
};

function City(CityProps: CityPropsType): JSX.Element {
  const { name, isActive } = CityProps;
  const linkClass = classNames('locations__item-link', 'tabs__item', { 'tabs__item--active': isActive });

  return (
    <li className="locations__item">
      <a className={linkClass}>
        <span>{name}</span>
      </a>
    </li>
  );
}

export default City;
