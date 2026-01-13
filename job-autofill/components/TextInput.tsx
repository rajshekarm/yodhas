type Props = {
  label: string
  value: string
  placeholder?: string
  onChange: (value: string) => void
}

export default function TextInput({
  label,
  value,
  placeholder,
  onChange
}: Props) {
  return (
    <div>
      <label className="block text-xs font-medium text-gray-600 mb-1">
        {label}
      </label>
      <input
        className="w-full p-2 border rounded text-sm"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}
