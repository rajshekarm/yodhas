type Option = {
  label: string
  value: string
}

type Props = {
  label: string
  value: string
  options: Option[]
  onChange: (value: string) => void
}

export default function SelectInput({
  label,
  value,
  options,
  onChange
}: Props) {
  return (
    <div>
      <label className="block text-xs font-medium text-gray-600 mb-1">
        {label}
      </label>
      <select
        className="w-full p-2 border rounded text-sm bg-white"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">Select</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  )
}
