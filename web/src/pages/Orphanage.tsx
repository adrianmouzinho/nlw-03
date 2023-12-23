import { Marker, Popup } from 'react-leaflet'

import { Sidebar } from '../components/Sidebar'
import { Map } from '../components/Map'

import photo01 from '../assets/01.png'
import { PrimaryButton } from '../components/PrimaryButton'
import { Clock, WhatsappLogo } from '@phosphor-icons/react'

export function Orphanage() {
  return (
    <div className="min-h-screen w-full">
      <Sidebar />

      <main className="mx-auto w-full max-w-[708px] space-y-10 pb-20 pt-10">
        <span className="block text-center">Orfanato</span>

        <div className="overflow-hidden rounded-[20px] border border-[#D3E2E5] bg-white text-[#5C8599]">
          <img
            className="mb-6 h-[336px] w-full object-cover"
            src={photo01}
            alt=""
          />

          <div className="mb-16 flex flex-wrap gap-4 px-8 md:flex-nowrap md:justify-between">
            <img
              className="h-[94px] w-[94px] rounded-[20px] object-cover"
              src={photo01}
              alt=""
            />
            <img
              className="h-[94px] w-[94px] rounded-[20px] object-cover"
              src={photo01}
              alt=""
            />
            <img
              className="h-[94px] w-[94px] rounded-[20px] object-cover"
              src={photo01}
              alt=""
            />
            <img
              className="h-[94px] w-[94px] rounded-[20px] object-cover"
              src={photo01}
              alt=""
            />
            <img
              className="h-[94px] w-[94px] rounded-[20px] object-cover"
              src={photo01}
              alt=""
            />
            <img
              className="h-[94px] w-[94px] rounded-[20px] object-cover"
              src={photo01}
              alt=""
            />
          </div>

          <div className="space-y-16 px-20 pb-20">
            <div>
              <h2 className="mb-8 text-[3.375rem] font-bold leading-none text-[#4D6F80]">
                Orf. Esperança
              </h2>
              <p className="mb-16">
                Presta assistência a crianças de 06 a 15 anos que se encontre em
                situação de risco e/ou vulnerabilidade social.
              </p>
              <div className="flex h-[280px] flex-col overflow-hidden rounded-[20px] border border-[#D3E2E5]">
                <Map interactive={false}>
                  <Marker position={[-5.5202746, -47.4784653]}>
                    <Popup>
                      A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                  </Marker>
                </Map>

                <span className="bg-[#E6F7FB] py-3 text-center text-sm font-bold leading-6 text-[#0089A5]">
                  Ver rotas no Google Maps
                </span>
              </div>
            </div>

            <div className="h-px w-full bg-[#D3E2E5]"></div>

            <div className="space-y-6">
              <h3 className="text-4xl font-bold text-[#4D6F80]">
                Instruções para visita
              </h3>
              <p>
                Venha como se sentir a vontade e traga muito amor e paciência
                para dar.
              </p>
              <div className="grid grid-cols-2 gap-5">
                <div className="space-y-4 rounded-[20px] border border-[#B3DAE2] bg-gradient-blue px-6 py-8">
                  <Clock
                    className="block text-[2.5rem] text-[#15B6D6]"
                    weight="bold"
                  />
                  <div>
                    <span className="block">Horário de visitas</span>
                    <span className="block">Das 18h até 8h</span>
                  </div>
                </div>
                <div className="space-y-4 rounded-[20px] border border-[#A1E9C5] bg-gradient-green px-6 py-8 text-[#37C77F]">
                  <Clock className="block text-[2.5rem]" weight="bold" />
                  <div>
                    <span className="block">Horário de visitas</span>
                    <span className="block">Das 18h até 8h</span>
                  </div>
                </div>
              </div>
            </div>

            <PrimaryButton>
              <WhatsappLogo className="text-xl" weight="bold" />
              Entrar em contato
            </PrimaryButton>
          </div>
        </div>
      </main>
    </div>
  )
}
