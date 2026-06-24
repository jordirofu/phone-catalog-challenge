import { useState, useEffect } from 'react'

export function useFetch(fetchFn, param) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const execute = async () => {
      try {
        setLoading(true)
        setError(null)
        const result = await fetchFn(param)
        setData(result)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }
    execute()
  }, [fetchFn, param])

  return { data, loading, error }
}
