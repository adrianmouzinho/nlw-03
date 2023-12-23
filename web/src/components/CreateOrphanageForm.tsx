import { FormEvent } from 'react'
import { Marker, Popup } from 'react-leaflet'
import { useNavigate } from 'react-router-dom'
import { Plus } from '@phosphor-icons/react'

import { PrimaryButton } from './PrimaryButton'
import { Map } from './Map'
import { MediaPicker } from './MediaPicker'

export function CreateOrphanageForm() {
  const navigate = useNavigate()

  async function handleCreateOrphanage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    const name = formData.get('name')
    const description = formData.get('description')
    const phone = formData.get('phone')
    const instructions = formData.get('instructions')
    const openingHours = formData.get('openingHours')

    const isOpenOnWeekends = formData.get('isOpenOnWeekends')
    const filesToUpload = formData.getAll('photos')
    if (filesToUpload[0] instanceof File && filesToUpload[0].size > 0) {
      console.log('photos', filesToUpload[0].size)
    }

    navigate('/app')
  }

  return (
    <form
      className="rounded-[20px] border border-[#D3E2E5] bg-white px-20 pb-20 pt-16"
      onSubmit={handleCreateOrphanage}
    >
      <fieldset className="mb-20 space-y-10">
        <legend className="w-full border-b border-[#D3E2E5] pb-6 text-[2rem] font-bold leading-8 text-[#4D6F80]">
          Dados
        </legend>

        <div className="flex h-[280px] flex-col overflow-hidden rounded-[20px] border border-[#D3E2E5]">
          <Map interactive={false}>
            <Marker position={[-5.5202746, -47.4784653]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </Map>

          <span className="bg-[#F5F8FA] py-3 text-center text-sm font-bold leading-6 text-[#0089A5]">
            Clique no mapa para adicionar a localizaçãos
          </span>
        </div>

        <div className="grid gap-6">
          <label className="grid gap-2">
            <span className="text-base">Nome</span>
            <input
              className="h-16 rounded-[20px] border border-[#D3E2E5] bg-[#F5F8FA] px-6 text-[#5C8599] focus:border-[#12AFCB] focus:outline-none focus:ring-1 focus:ring-[#12AFCB]"
              type="text"
              name="name"
              maxLength={300}
              required
            />
          </label>

          <label className="grid gap-2">
            <span className="text-base">
              Sobre{' '}
              <span className="ml-8 text-sm font-normal">
                Máximo de 300 catacteres
              </span>
            </span>
            <textarea
              className="h-32 resize-none rounded-[20px] border border-[#D3E2E5] bg-[#F5F8FA] px-6 py-4 text-[#5C8599] focus:border-[#12AFCB] focus:outline-none focus:ring-1 focus:ring-[#12AFCB]"
              name="description"
              required
            ></textarea>
          </label>

          <label className="grid gap-2">
            <span className="text-base">Número de Whatsapp</span>
            <input
              className="h-16 rounded-[20px] border border-[#D3E2E5] bg-[#F5F8FA] px-6 text-[#5C8599] focus:border-[#12AFCB] focus:outline-none focus:ring-1 focus:ring-[#12AFCB]"
              type="tel"
              name="phone"
              required
            />
          </label>

          <div className="space-y-2">
            <span className="text-base">Fotos</span>
            <div className="grid grid-cols-5 gap-4">
              <MediaPicker />
              <label
                className="flex h-24 w-24 cursor-pointer items-center justify-center rounded-[20px] border border-dashed border-[#96D2F0] bg-[#F5F8FA] text-[#17D6EB] transition-colors hover:text-[#12AFCB]"
                htmlFor="media"
              >
                <span className="sr-only">Anexar mídia</span>
                <Plus className="text-xl" weight="bold" />
              </label>
            </div>
          </div>
        </div>
      </fieldset>

      <fieldset className="mb-8 space-y-10">
        <legend className="w-full border-b border-[#D3E2E5] pb-6 text-[2rem] font-bold leading-8 text-[#4D6F80]">
          Visitação
        </legend>

        <div className="grid gap-6">
          <label className="grid gap-2">
            <span className="text-base">Instruções</span>
            <textarea
              className="h-32 resize-none rounded-[20px] border border-[#D3E2E5] bg-[#F5F8FA] px-6 py-4 text-[#5C8599] focus:border-[#12AFCB] focus:outline-none focus:ring-1 focus:ring-[#12AFCB]"
              name="instructions"
              required
            ></textarea>
          </label>

          <label className="grid gap-2">
            <span className="text-base">Horário das visitas</span>
            <input
              className="h-16 rounded-[20px] border border-[#D3E2E5] bg-[#F5F8FA] px-6 text-[#5C8599] focus:border-[#12AFCB] focus:outline-none focus:ring-1 focus:ring-[#12AFCB]"
              type="text"
              name="openingHours"
              required
            />
          </label>
        </div>
      </fieldset>

      <div className="space-y-10">
        <label className="flex items-center justify-between">
          <span className="text-base">Atende fim de semana?</span>
          <input type="checkbox" name="isOpenOnWeekends" />
        </label>

        <PrimaryButton type="submit">Confirmar</PrimaryButton>
      </div>
    </form>
  )
}
