import { ComponentProps } from 'react'

type PrimaryButtonProps = ComponentProps<'button'>

export function PrimaryButton(props: PrimaryButtonProps) {
  return (
    <button
      className="flex h-16 w-full items-center justify-center gap-2 rounded-[20px] bg-[#37C77F] font-extrabold text-white enabled:hover:bg-[#3EE08F] disabled:cursor-not-allowed disabled:opacity-50"
      {...props}
    />
  )
}
