import PhoneCard from './PhoneCard'

export default function PhoneGrid({ phones, loading, error, searchTerm }) {
  if (loading) {
    return <p className="phone-grid__loading">Cargando...</p>
  }
  if (error) {
    return (
      <p className="phone-grid__error">
        Ha ocurrido un error al cargar los teléfonos. Inténtalo de nuevo.{' '}
        {error.message}
      </p>
    )
  }

  if (phones.length === 0) {
    return <p className="phone-grid__empty">No results for "{searchTerm}"</p>
  }

  return (
    <ul className="phone-grid__list">
      {phones.map((phone) => (
        <li key={phone.id}>
          <PhoneCard phone={phone} />
        </li>
      ))}
    </ul>
  )
}
