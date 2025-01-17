import { LOCATIONS } from '../../const';
import City from '../city/city';


type LocationListProps = {
  activeLocation: string;
};

function LocationsList({ activeLocation }: LocationListProps): JSX.Element {

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {LOCATIONS.map((location) => (
            <City key={location} name={location} isActiveCity={activeLocation === location}/>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default LocationsList;
