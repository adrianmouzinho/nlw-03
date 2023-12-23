import { Sidebar } from '../components/Sidebar'
import { CreateOrphanageForm } from '../components/CreateOrphanageForm'

export function CreateOrphanage() {
  return (
    <div className="min-h-screen w-full">
      <Sidebar />

      <main className="mx-auto w-full max-w-[708px] space-y-10 pb-20 pt-10">
        <span className="block text-center">Adicione um orfanato</span>

        <CreateOrphanageForm />
      </main>
    </div>
  )
}
