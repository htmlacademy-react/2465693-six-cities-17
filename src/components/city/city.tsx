import classNames from 'classnames';

type CityProps = {
  name: string;
  isActiveCity: boolean;
  clickHandler: (city: string) => void;
};

function City(CityProps: CityProps): JSX.Element {
  const { name, isActiveCity, clickHandler } = CityProps;
  const linkClass = classNames('locations__item-link', 'tabs__item', { 'tabs__item--active': isActiveCity });

  return (
    <li className="locations__item">
      <a
        className={linkClass}
        onClick={(evt)=>{
          evt.preventDefault();
          clickHandler(name);
        }}
      >
        <span>{name}</span>
      </a>
    </li>
  );
}

export default City;
