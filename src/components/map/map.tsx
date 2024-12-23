import 'leaflet/dist/leaflet.css';
import {useRef, useEffect} from 'react';
import useMap from '../../hooks/use-map';
import { Icon, Marker, layerGroup } from 'leaflet';
import { RentalOffer, SelectedRentalOffer } from '../../types/offer';
import { MarkerSetting } from '../../const';

type MapProps ={
  className: string;
  offers: (RentalOffer|SelectedRentalOffer)[];
  selectedOffer?: RentalOffer|SelectedRentalOffer;
};

const defaultCustomIcon = new Icon({
  iconUrl: MarkerSetting.UrlDefault,
  iconSize: [MarkerSetting.Width, MarkerSetting.Height],
  iconAnchor: [MarkerSetting.Left, MarkerSetting.Top]
});

const currentCustomIcon = new Icon({
  iconUrl: MarkerSetting.UrlActive,
  iconSize: [MarkerSetting.Width, MarkerSetting.Height],
  iconAnchor: [MarkerSetting.Left, MarkerSetting.Top]
});

const DEFAULT_CLASS_NAME = 'cities__map';

function Map ({className = DEFAULT_CLASS_NAME, offers, selectedOffer} : MapProps):JSX.Element {
  const mapRef = useRef(null);
  const offerCity = offers[0].city;
  const shouldZoomOnScroll = className === DEFAULT_CLASS_NAME;
  const map = useMap(mapRef, offerCity, shouldZoomOnScroll);

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
