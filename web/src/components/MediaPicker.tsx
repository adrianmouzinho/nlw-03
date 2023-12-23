import { ChangeEvent, useState } from 'react'
import { X } from '@phosphor-icons/react'

export function MediaPicker() {
  const [previews, setPreviews] = useState<string[]>([])

  function onFileSelected(event: ChangeEvent<HTMLInputElement>) {
    const { files } = event.target

    if (!files) {
      return
    }

    const previewsURL = Array.from(files).map((file) =>
      URL.createObjectURL(file),
    )

    setPreviews(previewsURL)
  }

  function handleRemoveFile(previewUrl: string) {
    setPreviews(previews.filter((preview) => preview !== previewUrl))
  }

  return (
    <>
      <input
        type="file"
        multiple
        name="photos"
        onChange={onFileSelected}
        id="media"
        className="sr-only"
      />

      {previews.length > 0 &&
        previews.map((preview, i) => {
          return (
            <div key={`${preview}-${i}`} className="relative">
              <img
                src={preview}
                alt=""
                className="h-24 w-full max-w-[96px] rounded-[20px] object-cover"
              />

              {/* <button
                className="absolute right-0 top-0 flex h-10 w-10 items-center justify-center rounded-bl-[20px] rounded-tr-[20px] border border-[#D3E2E5] bg-white text-[#FF669D]"
                onClick={() => handleRemoveFile(preview)}
              >
                <X className="text-xl" weight="bold" />
              </button> */}
            </div>
          )
        })}
    </>
  )
}
