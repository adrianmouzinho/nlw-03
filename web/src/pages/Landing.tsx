import { Link } from 'react-router-dom'
import { ArrowRight } from '@phosphor-icons/react'

import logoImg from '../assets/logo.svg'
import landingImg from '../assets/landing.svg'

export function Landing() {
  return (
    <div className="grid min-h-screen w-full place-items-center overflow-hidden bg-gradient text-white">
      <div className="relative z-10 flex h-full w-full max-w-[1168px] flex-col items-start justify-between p-6 md:h-full md:max-h-[628px]">
        <img src={logoImg} alt="Happy" className="w-40 md:w-auto" />

        <div className="absolute right-6 top-6 text-right text-xl md:text-2xl">
          <span className="block font-extrabold">Imperatriz</span>
          <span className="block">Maranhão</span>
        </div>

        <div className="w-full space-y-10 md:max-w-sm">
          <h1 className="text-6xl font-extrabold leading-none md:text-7xl">
            Leve felicidade para o mundo
          </h1>
          <p className="text-2xl">
            Visite orfanatos e mude o dia de muitas crianças.
          </p>
        </div>

        <img
          src={landingImg}
          alt="Ilustração de 3 crianças"
          className="absolute right-[122px] z-[-1] hidden w-1/2 -translate-y-1/2 md:top-1/2 md:block lg:w-auto"
        />

        <Link
          to="/app"
          className="bottom-6 right-6 flex h-20 w-20 items-center justify-center self-end rounded-[30px] bg-[#FFD666] text-[#8D734B] transition-colors hover:bg-[#96FEFF] hover:text-[#15C3D6] md:absolute"
        >
          <ArrowRight className="text-[2rem]" weight="bold" />
        </Link>
      </div>
    </div>
  )
}
