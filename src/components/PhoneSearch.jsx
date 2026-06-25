export default function PhoneSearch({
  searchTerm,
  onChange,
  count,
  loading,
  error,
}) {
  return (
    <div className="phone-search">
      <input
        className="phone-search__input"
        type="search"
        placeholder="Search for a smartphone..."
        value={searchTerm}
        onChange={(e) => onChange(e.target.value)}
      />
      {!loading && !error && (
        <p className="phone-search__count">{count} results</p>
      )}
    </div>
  )
}
