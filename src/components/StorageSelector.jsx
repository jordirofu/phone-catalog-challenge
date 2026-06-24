export default function StorageSelector({ options, selected, onChange }) {
  return (
    <div className="storage-selector">
      <p className="storage-selector__label">
        STORAGE: ¿HOW MUCH SPACE DO YOU NEED?
      </p>
      <div className="storage-selector__options">
        {options.map((option) => (
          <button
            key={option.capacity}
            className={`storage-selector__btn${selected?.capacity === option.capacity ? ' storage-selector__btn--selected' : ''}`}
            onClick={() => onChange(option)}
          >
            {option.capacity}
          </button>
        ))}
      </div>
    </div>
  )
}
