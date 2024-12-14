import 'leaflet/dist/leaflet.css';
import {useRef, useEffect} from 'react';
import useMap from '../../hooks/use-map';
import { Icon, Marker, layerGroup } from 'leaflet';
import { RentalOffer, SelectedRentalOffer } from '../../types/offer';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const';

type MapProps ={
  className: string;
  offers: (RentalOffer|SelectedRentalOffer)[];
  selectedOffer: RentalOffer|SelectedRentalOffer|undefined;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [14, 39]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [27, 39],
  iconAnchor: [14, 39]
});

function Map ({className, offers, selectedOffer} : MapProps):JSX.Element {
  const mapRef = useRef(null);
  const offerCity = offers[0].city;
  const map = useMap(mapRef, offerCity);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });
        marker.setIcon(
          selectedOffer !== undefined && offer.id === selectedOffer.id
            ? currentCustomIcon
            : defaultCustomIcon
        ).addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, selectedOffer]);

  return (
    <section className={`${className} map`} ref={mapRef}>
    </section>
  );
}

export default Map;
