import { useState } from 'react'
import { getPhones } from '../services/api'
import PhoneSearch from '../components/PhoneSearch'
import PhoneGrid from '../components/PhoneGrid'
import { useFetch } from '../hooks/useFetch'
import { useDebounce } from '../hooks/useDebounce'

export default function PhoneListPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const debouncedSearch = useDebounce(searchTerm, 300)
  const { data, loading, error } = useFetch(getPhones, debouncedSearch)
  const phones = data ?? []

  return (
    <>
      <PhoneSearch
        searchTerm={searchTerm}
        onChange={setSearchTerm}
        count={phones.length}
        loading={loading}
        error={error}
      />
      <PhoneGrid
        phones={phones}
        loading={loading}
        error={error}
        searchTerm={searchTerm}
      />
    </>
  )
}
