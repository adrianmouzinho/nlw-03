import { Link } from 'react-router-dom'
import { Marker, Popup } from 'react-leaflet'
import { ArrowRight, Plus } from '@phosphor-icons/react'

import mapMarkerImg from '../assets/map-marker.svg'
import { Map } from '../components/Map'
import { happyMapIcon } from '../components/happyMapIcon'

export function OrphanagesMap() {
  return (
    <div
      id="orphanages-map"
      className="relative grid min-h-screen w-full md:grid-cols-[400px_auto]"
    >
      <aside className="hidden flex-col items-start justify-between bg-gradient p-20 text-white md:flex">
        <div>
          <img src={mapMarkerImg} alt="Happy" className="mb-20" />

          <h2 className="mb-6 text-[2.5rem] font-extrabold leading-[42px]">
            Escolha <br /> um orfanato no mapa
          </h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </div>

        <div>
          <span className="block font-extrabold">Imperatriz</span>
          <span className="block">Maranhão</span>
        </div>
      </aside>

      <Map>
        <Marker
          icon={happyMapIcon}
          position={[-5.5302746, -47.4784653]}
          eventHandlers={{
            mouseover: (event) => event.target.openPopup(),
          }}
        >
          <Popup
            closeButton={false}
            minWidth={240}
            maxWidth={240}
            className="map-popup"
          >
            Orf. Esperança
            <Link to={`/orphanages/1`}>
              <ArrowRight className="text-xl text-white" weight="bold" />
            </Link>
          </Popup>
        </Marker>

        <Marker
          icon={happyMapIcon}
          position={[-5.5202746, -47.4884653]}
          eventHandlers={{
            mouseover: (event) => event.target.openPopup(),
          }}
        >
          <Popup
            closeButton={false}
            minWidth={240}
            maxWidth={240}
            className="map-popup"
          >
            Lar das meninas
            <Link to={`/orphanages/1`}>
              <ArrowRight className="text-xl text-white" weight="bold" />
            </Link>
          </Popup>
        </Marker>
      </Map>

      <Link
        to="/orphanages/create"
        className="absolute bottom-10 right-10 z-[1000] flex h-16 w-16 items-center justify-center rounded-[20px] bg-[#15C3D6] text-white transition-colors hover:bg-[#17D6EB]"
      >
        <Plus className="text-[2rem]" weight="bold" />
      </Link>
    </div>
  )
}
