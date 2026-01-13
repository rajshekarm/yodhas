type Props = {
  title: string
  children: React.ReactNode
}

export default function Section({ title, children }: Props) {
  return (
    <div className="mb-5">
      <h3 className="text-sm font-semibold text-gray-800 mb-2">
        {title}
      </h3>
      <div className="space-y-2">{children}</div>
    </div>
  )
}
