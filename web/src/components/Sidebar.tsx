import { Link } from 'react-router-dom'
import { ArrowLeft } from '@phosphor-icons/react'

import mapMarkerImg from '../assets/map-marker.svg'

export function Sidebar() {
  return (
    <aside className="fixed flex h-full max-h-screen flex-col justify-between bg-[#15C3D6] px-6 py-8">
      <Link to="/">
        <img src={mapMarkerImg} alt="Happy" className="w-12" />
      </Link>

      <Link
        to="/app"
        className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#12AFCB] text-white transition-colors hover:bg-[#17D6EB]"
      >
        <ArrowLeft className="text-2xl" weight="bold" />
      </Link>
    </aside>
  )
}
