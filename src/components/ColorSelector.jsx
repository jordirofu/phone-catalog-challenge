import { useState } from 'react'

export default function ColorSelector({ options, selected, onChange }) {
  const [hovered, setHovered] = useState(null)
  const displayName = hovered?.name ?? selected?.name

  return (
    <div className="color-selector">
      <p className="color-selector__label">COLOR. PICK YOUR FAVOURITE.</p>
      <div className="color-selector__options">
        {options.map((option) => (
          <button
            key={option.name}
            className={`color-selector__swatch${selected?.name === option.name ? ' color-selector__swatch--selected' : ''}`}
            style={{ backgroundColor: option.hexCode }}
            onClick={() => onChange(option)}
            onMouseEnter={() => setHovered(option)}
            onMouseLeave={() => setHovered(null)}
          />
        ))}
      </div>
      <p className="color-selector__name">{displayName}</p>
    </div>
  )
}
