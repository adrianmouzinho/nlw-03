import { ReactNode } from 'react'
import { MapContainer, MapContainerProps, TileLayer } from 'react-leaflet'

interface MapProps extends MapContainerProps {
  interactive?: boolean
  children: ReactNode
}

export function Map({ children, interactive = true, ...props }: MapProps) {
  return (
    <MapContainer
      center={[-5.5202746, -47.4784653]}
      zoom={15}
      style={{ width: '100%', height: '100%' }}
      dragging={interactive}
      touchZoom={interactive}
      zoomControl={interactive}
      scrollWheelZoom={interactive}
      doubleClickZoom={interactive}
      {...props}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {children}
    </MapContainer>
  )
}
