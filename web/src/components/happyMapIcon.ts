import L from 'leaflet'

import mapMarkerImg from '../assets/map-marker.svg'

export const happyMapIcon = L.icon({
  iconUrl: mapMarkerImg,

  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
})
